import "./BusRoutesList.css";

import List from "../List/List";
import BusRouteListItem from "../BusRoutesListItem/BusRouteListItem";

export default function BusRoutesList({ routeLabel, busStops }) {
  return (
    <li className="bus-route-list">
      <List className="bus-route-list-title" title={`Kierunek: ${routeLabel}`}>
        {busStops.map(({ id, busStopName, arrivalTime }, index) => (
          <BusRouteListItem
            key={`${busStopName}-${id}`}
            id={id}
            to={`/przystanek/${id}`}
            busStopLabel={`${index + 1}. ${busStopName}`}
            index={index}
            arrivalTime={arrivalTime}
          />
        ))}
      </List>
    </li>
  );
}
