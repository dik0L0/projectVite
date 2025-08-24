import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Connexion from "./pages/connexion";
import Home from "./pages/home";
import Inscription from "./pages/Inscription";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/inscription" element={<Inscription />} />
      </Routes>
    </Router>
  );
}

export default App;

