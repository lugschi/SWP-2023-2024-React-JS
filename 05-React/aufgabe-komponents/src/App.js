import logo from "./logo.svg";
import "./App.css";
import List from "./Components/List";
import Button from "./Components/Button";

import Card from "./Components/Card";
function App() {
  return (
    <div className="Container">      
      <div className="ContainerList">
      <h2>Liste</h2>
        <List productname="Eggs"/>
        <List productname="Bread"/>
        <List productname="Chocolate"/>
      </div>

      <div className="ContainerButton">
        <h2>Button</h2>
        <button className="buttonStyle"><Button buttonName="Sendar"/></button>        
      </div>

      <div className="ContainerCard">
          <Card firstName="John" lastName="Doe" job="Architect & Engineer"/>
      </div>

      </div>




    /*<div className="Container">
      <div class="Countdown-container">
        <div class="Countdown">
          <Countdown />
        </div>
      </div>
    </div>*/
  );
}

export default App;