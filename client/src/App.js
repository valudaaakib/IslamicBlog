import React from "react";
import HomeRoute from "./routes/HomeRoute";
import LoginRoute from "./routes/admin/LoginRoute";
import DashRoute from "./routes/admin/DashRoute";

const App = () => {
  return (
    <>
      <HomeRoute />
      <LoginRoute />
      <DashRoute />
    </>
  );
};

export default App;
