import { useState } from "react";
import Board from "../Board/board";
import BoardData from "../Board/boardData";
import ActionBar from "./actionBar";

export default function PlayGame({ currentGameID, board }) {
  const [selectedCell, setSelectedCell] = useState();
  function selectCell(column, row, entityType) {
    setSelectedCell({ column: column, row: row, entityType: entityType });
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
        />
        {selectedCell && <ActionBar selectedCell={selectedCell} />}
      </div>
      <div></div>
    </div>
  );
}
