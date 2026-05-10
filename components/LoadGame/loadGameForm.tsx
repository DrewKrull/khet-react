"use client";

import { getSavedGameData } from "@/service/khetservice";
import { useEffect, useState } from "react";

export default function LoadGameForm() {
  const [isLoading, setIsLoading] = useState(true);
  const [savedGameList, setSavedGameList] = useState([]);
  useEffect(() => {
    if (isLoading) {
      getSavedGameData().then((savedGameData) =>
        setSavedGameList(savedGameData),
      );
    }
  }, []);

  return (
    <div>
      Game List
      <div>
        {savedGameList &&
          savedGameList instanceof Array &&
          savedGameList.map((savedGame) => <div key={savedGame.gameId}></div>)}
      </div>
    </div>
  );
}
