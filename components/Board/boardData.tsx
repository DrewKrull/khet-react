import { useState } from "react";
import { MdExpandLess, MdExpandMore } from "react-icons/md";

export default function BoardData({
  board,
  currentGameID,
  isActivePLayer,
  activePlayerId,
}) {
  let activePlayerName = "";
  let opponentPlayerName = "";
  // Check the color of the active (logged in) player, use that to get the nanes
  if (activePlayerId == board.greyPlayerId) {
    // Active player is grey name, opponent red
    activePlayerName = board.GreyPlayerName;
    opponentPlayerName = board.RedPlayerName;
  }

  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div className="boardData">
      <div className="boardData-summary">
        <>
          {isActivePLayer && (
            <div className="boardData-yourTurn">
              It's your turn, {activePlayerName}!<br />
              Don't keep {opponentPlayerName} waiting!
            </div>
          )}
        </>
        <>
          {!isActivePLayer && (
            <div className="boardData-notYourTurn">
              Waiting on {opponentPlayerName}
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
