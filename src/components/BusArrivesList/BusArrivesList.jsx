import "./BusArrivesList.css";

import List from "../List/List";

export default function BusArrivesList({ routeLabel, arrivalTime }) {
  return (
    <List title={`Trasa: ${routeLabel}`} row={true}>
      {arrivalTime.map((time, index) => (
        <li key={`${index}-${time}`} className="bus-arrival-lis__item">
          {time}
        </li>
      ))}
    </List>
  );
}
