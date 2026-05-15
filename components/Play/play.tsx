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

  function clearSelectionAndTarget() {
    selectCell(null);
    selectTarget(null);
    setIsSelectingTarget(false);
  }

  return (
    <div className="play-container">
      <div></div>
      <div>
        <BoardData board={board} currentGameID={currentGameID} />
        <Board
          boardState={board.boardState}
          currentGameID={currentGameID}
          isSelectingTarget={isSelectingTarget}
          selectCell={selectCell}
          selectTarget={selectTarget}
          selectedCell={selectedCell}
          selectedTarget={selectedTarget}
        />
        {selectedCell && (
          <ActionBar
            selectedCell={selectedCell}
            selectedTarget={selectedTarget}
            initMove={() => setIsSelectingTarget(true)}
            clearSelectionAndTarget={clearSelectionAndTarget}
          />
        )}
      </div>
      <div></div>
    </div>
  );
}
