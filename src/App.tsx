import "./App.css";
import TimerDisplay from "./components/TimerDisplay"
import TimerProvider from "./components/TimerProvider";

function App() {


  return (
    <TimerProvider>
      <TimerDisplay />
    </TimerProvider>
  );
}

export default App;
