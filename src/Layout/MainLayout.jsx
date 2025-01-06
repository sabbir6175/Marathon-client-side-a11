import React from 'react';
import Navbar from '../page/SharePage/Navbar';
import Footer from '../page/SharePage/Footer';
import { Outlet } from 'react-router-dom';




const MainLayout = () => {
    return (
        <div className=' container mx-auto shadow-2xl'>
           <Navbar></Navbar>
           <Outlet></Outlet>
           <Footer></Footer>
        </div>
    );
};

export default MainLayout;