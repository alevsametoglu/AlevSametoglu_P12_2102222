import logo from "./logo.svg";
import { Routes, Route, HashRouter as Router } from "react-router-dom";
import "./App.css";

import MainLayout from "./Layout/MainLayout";
import Dashbord from "./pages/Dashbord";
import Information from "./components/Information/Information";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashbord />}></Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
