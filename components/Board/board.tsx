import BoardColumn from "./boardColumn";

export default function Board({ currentGameID, boardState }) {
  return (
    <div className="board-container">
      <b>Board:</b>

      <i>
        <b>Currently loaded game: {currentGameID && currentGameID}</b>
      </i>
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
