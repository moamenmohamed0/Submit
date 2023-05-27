import logo from "./logo.svg";
import "./App.css";

import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Properity from "./pages/properity/Properity";
import Auth from "./pages/Auth/Auth";
import Submit from "./pages/Submit/Submit";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/Properity" element={<Properity />} />
        <Route path="/" element={<Auth />} />
        <Route path="/submit" element={<Submit />} />
        {/* <Route path="/register" element={<Auth />} /> */}
        {/* <Route path="/Properity" element={<Properity />} /> */}
      </Routes>
    </div>
  );
}

export default App;
