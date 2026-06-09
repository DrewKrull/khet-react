"use client";

import { getSavedGameData, loadGame } from "@/service/khetservice";
import { useQuery } from "@tanstack/react-query";
import SavedGame from "./savedGame";
import { useContext } from "react";
import { KhetGameContext } from "@/context/khetGameContext";
import { KhetUserContext } from "@/context/khetUserContext";

export default function LoadGameForm({ , processLogin }) {
  const { user, setUser } = useContext(KhetUserContext);
  const loggedInUser = user && user.userId;

  function selectGame(loadGameId) {
    loadGame(loadGameId);
  }

  const {
    isPending,
    error,
    data: savedGames,
    isFetching,
  } = useQuery({
    queryKey: ["savedGames"],
    queryFn: async () => {
      return (await getSavedGameData(loggedInUser)).savedGames;
    },
  });

  if (isPending) return <div>Loading</div>;
  if (error) return <div>Error</div>;

  return (
    <div>
      {savedGames.map((savedGame) => (
        <SavedGame
          key={savedGame.gameID}
          savedGame={savedGame}
          selectSavedGame={(e) => selectGame(savedGame.gameID)}
        />
      ))}
    </div>
  );
}
