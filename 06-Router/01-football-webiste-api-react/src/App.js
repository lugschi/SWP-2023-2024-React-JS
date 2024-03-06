import './App.css';
import TablePage from "./page/TablePage";
import MatchPage from './page/MatchPage';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <TablePage/>
    },
    {
      path: "/Match",
      element: <MatchPage/>
    }
  ]);

  return (
    <div className="container">
      <RouterProvider router={router} />      
    </div>
  );
}

export default App;
