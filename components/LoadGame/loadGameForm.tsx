"use client";

import { getSavedGameData } from "@/service/khetservice";
import { useQuery } from "@tanstack/react-query";
import SavedGame from "./savedGame";

export default function LoadGameForm() {
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
      {savedGames.map((savedGame) => (
        <SavedGame
          key={savedGame.gameID}
          savedGame={savedGame}
          selectSavedGame={(e) => alert("Load game " + e)}
        />
      ))}
    </div>
  );
}
