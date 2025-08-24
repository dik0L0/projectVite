import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Connexion from "./pages/connexion";
import Home from "./pages/home";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/connexion" element={<Connexion />} />
      </Routes>
    </Router>
  );
}

export default App;

