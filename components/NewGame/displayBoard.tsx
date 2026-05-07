export default function DisplayBoard({ boardState }) {
  console.log(boardState);
  return (
    <div>
      <b>Board Display</b>
      {boardState &&
        boardState.columns &&
        boardState.columns.map((column, columnIndex) => (
          <li key={columnIndex}>{column.columnNumber}</li>
        ))}
    </div>
  );
}
