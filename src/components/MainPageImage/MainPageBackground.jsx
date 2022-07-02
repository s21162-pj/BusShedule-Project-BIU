import "./MainPageBackground.css";
import bg from "../../assets/main-page-background.jpg";

export default function MainPageBackground() {
    return(
        <div className="Main-bg">
            <img src={bg} alt="System informacji pasażerskiej"/>
            <h1 className="Main-bg-text">Przewozy autobusowe</h1>
        </div>
        );
  }