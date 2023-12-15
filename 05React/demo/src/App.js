import logo from './logo.svg';
import './App.css';
import Person from './components/Person';

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <Person name="Bob" description="is a Super Coder"/>
      <Person name="Donald" description="made America great again"/>
    </div>
  );
}

export default App;
