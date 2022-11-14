import React from 'react';
import About from '../../components/About';
import Stylists from '../../components/Stylist';
import Appointments from '../../components/Appointments';
import ContactInfo from '../../components/ContactInfo';

const Home = () => {
    return (
        <>
            <About />
            <Stylists />
            <Appointments />
            <ContactInfo />
        </>
    );
};

export default Home;
