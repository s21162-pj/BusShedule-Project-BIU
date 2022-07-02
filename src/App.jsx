import { BrowserRouter, Routes, Route } from "react-router-dom";

import { routes } from "./routes";

import Home from "./pages/Home";
import Bus from "./pages/Bus";
import BusStop from "./pages/BusStop";
import NotFound from "./pages/NotFound";

import NaviBar from "./components/NaviBar/NaviBar";
import Footer from "./components/Footer/Footer";

import BusDBContextProvider from "./contexts/BusDBContext/BusDBContextProvider";

export default function App() {
  return (
    <BusDBContextProvider>
      <BrowserRouter>
        <NaviBar />
        <Routes>
          <Route path={routes.home} element={<Home />} />
          <Route path={routes.bus} element={<Bus />} />
          <Route path={routes.busStop} element={<BusStop />} />
          <Route path={routes.notFound} element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </BusDBContextProvider>
  );
}
