import { useState } from "react";
import { MdExpandLess, MdExpandMore } from "react-icons/md";

export default function BoardData({
  board,
  currentGameID,
  isActivePLayer,
  activePlayerId,
}) {
  console.log(board);
  console.log(activePlayerId);
  if (activePlayerId == board.greyPlayerId) {
    // If
    console.log("Grey player active");
  } else {
    console.log("red player avtrive");
  }
  const opponentName = "bradley";

  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div className="boardData">
      <div className="boardData-summary">
        <>
          {isActivePLayer && (
            <div className="boardData-yourTurn">
              It's your turn! Don't keep {opponentName} waiting!
            </div>
          )}
        </>
        <>
          {!isActivePLayer && (
            <div className="boardData-notYourTurn">
              Waiting on {opponentName}
            </div>
          )}
        </>
        {board.winner && (
          <div className="boardData-winnerBanner">{board.winner} won!</div>
        )}
        {!board.winner && (
          <>
            <div className="boardData-expand">
              {!isExpanded && (
                <MdExpandMore onClick={() => setIsExpanded(!isExpanded)} />
              )}
              {isExpanded && (
                <MdExpandLess onClick={() => setIsExpanded(!isExpanded)} />
              )}
            </div>
          </>
        )}
      </div>
      {isExpanded && (
        <div className="boardData-details">Game ID:{currentGameID} </div>
      )}
    </div>
  );
}
