import {
  ENTITY_TYPE_DJED,
  ENTITY_TYPE_EMPTY,
  ENTITY_TYPE_PYRAMID,
  MOVE_MOVE,
  MOVE_ROTATE,
  MOVE_ROTATE_COUNTER,
} from "@/constants/KhetConstants";
import { KhetGameContext } from "@/context/khetGameContext";
import { makeMove } from "@/service/khetservice";
import { useContext } from "react";
import { FaArrowRotateLeft, FaArrowRotateRight } from "react-icons/fa6";
import { IoIosMove } from "react-icons/io";

export default function ActionBar({ selectedCell }) {
  const { currentGameID, currentGame, setCurrentGame } =
    useContext(KhetGameContext);

  function constructMove(moveOption) {
    const moveRequest = { moveType: moveOption, cellToMove: selectedCell };
    makeMove(currentGameID, moveRequest).then((moveResult) =>
      setCurrentGame(moveResult),
    );
  }
  return (
    <>
      Column {selectedCell.columnNumber} Row {selectedCell.rowNumber} contains{" "}
      {selectedCell.entityType}
      <div className="actionBar">
        {(selectedCell.entityType == ENTITY_TYPE_PYRAMID ||
          selectedCell.entityType == ENTITY_TYPE_DJED) && (
          <>
            <FaArrowRotateRight
              size={50}
              onClick={() => constructMove(MOVE_ROTATE)}
            />
            <FaArrowRotateLeft
              size={50}
              onClick={() => constructMove(MOVE_ROTATE_COUNTER)}
            />
          </>
        )}
        {selectedCell.entityType != ENTITY_TYPE_EMPTY && (
          <IoIosMove size={50} onClick={() => constructMove(MOVE_MOVE)} />
        )}
      </div>
    </>
  );
}
