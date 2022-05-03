import React from "react";
import { Outlet, Link } from "react-router-dom";
import Wrapper from "../../assets/wrappers/SharedLayout";
import { Navbar, SmallSidebar, BigSidebar } from "../../components";

export const SharedLayout = () => {
  return (
    <Wrapper>
      <nav>
        <main className="dashboard">
          <SmallSidebar />
          <BigSidebar />

          <div></div>
        </main>
      </nav>
      <Outlet />
    </Wrapper>
  );
};

export default SharedLayout;
