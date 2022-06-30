import React, { useState } from 'react';
import chair from '../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';
import chairBg from '../../assets/images/bg.png';

const AppointmentBanner = ({date, setDate}) => {
    
    return (
        <div style={{background: `url(${chairBg})`,
        backgroundSize: 'cover'}} class="hero min-h-screen">
        <div class="hero-content flex-col lg:flex-row-reverse">
            <img src={chair} class="max-w-sm rounded-lg shadow-2xl" alt='Dentist Chair' />
            <div className='shadow-2xl rounded mr-7'>
            <DayPicker 
            mode="single"
            selected={date}
            onSelect={setDate}
            
            />

            

            </div>
        </div>
        </div>
    );
};

export default AppointmentBanner;