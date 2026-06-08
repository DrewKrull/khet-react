"use client";

import { useContext, useState } from "react";
import { configurationOptions } from "@/constants/KhetConstants";
import { getNewGameData } from "@/service/khetservice";
import { KhetUserContext } from "@/context/khetUserContext";
import OpponentList from "../OpponentList/opponentList";
import { userInfo } from "os";

export default function NewGameForm({ onNewGame }) {
  const { user, setUser } = useContext(KhetUserContext);
  const greyPlayerId = user.userId;
  const [selectedOpponent, setSelectedOpponent] = useState("");

  const [selectedConfig, setSelectedConfig] = useState(
    configurationOptions[0].value,
  );
  const [newGameData, setNewGameData] = useState([]); // Might be temporary once we know where we're actually putting the data

  function handleSelectedConfigChange(e) {
    setSelectedConfig(e.target.value);
  }

  function handleNewGameSubmit(e) {
    e.preventDefault();
    getNewGameData(greyPlayerId, selectedOpponent, selectedConfig).then(
      (newGameData) => {
        setNewGameData(newGameData);
        onNewGame(newGameData.gameID);
      },
    );
  }

  return (
    <div>
      <div className="formHeader">Create New Game</div>
      <form onSubmit={handleNewGameSubmit}>
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
        <OpponentList
          playerId={user.userId}
          selectedOpponent={selectedOpponent}
          setSelectedOpponent={setSelectedOpponent}
        />
        <input
          type="submit"
          className="formSubmit"
          disabled={!user.userId || !selectedOpponent}
        />
      </form>
    </div>
  );
}
