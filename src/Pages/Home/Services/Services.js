import React from 'react';
import Fluoride from '../../../assets/images/fluoride.png';
import Cavity from '../../../assets/images/cavity.png';
import Teeth from '../../../assets/images/whitening.png';
import Service from '../Service/Service';
import tretment from '../../../assets/images/treatment.png';

const Services = () => {
    const services = [
        {
            _id : 1,
            name : "Fluoride Treatment",
            description : "Fluoride treatments are typically professional treatments containing a high concentration of fluoride",
            img : Fluoride

        },
        {
            _id : 2,
            name : "Cavity Filling",
            description : "A cavity filling is when the dentist fills the opening in your tooth with some kind of material",
            img : Cavity

        },
        {
            _id : 3,
            name : "Teeth Whitening",
            description : "Tooth whitening or tooth bleaching is the process of lightening the color of human teeth",
            img : Teeth

        },
    ]
    return (
        <div className='my-14'>
            <div className='text-center'>
                <h1 className='text-1xl text-primary font-bold'>OUR SERVICES</h1>
                <p className='text-4xl'>Services We Provide</p>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 mt-8'>
                {services.map(service => <Service
                key={service._id}
                service={service}
                ></Service>)
                }

            </div>
            <div className='my-20 px-28'>
            <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure><img className='w-80' src={tretment} alt="Album"/></figure>
            <div className="card-body">
                <h2 className="card-title">Exceptional Dental Care, on Your Terms</h2>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <div className="card-actions justify-start">
                <button className="btn btn-primary text-white font-bold">GET STARTED</button>
                </div>
            </div>
            </div>
            </div>
        </div>
    );
};

export default Services;