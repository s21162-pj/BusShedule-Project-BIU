import React from "react";

import { useParams } from "react-router-dom";

import useBusStopData from "../hooks/useBusStopData";

import PageLayout from "../layouts/PageLayout";

import ArrivesTable from "../components/ArrivesTable/ArrivesTable";
import BusesList from "../components/BusesList/BusesList";

export default function BusStop() {
  let { id } = useParams();

  const [busStopData, arrivalBuses] = useBusStopData(id);

  return (
    <PageLayout backLink={true}>
      <ArrivesTable arrivalBuses={arrivalBuses} />
      {busStopData ? (
        <BusesList
          busStopLabel={`Przystanek: "${busStopData.busStopName}"`}
          buses={busStopData.buses}
        />
      ) : (
        <p>Loading...</p>
      )}
    </PageLayout>
  );
}
