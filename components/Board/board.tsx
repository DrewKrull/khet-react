import { ENTITY_TYPE_EMPTY } from "@/constants/KhetConstants";
import BoardColumn from "./boardColumn";
import WinnerOverlay from "./winnerOverlay";

export default function Board({
  currentGameID,
  boardState,
  selectCell,
  isSelectingTarget,
  selectTarget,
  selectedCell,
  selectedTarget,
  currentTurn,
  winner,
}) {
  function selectBoardCell(cellSelection) {
    // We don't allow a gd thing if game is over
    if (!winner) {
      if (isSelectingTarget) {
        // Only allow targeting of neighbors
        if (
          Math.abs(selectedCell.columnNumber - cellSelection.columnNumber) <=
            1 &&
          Math.abs(selectedCell.rowNumber - cellSelection.rowNumber) <= 1
        ) {
          // Only allow targeting of empty cells
          if (cellSelection.entityType == ENTITY_TYPE_EMPTY)
            selectTarget(cellSelection);
        }
      } else {
        // Only allow selection of current turn's entity
        if (cellSelection.entityPlayer == currentTurn) {
          selectCell(cellSelection);
        }
      }
    }
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
              selectedTarget={selectedTarget}
            />
          ))}
      </div>
    </div>
  );
}
