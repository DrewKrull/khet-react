import entityTypeToImage from "@/util/Resolvers";
import Image from "next/image";

export default function BoardCell({ cell }) {
  const entityType =
    cell.entity && cell.entity["@type"] && cell.entity["@type"];
  const entityPlayer = cell.entity && cell.entity.player && cell.entity.player;
  const entityImage = entityTypeToImage(entityType, entityPlayer);

  return (
    <div className="board-cell">
      <div className="board-cell-image-container">
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
