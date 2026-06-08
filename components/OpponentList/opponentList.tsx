"use client";

import { getOpponents } from "@/service/khetservice";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export default function OpponentList({
  playerId,
  selectedOpponent,
  setSelectedOpponent,
}) {
  function handleSelectedOpponentChange(e) {
    setSelectedOpponent(e.target.value);
  }

  const {
    isPending,
    error,
    data: opponentList,
    isFetching,
  } = useQuery({
    queryKey: ["opponentOptions"],
    queryFn: async () => {
      return await getOpponents(playerId);
    },
  });

  return (
    <div>
      Invite Player:
      {opponentList && (
        <select
          name="selectedConfigInput"
          value={selectedOpponent}
          onChange={handleSelectedOpponentChange}
        >
          <option value="" disabled hidden>
            Select opponent
          </option>
          {opponentList.map((opp) => (
            <option key={opp.userId} value={opp.userId}>
              {opp.userDisplay}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}
