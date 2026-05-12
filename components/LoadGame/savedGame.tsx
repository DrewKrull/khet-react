"use client";
export default function SavedGame({ savedGame, selectSavedGame }) {
  return (
    <div
      className="savedGame"
      onClick={() => selectSavedGame(savedGame.gameID)}
    >
      {" "}
      {savedGame.GreyPlayerName +
        " vs. " +
        savedGame.RedPlayerName +
        ": started " +
        savedGame.startDate}
    </div>
  );
}
