import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 px-12'>
            <InfoCard img={clock} bgClass={"bg-gradient-to-r from-secondary to-primary"} infoTitle={"Opening Hours"}></InfoCard>
            <InfoCard img={marker} bgClass={"bg-accent"} infoTitle={"Our Location"}></InfoCard>
            <InfoCard img={phone} bgClass={"bg-gradient-to-r from-secondary to-primary"} infoTitle={"Contact us now"}></InfoCard>
        </div>
    );
};

export default Info;