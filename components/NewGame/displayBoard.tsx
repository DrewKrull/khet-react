export default function DisplayBoard({ boardState }) {
  console.log(boardState);
  return (
    <div>
      <b>Board Display</b>
      <div className="board">
        {boardState.columns.map((column) => (
          <div key={column.columnNumber}>Bah</div>
        ))}
        {/* <div className="board-column">
          <div className="board-cell" />
        </div>
        <div className="board-column"></div> */}
      </div>
    </div>
  );
}
