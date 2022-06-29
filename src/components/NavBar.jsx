import "../styles/NavBar.css";
import busIcon from "../styles/bus-icon.png";

import useTime from "../hooks/useTime";

import { Link } from "react-router-dom";

import { routes } from "../routes";

export default function NavBar() {
    const { time } = useTime();
  return (
    <header className="nav-bar">
      <div className="nav-bar-icon">
        <img src={busIcon} alt="System informacji pasażerskiej"/>
      </div>
        <Link className="nav-bar__header" to={routes.home}>System informacji pasażerskiej</Link>
      <div className="clock">Aktualna godzina: {time}</div>
      <nav className="nav-bar__nav-menu">
        <Link to={routes.home} id>Strona Główna</Link>
      </nav>
    </header>
  );
}
