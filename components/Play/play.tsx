import Board from "../Board/board";
import BoardData from "../Board/boardData";
import ActionBar from "./actionBar";

export default function PlayGame({ currentGameID, board }) {
  return (
    <div>
      <BoardData board={board} currentGameID={currentGameID} />
      <Board boardState={board.boardState} currentGameID={currentGameID} />
      <ActionBar />
    </div>
  );
}
