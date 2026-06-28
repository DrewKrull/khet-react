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
        let isValidTarget = false;
        // Check target against valid targets
        for (const validTarget of selectedCell.validTargets) {
          if (
            validTarget.rowNumber == cellSelection.rowNumber &&
            validTarget.columnNumber == cellSelection.columnNumber
          )
            isValidTarget = true;
        }
        // Only allow targeting of neighbors
        if (
          Math.abs(selectedCell.columnNumber - cellSelection.columnNumber) <=
            1 &&
          Math.abs(selectedCell.rowNumber - cellSelection.rowNumber) <= 1
        ) {
          // Used to only allow targeting of empty cells with valid targets. Let the backend decide valid cells - remember stacking?? Duncecap
          if (isValidTarget) selectTarget(cellSelection);
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
      <div className="board-disabled" />
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
