import "../styles/MainPageBackground.css";
import bg from "../styles/main-page-background.jpg";

export default function MainPageBackground() {
    return(
        <div className="Main-bg">
            <img src={bg} alt="System informacji pasażerskiej"/>
            <h1 className="Main-bg-text">Przewozy autobusowe na terenie Pomorza</h1>
        </div>
        );
  }