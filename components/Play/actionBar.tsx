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
import { useContext, useEffect } from "react";
import { FaArrowRotateLeft, FaArrowRotateRight } from "react-icons/fa6";
import { IoIosMove } from "react-icons/io";
import { MdCancel } from "react-icons/md";

export default function ActionBar({
  selectedCell,
  selectedTarget,
  initMove,
  clearSelection,
  clearTarget,
}) {
  const { currentGameID, currentGame, setCurrentGame } =
    useContext(KhetGameContext);

  useEffect(() => {
    const moveRequest = {
      moveType: MOVE_MOVE,
      cellToMove: selectedCell,
      targetCell: selectedTarget,
    };
    // Don't target self
    if (!selectedCell || !selectedTarget || selectedCell == selectedTarget)
      return;

    clearSelection();
    clearTarget();
    makeMove(currentGameID, moveRequest).then((moveResult) => {
      setCurrentGame(moveResult);
    });
  }, [selectedCell, selectedTarget, currentGameID, setCurrentGame]);

  function constructMove(moveOption) {
    const moveRequest = { moveType: moveOption, cellToMove: selectedCell };
    clearSelection();
    makeMove(currentGameID, moveRequest).then((moveResult) => {
      setCurrentGame(moveResult);
    });
  }

  function handleCancel() {
    if (selectedTarget) {
      clearTarget();
    } else {
      clearSelection();
    }
  }
  return (
    <>
      Column {selectedCell.columnNumber} Row {selectedCell.rowNumber} contains{" "}
      {selectedCell.entityType}
      {selectedTarget && (
        <>
          <br />
          <i>
            Targeting column {selectedTarget.columnNumber} Row{" "}
            {selectedTarget.rowNumber} contains {selectedTarget.entityType}
          </i>
        </>
      )}
      <div className="actionBar">
        {(selectedCell.entityType == ENTITY_TYPE_PYRAMID ||
          selectedCell.entityType == ENTITY_TYPE_DJED) && (
          <>
            {" "}
            <FaArrowRotateLeft
              size={50}
              onClick={() => constructMove(MOVE_ROTATE_COUNTER)}
            />
            <FaArrowRotateRight
              size={50}
              onClick={() => constructMove(MOVE_ROTATE)}
            />
          </>
        )}
        {selectedCell.entityType != ENTITY_TYPE_EMPTY && (
          <IoIosMove size={50} onClick={() => initMove()} />
        )}
        <MdCancel size={50} onClick={handleCancel} />
      </div>
    </>
  );
}
