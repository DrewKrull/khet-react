import BoardColumn from "./boardColumn";

export default function Board({ currentGameID, boardState, selectCell }) {
  function selectBoardCell(selectedCell) {
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
            />
          ))}
      </div>
    </div>
  );
}
