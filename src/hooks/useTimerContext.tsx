import { useContext } from "react";
import { TimerContext } from "../components/TimerProvider";

export function useTimerContext() {
  const context = useContext(TimerContext);
  if (context === null) {
    throw new Error("useTimerContext must be used within a TimerProvider");
  }
  return context;
}
