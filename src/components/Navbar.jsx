import { Menu } from "lucide-react";
import "../styles/global.css";

function Navbar() {
  return (
    <header className="navbar">
      <a href="#accueil" className="logo">
        MAISON <span>AVELINE</span>
      </a>

      <nav className="nav-links">
        <a href="#maison">La Maison</a>
        <a href="#suites">Suites & Villas</a>
        <a href="#experiences">Expériences</a>
        <a href="#galerie">Galerie</a>
      </nav>

      <a href="#reservation" className="nav-button">
        Réserver
      </a>

      <button className="menu-mobile" aria-label="Ouvrir le menu">
        <Menu size={25} />
      </button>
    </header>
  );
}

export default Navbar;