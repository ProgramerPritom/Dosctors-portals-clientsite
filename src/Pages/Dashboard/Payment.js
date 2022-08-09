import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe('pk_test_51LUQflG4C5NNRweSgrZWbcJDjquwEcaVWC6CNFQBXkIy6Dyz8WzSi0SL0g9fUh5ZnJpa2pOztHhhuaTkUGdMD1eC00d9XKwN1v');


const Payment = () => {
    const {appointmentId} = useParams();
    const url = `https://whispering-sierra-92266.herokuapp.com/booking/${appointmentId}`;
    const {data: appointment, isLoading} = useQuery(['booking', appointmentId], ()=> fetch(url,{
        method: 'GET',
        headers : {
            'authorization' : `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res=>res.json()));


    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            
            <div className="card w-50 max-w-md bg-base-100 shadow-xl my-12 mx-12">
                <div className="card-body">
                <p className='text-success font-bold'>Hello, {appointment.patientName}</p>
                <h2 className="card-title">Please Pay for " {appointment.treatment}"</h2>
                <p>Your Appointment on <span className='text-orange-700'>{appointment.date}</span> at {appointment.slots}</p>
                <div className="card-actions justify-end">
                <p>Please Pay ${appointment.price}</p>
                </div>
            </div>
            </div>
                <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl mx-12 bg-base-100">
                <div className="card-body">
                    
                <Elements stripe={stripePromise}>
                    <CheckoutForm appointment={appointment} />
                </Elements>
                    
                </div>
                </div>
            </div>
           
    );
};

export default Payment;