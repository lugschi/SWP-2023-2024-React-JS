import './App.css';
import Header from './components/Header';
import TablePattern from './components/TablePattern';
import ApiData from './components/ApiData';

function App() {
  return (
    <div className="container">
      <Header/>
      <TablePattern/>
      <ApiData/>
    </div>
  );
}

export default App;
