import { ReactNode, createContext } from "react";
import { useState, useRef } from "react";

interface TimerContextType {
    remainingTime: number,
    formatTime: (timeInSeconds: number) => string;
    resetTimer: () => void;
    stopTimer: () => void;
    startTimer: () => void;
    timerInProgress: boolean
}

export const TimerContext = createContext<TimerContextType | null>(null);

interface TimerProviderProps {
    children: ReactNode
}

export function TimerProvider({ children }: TimerProviderProps) {
    const [remainingTime, setRemainingTime] = useState(1500)
    const [timerInProgress, setTimerInProgress] = useState(false)
    const intervalRef = useRef<number | null>(null)
  
    function formatTime(timeInSeconds: number) {
      const minutes = Math.floor(timeInSeconds / 60)
      const remainingSeconds = timeInSeconds % 60
      return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`
    }
  
    function startTimer() {
      if (intervalRef.current !== null) return
      intervalRef.current = setInterval(() => {
        setRemainingTime((prevTimeLeft) => {
          return prevTimeLeft - 1
        })
      }, 1000)
      setTimerInProgress(true)
    }
  
    function stopTimer() {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
        setTimerInProgress(false)
      }
    }
  
    function resetTimer() {
      stopTimer()
      setRemainingTime(1500)
    }
    
    const contextValue: TimerContextType = {
        remainingTime,
        formatTime,
        resetTimer,
        stopTimer,
        startTimer,
        timerInProgress
    }

    return (
        <TimerContext.Provider value={contextValue}>
          {children}
        </TimerContext.Provider>
      );
}

export default TimerProvider;
