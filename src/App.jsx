import { useRoutes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Products from "./components/Products";
import "./App.css";

function App() {
  // Define routes using the useRoutes hook
  const routes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/cart",
      element: <Products />,
    },
  ]);

  return (
    <div>
      <Navbar />
      {routes}
    </div>
  );
}

export default App;
