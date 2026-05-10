"use client";
import { useState } from "react";
import NewGameForm from "../NewGame/newGameForm";

export default function MainMenu() {
  const NEW_GAME_OPTION = "NEW";
  const LOAD_GAME_OPTION = "LOAD";
  const [menuOption, setMenuOption] = useState("");

  return (
    <div>
      Welcome to Khet React Alpha
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
      {menuOption && menuOption == NEW_GAME_OPTION && <NewGameForm />}
      {menuOption && menuOption == LOAD_GAME_OPTION && <div>Load Game</div>}
      {menuOption && (
        <div className="menuOption" onClick={() => setMenuOption("")}>
          Back to Menu
        </div>
      )}
    </div>
  );
}
