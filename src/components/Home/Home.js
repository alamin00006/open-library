import React from 'react';
import MainNavbar from './Navbar/MainNavbar';
import Navbar1 from './Navbar/Navbar1';
import Offcanvas from './Navbar/Offcanvas';

const Home = () => {
    return (
        <div>
            <Navbar1></Navbar1>
            <MainNavbar></MainNavbar>
            <Offcanvas></Offcanvas>
        </div>
    );
};

export default Home;