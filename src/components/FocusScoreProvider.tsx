import { createContext, ReactNode } from "react";
import { useState } from "react";

interface FocusScoreContextType {
  timeFocussed: number[];
  timeBreaked: number[];
}

export const FocusScoreContext = createContext<FocusScoreContextType | null>(
  null
);

interface FocusScoreProviderProps {
  children: ReactNode;
}

export function FocusScoreProvider({ children }: FocusScoreProviderProps) {
  const [focusScore, setFocusScore] = useState([]);
  // when the timer ends, the total time focussed(?) is sent to the time focussed and we switch to a break timer
  return (
    <FocusScoreContext.Provider value={}>{children}</FocusScoreContext.Provider>
  );
}
