import BoardCell from "./boardCell";

export default function BoardColumn({
  column,
  selectCell,
  selectedCell,
  selectedTarget,
}) {
  return (
    <div key={column.columnNumber}>
      {column.cells.map((cell) => {
        console.log(cell.rowNumber);

        return (
          <BoardCell
            cell={cell}
            key={cell.rowNumber}
            selectCell={selectCell}
            selectedCell={selectedCell}
            selectedTarget={selectedTarget}
          />
        );
      })}
    </div>
  );
}
