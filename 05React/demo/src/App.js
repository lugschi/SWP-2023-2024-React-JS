import logo from "./logo.svg";
import "./App.css";
import Person from "./components/Person";
import christmasImage from "./christmas.jpg";
import Countdown from "./components/Countdown";

function App() {
  return (
    <div className="Container">
      <div class="Countdown-container">
        <div class="Countdown">
          <Countdown />{" "}
        </div>
      </div>
    </div>
  );
}

export default App;
