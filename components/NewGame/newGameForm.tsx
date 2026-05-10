"use client";

import { useState } from "react";
import {
  newGameEndpoint,
  loadGameEndpoint,
  configurationOptions,
} from "@/constants/KhetConstants";
import DisplayBoard from "@/components/Board/board";
import Board from "@/components/Board/board";
import { getNewGameData } from "@/service/khetservice";

export default function NewGameForm() {
  const [greyPlayerName, setGreyPlayerName] = useState("Grey Player Name");
  const [redPlayerName, setRedPlayerName] = useState("Red Player Name");
  const [selectedConfig, setSelectedConfig] = useState(
    configurationOptions[0].value,
  );
  const [newGameData, setNewGameData] = useState([]); // Might be temporary once we know where we're actually putting the data

  function handleRedPlayerNameChange(e) {
    setRedPlayerName(e.target.value);
  }

  function handleGreyPlayerNameChange(e) {
    setGreyPlayerName(e.target.value);
  }

  function handleSelectedConfigChange(e) {
    setSelectedConfig(e.target.value);
  }

  function handleNewGameSubmit(e) {
    e.preventDefault();
    getNewGameData(greyPlayerName, redPlayerName, selectedConfig).then(
      (newGameData) => setNewGameData(newGameData),
    );
  }

  return (
    <div>
      <form onSubmit={handleNewGameSubmit}>
        <div className="form-row">
          <label>Red Player Name:</label>
          <input
            name="redPlayerNameInput"
            type="text"
            value={redPlayerName}
            onChange={handleRedPlayerNameChange}
          />
        </div>
        <div className="form-row">
          <label>Grey Player Name:</label>
          <input
            name="greyPlayerNameInput"
            type="text"
            value={greyPlayerName}
            onChange={handleGreyPlayerNameChange}
          />
        </div>
        <div className="form-row">
          <label>Configuration:</label>
          <select
            name="selectedConfigInput"
            value={selectedConfig}
            onChange={handleSelectedConfigChange}
          >
            {configurationOptions.map((configOption) => (
              <option key={configOption.value} value={configOption.value}>
                {configOption.display}
              </option>
            ))}
          </select>
        </div>
        <input type="submit" />
      </form>

      <div>
        New Game Data:
        <div>Grey Player Name : {newGameData.GreyPlayerName}</div>
        <div>Red Player Name : {newGameData.RedPlayerName}</div>
      </div>

      <div>
        <Board boardState={newGameData.boardState} />
      </div>
    </div>
  );
}
