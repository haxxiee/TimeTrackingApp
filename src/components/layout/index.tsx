import { FC } from "react";
import Navbar from "../Navbar";
import { Outlet } from "react-router-dom";
import StoreProvider from "../../context";

const Layout: FC = () => {
  return (
    <div>
      <StoreProvider>
        <Outlet />
        <Navbar />
      </StoreProvider>
    </div>
  );
};

export default Layout;
