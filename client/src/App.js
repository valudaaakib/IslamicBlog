import React from "react";
import Navbar from "./component/Navbar";
import PrayerTime from "./pages/home/PrayerTime";
import FourPillers from "./pages/home/FourPillers";

const App = () => {
  return (
    <>
      <Navbar />
      <PrayerTime />
      <FourPillers />
    </>
  );
};

export default App;
