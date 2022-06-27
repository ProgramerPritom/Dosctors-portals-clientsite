import React from 'react';
import doctor from '../../../assets/images/doctor-small.png';
import appointment from '../../../assets/images/appointment.png';
import PrimaryBtn from '../../Shared/PrimaryBtn';

const MakeAppointment = () => {
    return (
        <section style={{background : `url(${appointment})`}}
         className='flex justify-center items-center mb-10 mt-28'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-80px]' src={doctor} alt="" />
            </div>
            <div className='flex-1 p-10'>
                <h4 className='text-1xl text-primary font-bold mb-3'>Appointment</h4>
                <h3 className='text-2xl text-white mb-3 font-bold'>Make an appointment Today</h3>
                <p className='text-white mb-2.5'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <PrimaryBtn>GET STARTED</PrimaryBtn>
            </div>
        </section>
    );
};

export default MakeAppointment;