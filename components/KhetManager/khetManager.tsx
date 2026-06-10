"use client";
import { useContext, useEffect, useState } from "react";
import NewGameForm from "../NewGame/newGameForm";
import LoadGameForm from "../LoadGame/loadGameForm";
import LoginForm from "../Login/login";
import { KhetUserContext, KhetUserProvider } from "@/context/khetUserContext";
import HeroBar from "../HeroBar/heroBar";
import PlayGame from "../Play/play";
import { KhetGameContext } from "@/context/khetGameContext";
import { loadGame } from "@/service/khetservice";
import Register from "@/components/Register/register";
import { createHash } from "crypto";
import { login } from "@/service/khetservice";

export default function KhetManager() {
  let storedUserJson: string | null = "";
  if (typeof window !== "undefined") {
    storedUserJson = localStorage.getItem("currentUserLoginInsecure");
  }
  let locallyStoredUser = null;
  // Get any stored user info from localstorage
  if (storedUserJson && storedUserJson.length > 0) {
    locallyStoredUser = JSON.parse(storedUserJson);
  }
  let locallyStoredUserName = "";
  let locallyStoredPassword = "";

  if (locallyStoredUser) {
    locallyStoredUserName = locallyStoredUser["storedUserName"];
    locallyStoredPassword = locallyStoredUser["storedPassword"];
  }

  const [storedUserName, setStoredUserName] = useState(locallyStoredUserName);
  const [storedPassword, setStoredPassword] = useState(locallyStoredPassword);

  const MAIN_MENU_OPTION = "";
  const NEW_GAME_OPTION = "NEW";
  const LOAD_GAME_OPTION = "LOAD";
  const LOGIN_OPTION = "LOGIN";
  const PLAY_OPTION = "PLAY";
  const REGISTER_OPTION = "REGISTER";
  const [menuOption, setMenuOption] = useState(
    locallyStoredUserName ? LOGIN_OPTION : REGISTER_OPTION,
  );
  const [failedLogin, setFailedLogin] = useState(false);

  const { user, setUser } = useContext(KhetUserContext);

  const { currentGameID, currentGame, setCurrentGameID, setCurrentGame } =
    useContext(KhetGameContext);
  const { currentTurnId, setCurrentTurnId } = useState("");
  const isOptionLockedDown =
    menuOption != REGISTER_OPTION && menuOption != LOGIN_OPTION && !user;

  async function calculateHash(text) {
    return createHash("sha256").update(text).digest("base64");
  }

  function handleNewGame(gameID) {
    // Load the new game then enter player mode
    const loadedGame = loadGame(gameID).then((loaded) => {
      setCurrentGameID(gameID);
      setCurrentGame(loaded);
      setMenuOption(PLAY_OPTION);
    });
  }

  function backToMenu() {
    setCurrentGame(null);
    setCurrentGameID(null);
    setMenuOption(MAIN_MENU_OPTION);
  }

  function loadGameById(loadGameId) {
    loadGame(loadGameId).then((loaded) => {
      setCurrentGame(loaded);
      setCurrentGameID(loaded.gameID);
      // Go to play mode on loading game
      setMenuOption(PLAY_OPTION);
    });
  }

  useEffect(() => {
    if (
      storedUserName &&
      storedUserName.length > 0 &&
      storedPassword &&
      storedPassword.length > 0
    ) {
      // Hash the password immediately why not?
      let hashedPassword = "";
      calculateHash(storedPassword).then((result) => {
        hashedPassword = result;
        // Attempt login and store in context
        login(storedUserName, hashedPassword).then((result) => {
          // Happy path, login produced a result
          if (result) {
            setUser(result);
            localStorage.setItem(
              "currentUserLoginInsecure",
              JSON.stringify({ storedUserName, storedPassword }),
            );
            setMenuOption(MAIN_MENU_OPTION);
          }
          // SAD CLOWN, failed login treatment
          else {
            setFailedLogin(true);
          }
        });
      });
    }
  }, [setUser, storedUserName, storedPassword]);

  function handleLogout() {
    setMenuOption(REGISTER_OPTION);
    localStorage.removeItem("currentUserLoginInsecure");
  }

  function processLogin(userName, password) {
    setStoredUserName(userName);
    setStoredPassword(password);
  }

  // HARD SHUT DOWN ANYONE TRYING TO LOAD THE MAIN MENU WHEN NOT LOGGED IN
  if (isOptionLockedDown) {
    <>
      return <div>INVALID MENU OPTION</div>
    </>;
  }
  return (
    <div>
      <div className="menuHeader">
        <div className="menuHeading">Welcome to Khet Alpha</div>
        <HeroBar
          doLogin={() => setMenuOption(LOGIN_OPTION)}
          doLogout={handleLogout}
        />
      </div>
      {!menuOption && (
        <div className="menuOptions">
          <div
            className="menuOption"
            onClick={() => setMenuOption(NEW_GAME_OPTION)}
          >
            New Game
          </div>
          <div
            className="menuOption"
            onClick={() => setMenuOption(LOAD_GAME_OPTION)}
          >
            Load Game
          </div>
        </div>
      )}
      {menuOption && menuOption == LOGIN_OPTION && (
        <LoginForm
          returnToMainMenu={() => setMenuOption(MAIN_MENU_OPTION)}
          locallyStoredUser={locallyStoredUser}
          processLogin={processLogin}
          failedLogin={failedLogin}
        />
      )}
      {menuOption && menuOption == NEW_GAME_OPTION && (
        <NewGameForm onNewGame={handleNewGame} />
      )}
      {menuOption && menuOption == LOAD_GAME_OPTION && (
        <LoadGameForm loadGame={loadGameById} />
      )}
      {menuOption && menuOption == PLAY_OPTION && (
        <PlayGame
          board={currentGame}
          currentGameID={currentGameID}
          refreshBoard={loadGameById}
        />
      )}
      {menuOption && menuOption == REGISTER_OPTION && (
        <Register
          returnToMainMenu={() => setMenuOption(MAIN_MENU_OPTION)}
          navigateToLogin={() => setMenuOption(LOGIN_OPTION)}
        />
      )}{" "}
      {menuOption && user && (
        <div className="menuOption" onClick={() => backToMenu()}>
          Back to Menu
        </div>
      )}
    </div>
  );
}
