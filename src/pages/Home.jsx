import React from "react";

import PageLayout from "../layouts/PageLayout";

import MainPageBackground from "../components/MainPageImage/MainPageBackground"

import List from "../components/List/List";
import ListItems from "../components/ListItems/ListItems";

import { BusDBContext } from "../contexts/BusDBContext/BusDBContext";

export default function Home() {
  const bus_db = React.useContext(BusDBContext);

  return (
    
    <PageLayout>
      <MainPageBackground />
      <>
        <List title="Linie Autobusowe" row={true}>
          {bus_db.buses.map(({ id, busNumber }) => (
            <ListItems
              key={`${busNumber}-${id}`}
              id={id}
              slug="autobus"
              name={busNumber}
              itemBg={true}
            />
          ))}
        </List>
        <List title="Lista wszystkich przystanków">
          {bus_db.busStops.map(({ id, busStopName }) => (
            <ListItems
              key={`${busStopName}-${id}`}
              id={id}
              slug="przystanek"
              name={busStopName}
            />

          ))}
        </List>
      </>
    </PageLayout>
  );
}
