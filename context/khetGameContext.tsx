import { createContext, useState } from "react";

const KhetGameContext = createContext();

function KhetGameProvider({ children }) {
  const [currentGame, setCurrentGame] = useState();
  const [currentGameID, setCurrentGameID] = useState();

  return (
    <KhetGameContext.Provider
      value={{ currentGame, setCurrentGame, currentGameID, setCurrentGameID }}
    >
      {children}
    </KhetGameContext.Provider>
  );
}
export { KhetGameProvider, KhetGameContext };
