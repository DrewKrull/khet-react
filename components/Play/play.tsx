import { useContext, useEffect, useRef, useState } from "react";
import Board from "../Board/board";
import BoardData from "../Board/boardData";
import ActionBar from "./actionBar";
import { KhetUserContext } from "@/context/khetUserContext";
import { pollGame } from "@/service/khetservice";

export default function PlayGame({ currentGameID, board, refreshBoard }) {
  const intervalIdRef = useRef(0);
  const [selectedCell, setSelectedCell] = useState();
  const [selectedTarget, setSelectedTarget] = useState();
  const [isSelectingTarget, setIsSelectingTarget] = useState(false);

  const { user, setUser } = useContext(KhetUserContext);

  const currentPlayerId = board.currentTurnId;
  const loadedRevision = board.revision;

  const isActivePlayer = user.userId == currentPlayerId;

  function selectCell(cellSelection) {
    if (isActivePlayer) {
      setSelectedCell(cellSelection);
    }
  }
  function selectTarget(cellSelection) {
    setSelectedTarget(cellSelection);
  }

  function clearSelection() {
    selectCell(null);
    setIsSelectingTarget(false);
  }

  function clearTarget() {
    selectTarget(null);
    setIsSelectingTarget(false);
  }

  // Poll to see if need to refresh game
  useEffect(() => {
    intervalIdRef.current = window.setInterval(() => {
      // Only poll if we already have a revision
      if (loadedRevision) {
        pollGame(currentGameID).then((currentRevision) => {
          // Is board stale?
          if (loadedRevision != currentRevision) {
            refreshBoard(currentGameID);
          }
        });
      }
    }, 500); // Half second for now, move to properties

    return () => {
      clearInterval(intervalIdRef.current);
    };
  }, [currentGameID, loadedRevision, refreshBoard]);

  return (
    <>
      <div className="play-container">
        <BoardData
          board={board}
          currentGameID={currentGameID}
          isActivePLayer={isActivePlayer}
          activePlayerId={user.userId}
        />
        <Board
          currentTurn={board.currentTurn}
          boardState={board.boardState}
          currentGameID={currentGameID}
          isSelectingTarget={isSelectingTarget}
          selectCell={selectCell}
          selectTarget={selectTarget}
          selectedCell={selectedCell}
          selectedTarget={selectedTarget}
          winner={board.winner}
        />
        {selectedCell && (
          <ActionBar
            selectedCell={selectedCell}
            selectedTarget={selectedTarget}
            initMove={() => setIsSelectingTarget(true)}
            clearSelection={clearSelection}
            clearTarget={clearTarget}
          />
        )}
      </div>
    </>
  );
}
