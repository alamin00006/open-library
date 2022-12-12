import React from 'react';
import MainNavbar from './Navbar/MainNavbar';
import './Home.css'
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div className='home-page'>
            
            <MainNavbar></MainNavbar>
            <Banner></Banner>
            
        </div>
    );
};

export default Home;