import BoardCell from "./boardCell";

export default function BoardColumn({ column, selectCell, selectedCell }) {
  return (
    <div key={column.columnNumber}>
      {column.cells.map((cell) => (
        <BoardCell
          cell={cell}
          key={cell.rowNumber}
          selectCell={selectCell}
          selectedCell={selectedCell}
        />
      ))}
    </div>
  );
}
