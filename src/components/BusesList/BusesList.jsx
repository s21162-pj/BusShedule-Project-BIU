import "./BusesList.css";

import { Link } from "react-router-dom";

import List from "../List/List";

import BusArrivesList from "../BusArrivesList/BusArrivesList";

export default function BusesList({ busStopLabel, buses }) {
  return (
    <List title={busStopLabel}>
      {buses.map(({ id, busNumber, routeA, routeB }) => (
        <li key={`${busNumber}-${id}`} className="buses-list__item">
          <Link to={`/autobus/${id}`}>
            <h3>{busNumber}</h3>
          </Link>
          <>
            <BusArrivesList
              routeLabel={routeA.routeLabel}
              arrivalTime={routeA.arrivalTime}
            />
            <BusArrivesList
              routeLabel={routeB.routeLabel}
              arrivalTime={routeB.arrivalTime}
            />
          </>
        </li>
      ))}
    </List>
  );
}
