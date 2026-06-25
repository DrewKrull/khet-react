import { entityToImage, laserDataToImage } from "@/util/Resolvers";

import Image from "next/image";

export default function BoardCell({
  cell,
  selectCell,
  selectedCell,
  selectedTarget,
}) {
  const showLaser = true;
  const entityType =
    cell.entity && cell.entity["@type"] && cell.entity["@type"];
  const entityPlayer = cell.entity && cell.entity.player;
  const stackedEntity = cell.entity.stacked;
  const entityImage = entityToImage(
    entityType,
    entityPlayer,
    stackedEntity,
    cell.player,
  );
  const laserImage = laserDataToImage(cell);
  const entityOrientation = cell.entity && cell.entity.orientation;

  const cellIsSelected =
    selectedCell &&
    selectedCell.columnNumber == cell.columnNumber &&
    selectedCell.rowNumber == cell.rowNumber;

  const cellIsTarget =
    selectedTarget &&
    selectedTarget.columnNumber == cell.columnNumber &&
    selectedTarget.rowNumber == cell.rowNumber;

  let isValidTarget = false;

  // For highlighting of valid moves, if this is not the selected cell and there is no current target, determine whether it's a valid target
  if (
    !cellIsSelected &&
    !selectedTarget &&
    selectedCell &&
    Object.hasOwn(selectedCell, "validTargets")
  ) {
    for (const validTarget of selectedCell.validTargets) {
      if (
        validTarget.columnNumber == cell.columnNumber &&
        validTarget.rowNumber == cell.rowNumber
      ) {
        isValidTarget = true;
      }
    }
  }

  function select() {
    selectCell({
      rowNumber: cell.rowNumber,
      columnNumber: cell.columnNumber,
      entityType: entityType,
      entityPlayer: entityPlayer,
      validTargets: cell.validTargets,
    });
  }

  return (
    <div
      className="board-cell"
      onClick={() => select()}
      id={"coll:" + cell.columnNumber + ";row:" + cell.rowNumber}
    >
      {cellIsSelected && <div className="board-cell-selected" />}
      {cellIsTarget && <div className="board-cell-targeted" />}
      {isValidTarget && <div className="board-cell-valid-target-highlight" />}

      {cell && cell.onLaserPath && showLaser && (
        <div className="board-cell-laser-highlight">
          <img
            className="board-cell-image"
            src={laserImage}
            width="50"
            height="50"
            alt="Game piece image"
          />
        </div>
      )}

      <div
        className={`board-cell-image-container ${entityOrientation && "entity-orientation-" + entityOrientation}`}
      >
        {entityImage && (
          <img
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
