import Board from "../Board/board";

export default function PlayGame({ currentGameID, board }) {
  return (
    <div>
      Play
      <Board boardState={board} currentGameID={currentGameID} />
    </div>
  );
}
