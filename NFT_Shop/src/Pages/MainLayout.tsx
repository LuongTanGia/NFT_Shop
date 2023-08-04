import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div className="main_layout">
      <Header />

      <Outlet />

      <Footer />
    </div>
  );
}

export default MainLayout;
