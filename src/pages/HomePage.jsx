import React from 'react';
import Navbar from '../components/Navbar';
import SlideBar from '../components/SlideBar';
import Discount from '../components/Discount';

const HomePage = () => {
    return (
        <div className="w-full h-[100vh]">
            <Navbar />
            <SlideBar />
            <Discount />
        </div>
    );
};

export default HomePage;
