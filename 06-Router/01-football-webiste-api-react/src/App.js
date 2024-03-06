import './App.css';
import TablePage from "./page/TablePage"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {
  return (
    <div className="container">
      <TablePage/>
    </div>
  );
}

export default App;
