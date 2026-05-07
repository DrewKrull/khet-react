import BoardColumn from "./boardColumn";

export default function Board({ boardState }) {
  return (
    <div>
      <b>Board Display</b>
      <div className="board">
        {boardState &&
          boardState.columns &&
          boardState.columns.map((column) => (
            <BoardColumn key={column.columnNumber} column={column} />
          ))}
      </div>
    </div>
  );
}
