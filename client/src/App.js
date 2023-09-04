import React from "react";
import HomeRoute from "./routes/HomeRoute";
import LoginRoute from "./routes/admin/LoginRoute";
import DashRoute from "./routes/admin/DashRoute";
import BlogRoute from "./routes/admin/BlogRoute";

const App = () => {
  return (
    <>
      <HomeRoute />
      <LoginRoute />
      <DashRoute />
      <BlogRoute />
    </>
  );
};

export default App;
