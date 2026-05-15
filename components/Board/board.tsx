import BoardColumn from "./boardColumn";

export default function Board({
  currentGameID,
  boardState,
  selectCell,
  isSelectingTarget,
  selectTarget,
  selectedCell,
  selectedTarget,
}) {
  function selectBoardCell(cellSelection) {
    if (isSelectingTarget) {
      selectTarget(cellSelection);
    } else {
      selectCell(cellSelection);
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
