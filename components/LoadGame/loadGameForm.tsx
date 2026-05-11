"use client";

import { getSavedGameData } from "@/service/khetservice";
import { useQuery } from "@tanstack/react-query";

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
    <div onClick={() => console.log(savedGames)}>
      Game List
      <div>
        {savedGames.map((savedGame) => (
          <div key={savedGame.gameID}>
            {savedGame.GreyPlayerName +
              " vs. " +
              savedGame.RedPlayerName +
              ": started " +
              savedGame.startDate}
          </div>
        ))}
      </div>
    </div>
  );
}
