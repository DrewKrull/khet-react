import { useState } from "react";
import BoardColumn from "./boardColumn";

export default function Board({ currentGameID, boardState, selectCell }) {
  const [selectedCell, setSelectedCell] = useState();

  function selectBoardCell(selectedCell) {
    setSelectedCell(selectedCell);
    selectCell(selectedCell);
  }
  return (
    <div className="board-container">
      <div className="board">
        {boardState &&
          boardState.columns &&
          boardState.columns.map((column) => (
            <BoardColumn
              key={column.columnNumber}
              column={column}
              selectCell={selectBoardCell}
              selectedCell={selectedCell}
            />
          ))}
      </div>
    </div>
  );
}
