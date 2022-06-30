import React from 'react';
import PrimaryBtn from '../../Shared/PrimaryBtn';
import appointment from '../../../assets/images/appointment.png';

const StayUs = () => {
    return (
        <section
        style={{background : `url(${appointment})`}}
         className='text-center my-10 py-10'>
            <h5 className='text-1xl text-primary font-bold pb-2'>Contact Us</h5>
            <h3 className='text-3xl mb-7 text-white'>Stay connected with us</h3>
            <div className='flex flex-col justify-center items-center'>
            <input type="text" placeholder="Email Address" className="w-96	 input input-bordered input-info mb-8" />

            <input type="text" placeholder="Subject" className="w-96 input input-bordered input-info mb-8" />

            <textarea className="textarea textarea-info w-96 mb-8" placeholder="Your Message"></textarea>
            </div>
            <PrimaryBtn>Submit</PrimaryBtn>
        </section>
    );
};

export default StayUs;