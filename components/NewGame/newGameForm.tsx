"use client";

import { useContext, useState } from "react";
import { configurationOptions } from "@/constants/KhetConstants";
import { getNewGameData } from "@/service/khetservice";
import { KhetUserContext } from "@/context/khetUserContext";

export default function NewGameForm({ onNewGame }) {
  const { user, setUser } = useContext(KhetUserContext);
  console.log(user);
  const [greyPlayerName, setGreyPlayerName] = useState("Grey Player Name");
  const [redPlayerName, setRedPlayerName] = useState("Red Player Name");
  const [greyPlayerId, setGreyPlayerId] = useState(
    "b43c8fea-b2a7-4eb0-80b3-a544b02071f9",
  );
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
    getNewGameData(greyPlayerId, selectedConfig).then((newGameData) => {
      setNewGameData(newGameData);
      onNewGame(newGameData.gameID);
    });
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
    </div>
  );
}
