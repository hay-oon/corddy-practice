import { createContext, useContext, useState } from "react";

const LevelContext = createContext();

export function LevelProvider({ children }) {
  const [additionalPoints, setAdditionalPoints] = useState(0);

  const updatePoints = (amount) => {
    setAdditionalPoints((prev) => prev + amount);
  };

  return (
    <LevelContext.Provider value={{ additionalPoints, updatePoints }}>
      {children}
    </LevelContext.Provider>
  );
}

export function useLevel() {
  return useContext(LevelContext);
}
