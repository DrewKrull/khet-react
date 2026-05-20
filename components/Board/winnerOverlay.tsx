"use client";
export default function WinnerOverlay({ winner }) {
  return (
    <div className="overlay-winner">
      <div className="overlay-text">Winner {winner} wins</div>
    </div>
  );
}
