import React from "react";
import Navbar from "../page/SharePage/Navbar";
import Footer from "../page/SharePage/Footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className=" ">
      <header className="">
        <Navbar></Navbar>
      </header>
      <main className="container mx-auto shadow-2xl pt-16 min-h-screen">
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default MainLayout;
