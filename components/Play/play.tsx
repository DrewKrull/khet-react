import { useState } from "react";
import Board from "../Board/board";
import BoardData from "../Board/boardData";
import ActionBar from "./actionBar";

export default function PlayGame({ currentGameID, board }) {
  const [selectedCell, setSelectedCell] = useState();
  const [selectedTarget, setSelectedTarget] = useState();
  const [isSelectingTarget, setIsSelectingTarget] = useState(false);

  function selectCell(cellSelection) {
    setSelectedCell(cellSelection);
  }
  function selectTarget(cellSelection) {
    setSelectedTarget(cellSelection);
  }
  return (
    <div className="play-container">
      <div></div>
      <div>
        <BoardData board={board} currentGameID={currentGameID} />
        <Board
          boardState={board.boardState}
          currentGameID={currentGameID}
          selectCell={selectCell}
          isSelectingTarget={isSelectingTarget}
          selectTarget={selectTarget}
        />
        {selectedCell && (
          <ActionBar
            selectedCell={selectedCell}
            selectedTarget={selectedTarget}
            initMove={() => setIsSelectingTarget(true)}
          />
        )}
      </div>
      <div></div>
    </div>
  );
}
