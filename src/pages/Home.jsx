import React from "react";

import PageLayout from "../layouts/PageLayout";

import MainPageBackground from "../components/MainPageBackground"

import List from "../components/List";
import ListItem from "../components/ListItem";

import { BusDBContext } from "../contexts/BusDBContext/BusDBContext";

export default function Home() {
  const bus_db = React.useContext(BusDBContext);

  return (
    
    <PageLayout>
      <MainPageBackground />
      <>
        <List title="Linie Autobusowe" row={true}>
          {bus_db.buses.map(({ id, busNumber }) => (
            <ListItem
              key={`${busNumber}-${id}`}
              id={id}
              slug="bus"
              name={busNumber}
              itemBg={true}
            />
          ))}
        </List>
        <List title="Lista wszystkich przystanków">
          {bus_db.busStops.map(({ id, busStopName }) => (
            <ListItem
              key={`${busStopName}-${id}`}
              id={id}
              slug="bus-stop"
              name={busStopName}
            />

          ))}
        </List>
      </>
    </PageLayout>
  );
}
