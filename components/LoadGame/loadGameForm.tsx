"use client";

import { getSavedGameData, loadGame } from "@/service/khetservice";
import { useQuery } from "@tanstack/react-query";
import SavedGame from "./savedGame";
import { useContext } from "react";
import { KhetGameContext } from "@/context/khetGameContext";

export default function LoadGameForm({ gameLoaded }) {
  const { currentGameID, currentGame, setCurrentGameID, setCurrentGame } =
    useContext(KhetGameContext);

  function selectGame(loadGameId) {
    const loadedGame = loadGame(loadGameId).then((loaded) => {
      setCurrentGameID(loadGameId);
      setCurrentGame(loaded);
      gameLoaded();
    });
  }

  const {
    isPending,
    error,
    data: savedGames,
    isFetching,
  } = useQuery({
    queryKey: ["savedGames"],
    queryFn: async () => {
      return (await getSavedGameData()).savedGames;
    },
  });

  if (isPending) return <div>Loading</div>;
  if (error) return <div>Error</div>;

  return (
    <div>
      {!currentGameID &&
        savedGames.map((savedGame) => (
          <SavedGame
            key={savedGame.gameID}
            savedGame={savedGame}
            selectSavedGame={(e) => selectGame(savedGame.gameID)}
          />
        ))}
    </div>
  );
}
