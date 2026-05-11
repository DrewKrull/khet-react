"use client";
import { useState } from "react";
import NewGameForm from "../NewGame/newGameForm";
import LoadGameForm from "../LoadGame/loadGameForm";
import { FaRegUser } from "react-icons/fa";
import LoginForm from "../Login/login";

export default function MainMenu() {
  const NEW_GAME_OPTION = "NEW";
  const LOAD_GAME_OPTION = "LOAD";
  const LOGIN_OPTION = "LOGIN";
  const [menuOption, setMenuOption] = useState("");

  return (
    <div>
      <div className="menuHeader">
        <div className="menuHeading">Welcome to Khet React Alpha</div>
        <div className="menuLinks">
          <FaRegUser size={40} onClick={() => setMenuOption(LOGIN_OPTION)} />
        </div>
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
      {menuOption && menuOption == LOGIN_OPTION && <LoginForm />}
      {menuOption && menuOption == NEW_GAME_OPTION && <NewGameForm />}
      {menuOption && menuOption == LOAD_GAME_OPTION && <LoadGameForm />}
      {menuOption && (
        <div className="menuOption" onClick={() => setMenuOption("")}>
          Back to Menu
        </div>
      )}
    </div>
  );
}
