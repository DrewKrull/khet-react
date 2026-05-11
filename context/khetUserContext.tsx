import { createContext, useState } from "react";

const KhetUserContext = createContext();

function KhetUserProvider({ children }) {
  const [user, setUser] = useState();

  return (
    <KhetUserContext.Provider value={{ user, setUser }}>
      {children}
    </KhetUserContext.Provider>
  );
}
export { KhetUserProvider, KhetUserContext };
