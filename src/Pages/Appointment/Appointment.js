import React, { useState } from 'react';
import Footer from '../Shared/Footer';
import AppointmentBanner from './AppointmentBanner';
import AppointmentDetails from './AppointmentDetails';

const Appointment = () => {
    const [date, setDate] = useState( new Date());
    return (
        <div>
            <AppointmentBanner date={date} setDate={setDate}></AppointmentBanner>
            <AppointmentDetails date={date}></AppointmentDetails>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;