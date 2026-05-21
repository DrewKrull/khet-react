import { IMAGE_LASER_STRAIGHT, IMAGE_PATH } from "@/constants/KhetConstants";
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
    <div className="board-cell" onClick={() => select()}>
      {cell && cell.onLaserPath && showLaser && (
        <div className="board-cell-laser-highlight">
          <Image
            className="board-cell-image"
            src={laserImage}
            width="50"
            height="50"
            alt="Game piece image"
          />
        </div>
      )}

      {cellIsSelected && <div className="board-cell-selected" />}
      {cellIsTarget && <div className="board-cell-targeted" />}
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
