import { ENTITY_TYPE_EMPTY } from "@/constants/KhetConstants";
import BoardColumn from "./boardColumn";

export default function Board({
  currentGameID,
  boardState,
  selectCell,
  isSelectingTarget,
  selectTarget,
  selectedCell,
  selectedTarget,
  currentTurn,
}) {
  function selectBoardCell(cellSelection) {
    if (isSelectingTarget) {
      // Only allow targeting of empty cells
      if (cellSelection.entityType == ENTITY_TYPE_EMPTY)
        selectTarget(cellSelection);
    } else {
      // Only allow selection of current turn's entity
      if (cellSelection.entityPlayer == currentTurn) {
        selectCell(cellSelection);
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
