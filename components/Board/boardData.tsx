import { useState } from "react";
import { MdExpandLess, MdExpandMore } from "react-icons/md";

export default function BoardData({ board, currentGameID }) {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div className="boardData">
      <div className="boardData-summary">
        <div className="boardData-players">
          {board.GreyPlayerName} vs. {board.RedPlayerName}
        </div>
        <div className="boardData-expand">
          {!isExpanded && (
            <MdExpandMore onClick={() => setIsExpanded(!isExpanded)} />
          )}
          {isExpanded && (
            <MdExpandLess onClick={() => setIsExpanded(!isExpanded)} />
          )}
        </div>
      </div>
      {isExpanded && (
        <div className="boardData-details">Game ID:{currentGameID} </div>
      )}
    </div>
  );
}
