import { useContext, useState } from "react";
import Board from "../Board/board";
import BoardData from "../Board/boardData";
import ActionBar from "./actionBar";
import { KhetUserContext } from "@/context/khetUserContext";

export default function PlayGame({ currentGameID, board }) {
  const [selectedCell, setSelectedCell] = useState();
  const [selectedTarget, setSelectedTarget] = useState();
  const [isSelectingTarget, setIsSelectingTarget] = useState(false);
  const { user, setUser } = useContext(KhetUserContext);
  const currentPlayerId = board.currentTurnId;
  const isActivePlayer = user.userId == currentPlayerId;

  function selectCell(cellSelection) {
    if (isActivePlayer) {
      setSelectedCell(cellSelection);
    }
  }
  function selectTarget(cellSelection) {
    setSelectedTarget(cellSelection);
  }

  function clearSelection() {
    selectCell(null);
    setIsSelectingTarget(false);
  }

  function clearTarget() {
    selectTarget(null);
    setIsSelectingTarget(false);
  }
  console.log(isActivePlayer);
  return (
    <>
      <div className="play-container">
        <BoardData board={board} currentGameID={currentGameID} />
        <Board
          currentTurn={board.currentTurn}
          boardState={board.boardState}
          currentGameID={currentGameID}
          isSelectingTarget={isSelectingTarget}
          selectCell={selectCell}
          selectTarget={selectTarget}
          selectedCell={selectedCell}
          selectedTarget={selectedTarget}
          winner={board.winner}
        />
        {selectedCell && (
          <ActionBar
            selectedCell={selectedCell}
            selectedTarget={selectedTarget}
            initMove={() => setIsSelectingTarget(true)}
            clearSelection={clearSelection}
            clearTarget={clearTarget}
          />
        )}
      </div>
    </>
  );
}
