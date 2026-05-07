export default function DisplayBoard({ boardState }) {
  console.log(boardState);
  return (
    <div>
      <b>Board Display</b>
      <div className="board">
        {boardState &&
          boardState.columns &&
          boardState.columns.map((column) => (
            <div key={column.columnNumber}>
              {column.cells.map((cell) => (
                <div className="board-cell" key={cell.rowNumber}>
                  ∅
                </div>
              ))}
            </div>
          ))}
      </div>
    </div>
  );
}
