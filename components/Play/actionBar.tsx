import {
  ENTITY_TYPE_DJED,
  ENTITY_TYPE_EMPTY,
  ENTITY_TYPE_PYRAMID,
} from "@/constants/KhetConstants";
import { FaArrowRotateLeft, FaArrowRotateRight } from "react-icons/fa6";
import { IoIosMove } from "react-icons/io";

export default function ActionBar({ selectedCell }) {
  console.log(selectedCell);
  return (
    <>
      Column {selectedCell.columnNumber} Row {selectedCell.rowNumber} contains{" "}
      {selectedCell.entityType}
      <div className="actionBar">
        {(selectedCell.entityType == ENTITY_TYPE_PYRAMID ||
          selectedCell.entityType == ENTITY_TYPE_DJED) && (
          <>
            <FaArrowRotateRight size={50} />
            <FaArrowRotateLeft size={50} />
          </>
        )}
        {selectedCell.entityType != ENTITY_TYPE_EMPTY && (
          <IoIosMove size={50} />
        )}
      </div>
    </>
  );
}
