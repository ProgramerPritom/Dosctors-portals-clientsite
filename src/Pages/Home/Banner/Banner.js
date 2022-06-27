import React from 'react';
import chair from '../../../assets/images/chair.png';
import PrimaryBtn from '../../Shared/PrimaryBtn';

const Banner = () => {
    return (
        <div>
            <div class="hero min-h-screen">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} class="max-w-sm rounded-lg shadow-2xl" />
                <div class="bg-[url('https://i.ibb.co/vJJDhmR/bg.png')] bg-cover bg-no-repeat bg-left">
                <h1 class="text-5xl font-bold">Your New Smile Starts Here</h1>
                <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                <PrimaryBtn>GET STARTED</PrimaryBtn>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Banner;