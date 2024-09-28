import { useTimerContext } from "../hooks/useTimerContext";

function TimerDisplay() {
  const {
    startTimer,
    stopTimer,
    resetTimer,
    remainingTime,
    formatTime,
    timerInProgress,
  } = useTimerContext();

  return (
    <div className="timer">
      <div className="timer-clock">
      <span className="timer-display">{formatTime(remainingTime)}</span>
      <div className="buttons">
        {timerInProgress ? (
          <button onClick={stopTimer}>PAUSE</button>
        ) : (
          <button onClick={startTimer}>START</button>
        )}
        <button onClick={resetTimer}>RESET</button>
      </div>
      </div>
    </div>
  );
}

export default TimerDisplay;
