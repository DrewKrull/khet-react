import BoardCell from "./boardCell";

export default function BoardColumn({
  column,
  selectCell,
  selectedCell,
  selectedTarget,
  isGameOver,
}) {
  return (
    <div key={column.columnNumber}>
      {column.cells.map((cell) => {
        return (
          <BoardCell
            cell={cell}
            key={cell.rowNumber}
            selectCell={selectCell}
            selectedCell={selectedCell}
            selectedTarget={selectedTarget}
            isGameOver={isGameOver}
          />
        );
      })}
    </div>
  );
}
