import BoardCell from "./boardCell";

export default function BoardColumn({ column }) {
  return (
    <div key={column.columnNumber}>
      {column.cells.map((cell) => (
        <BoardCell cell={cell} key={cell.rowNumber} />
      ))}
    </div>
  );
}
