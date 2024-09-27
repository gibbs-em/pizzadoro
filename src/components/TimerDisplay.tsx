import { useTimerContext } from "../hooks/useTimerContext";

function App() {
  const {
    startTimer,
    stopTimer,
    resetTimer,
    remainingTime,
    formatTime,
    timerInProgress,
  } = useTimerContext();

  console.log(timerInProgress);

  return (
    <>
      <h1>Pizzadoro</h1>
      <span className="timer-display">{formatTime(remainingTime)}</span>
      <div className="card">
        {timerInProgress ? (
          <button onClick={stopTimer}>Pause</button>
        ) : (
          <button onClick={startTimer}>Start</button>
        )}
        <button onClick={resetTimer}>Reset</button>
      </div>
    </>
  );
}

export default App;
