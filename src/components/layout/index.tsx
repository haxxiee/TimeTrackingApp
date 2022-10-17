import { FC } from "react";
import Navbar from "../Navbar";
import { Outlet } from "react-router-dom";

const Layout: FC = () => {
  return (
    <div>
      <Outlet />
      <Navbar />
    </div>
  );
};

export default Layout;
