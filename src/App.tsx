import "./App.css";
import Heading from "./components/Heading";
import TimerDisplay from "./components/TimerDisplay";
import TimerProvider from "./components/TimerProvider";
import Border from "./assets/Border.svg";

function App() {
  return (
    <>
      <img src={Border} className="border"></img>
      <TimerProvider>
        <Heading />
        <TimerDisplay />
      </TimerProvider>
    </>
  );
}

export default App;
