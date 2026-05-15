import { useState } from "react";
import BoardColumn from "./boardColumn";

export default function Board({
  currentGameID,
  boardState,
  selectCell,
  isSelectingTarget,
  selectTarget,
}) {
  const [selectedCell, setSelectedCell] = useState();
  const [selectedTarget, setSelectedTarget] = useState();

  function selectBoardCell(cellSelection) {
    if (isSelectingTarget) {
      console.log(cellSelection);

      setSelectedTarget(cellSelection);
      selectTarget(selectTarget);
    } else {
      setSelectedCell(cellSelection);
      selectCell(selectedCell);
    }
  }
  console.log("Is target mode? " + isSelectingTarget);
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
              selectedTarget={selectedTarget}
            />
          ))}
      </div>
    </div>
  );
}
