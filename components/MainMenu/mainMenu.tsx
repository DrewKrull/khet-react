"use client";
import { useContext, useState } from "react";
import NewGameForm from "../NewGame/newGameForm";
import LoadGameForm from "../LoadGame/loadGameForm";
import LoginForm from "../Login/login";
import { KhetUserContext, KhetUserProvider } from "@/context/khetUserContext";
import HeroBar from "../HeroBar/heroBar";
import PlayGame from "../Play/play";
import { KhetGameContext } from "@/context/khetGameContext";
import { loadGame } from "@/service/khetservice";
import Register from "@/components/Register/register";

export default function MainMenu() {
  const MAIN_MENU_OPTION = "";
  const NEW_GAME_OPTION = "NEW";
  const LOAD_GAME_OPTION = "LOAD";
  const LOGIN_OPTION = "LOGIN";
  const PLAY_OPTION = "PLAY";
  const REGISTER_OPTION = "REGISTER";
  const [menuOption, setMenuOption] = useState(REGISTER_OPTION);
  const [loadedGame, setLoadedGame] = useState(null);

  const { user, setUser } = useContext(KhetUserContext);

  const { currentGameID, currentGame, setCurrentGameID, setCurrentGame } =
    useContext(KhetGameContext);
  const { currentTurnId, setCurrentTurnId } = useState("");
  const isOptionLockedDown =
    menuOption != REGISTER_OPTION && menuOption != LOGIN_OPTION && !user;

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
      setCurrentGame(loaded.gameID);
      // Go to play mode on loading game
      setMenuOption(PLAY_OPTION);
    });
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
          doLogout={() => setMenuOption(REGISTER_OPTION)}
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
        <LoginForm returnToMainMenu={() => setMenuOption(MAIN_MENU_OPTION)} />
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
