import { Outlet } from "react-router";
import Navigation from "./navigation";

const DefaultLayout = () => {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
};

export default DefaultLayout;
