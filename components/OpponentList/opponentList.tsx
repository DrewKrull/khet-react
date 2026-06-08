"use client";

import { getOpponents } from "@/service/khetservice";
import { useQuery } from "@tanstack/react-query";

export default function OpponentList({ playerId }) {
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
  console.log(opponentList);
  return (
    <div>
      Valid opponents for {playerId}:{opponentList && <div>Lisr exisr</div>}
      {opponentList && (
        <select name="selectedConfigInput">
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
