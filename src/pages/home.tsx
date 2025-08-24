import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


function Home() {
  return (
    <div className="app">
      {/* Barre de navigation */}
      <nav className="navbar">
        <h1>Mon Application</h1>
      </nav>

      {/* Contenu principal */}
      <main className="main-content">
        <h2>Bonjour Gozem</h2>

        <div className="cards">
          <Link to="/connexion" className="card">
            Info 
          </Link>
          <Link to="/inscription" className="card">
            Info 4
          </Link>
          
          

          <div className="card">Info 2</div>
          <div className="card">Info 3</div>
        </div>
      </main>
    </div>
  );
}

export default Home;