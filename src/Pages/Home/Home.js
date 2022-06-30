import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner/Banner';
import Info from './Info/Info';
import MakeAppointment from './MakeAppointment/MakeAppointment';
import Services from './Services/Services';
import StayUs from './StayUs/StayUs';
import TestiMonial from './TestiMonial/TestiMonial';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <MakeAppointment></MakeAppointment>
            <TestiMonial></TestiMonial>
            <StayUs></StayUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;