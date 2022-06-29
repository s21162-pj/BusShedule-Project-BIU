import "../styles/ArrivalTable.css";

import useTime from "../hooks/useTime";
import useArrivalArray from "../hooks/useArrivalArray";

export default function ArrivalTable({ arrivalBuses }) {
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
          <th>Nr. Lini</th>
          <th>Trasa</th>
          <th>Godzina Przyjazdu</th>
        </tr>
      </thead>
      <tbody className="arrival-table__body">
        {isArrivalArrayLoaded ? (
          arrivalArray.map(({ busNumber, routeLabel, arrivalTime }) => (
            <tr key={`${busNumber}-${routeLabel}-${arrivalTime}`}>
              <td className="arrival-table__body--bus-number">{busNumber}</td>
              <td>{routeLabel}</td>
              <td>{arrivalTime}</td>
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
