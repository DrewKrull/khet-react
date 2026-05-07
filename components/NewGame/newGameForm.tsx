"use client";

import { useState } from "react";
import { newGameEndpoint, loadGameEndpoint } from "@/constants/KhetConstants";
import DisplayBoard from "@/components/Board/board";
import Board from "@/components/Board/board";

export default function NewGameForm() {
  const [greyPlayerName, setGreyPlayerName] = useState("Grey Player Name");
  const [redPlayerName, setRedPlayerName] = useState("Red Player Name");
  const [selectedConfig, setSelectedConfig] = useState("setup1");
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
    getNewGameData();
  }

  async function getNewGameData() {
    try {
      const requestBody = {
        greyPlayerName,
        redPlayerName,
        selectedConfig,
      };
      const requestBodyString = JSON.stringify(requestBody);

      const response = await fetch(newGameEndpoint, {
        method: "POST",
        body: requestBodyString,
        headers: { "Content-Type": "application/json; charset=UTF-8" },
      });

      if (!response.ok) {
        throw new Error("Response status: ${response.status}");
      }

      // Read in the actual data
      const responseData = await response.json();
      setNewGameData(responseData.board);
    } catch (error) {
      if (error instanceof Error) console.error(error.message);
    }
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
          <input
            name="selectedConfigInput"
            type="text"
            value={selectedConfig}
            onChange={handleSelectedConfigChange}
            disabled
          />
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
