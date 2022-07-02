import "./ArrivesTable.css";

import useTime from "../../hooks/useTime";
import useArrivalArray from "../../hooks/useArrivalArray";

export default function ArrivesTable({ arrivalBuses }) {
  const { time } = useTime();
  const arrivalArray = useArrivalArray(arrivalBuses, time);

  const isArrivalArrayLoaded =
    arrivalArray !== undefined && arrivalArray.length > 0;

  return (
    <table className="arrival-table">
      <thead className="arrival-table__header">
      <tr className="header">
          <td colSpan="4">
              Pięć następnych autobusów na tym przystanku:
          </td>
      </tr>
        <tr className="arrival-table__header--row">
          <th>Godzina Przyjazdu</th>
          <th>Linia</th>
          <th>Kierunek linii</th>
        </tr>
      </thead>
      <tbody className="arrival-table__body">
        {isArrivalArrayLoaded ? (
          arrivalArray.map(({ busNumber, routeLabel, arrivalTime }) => (
            <tr key={`${busNumber}-${routeLabel}-${arrivalTime}`}>

              <td>{arrivalTime}</td>
              <td className="arrival-table__body--bus-number">{busNumber}</td>
                <td>{routeLabel}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td>Loading</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}
