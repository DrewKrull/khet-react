import entityTypeToImage from "@/util/Resolvers";
import Image from "next/image";

export default function BoardCell({ cell, selectCell, selectedCell }) {
  const showLaser = false;
  const entityType =
    cell.entity && cell.entity["@type"] && cell.entity["@type"];
  const entityPlayer = cell.entity && cell.entity.player && cell.entity.player;
  const entityImage = entityTypeToImage(entityType, entityPlayer);
  const entityOrientation = cell.entity && cell.entity.orientation;
  const cellIsSelected =
    selectedCell &&
    selectedCell.columnNumber == cell.columnNumber &&
    selectedCell.rowNumber == cell.rowNumber;

  function select() {
    selectCell({
      rowNumber: cell.rowNumber,
      columnNumber: cell.columnNumber,
      entityType: entityType,
    });
  }

  return (
    <div className="board-cell" onClick={() => select()}>
      {cell && cell.onLaserPath && showLaser && (
        <div className="board-cell-laser-highlight"></div>
      )}
      {cellIsSelected && <div className="board-cell-selected"></div>}
      <div
        className={`board-cell-image-container ${entityOrientation && "entity-orientation-" + entityOrientation}`}
      >
        {entityImage && (
          <Image
            className="board-cell-image"
            src={entityImage}
            width="50"
            height="50"
            alt="Game piece image"
          />
        )}
      </div>
    </div>
  );
}
