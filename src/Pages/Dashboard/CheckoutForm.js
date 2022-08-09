import React from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useState } from 'react';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';

const CheckoutForm = ({appointment}) => {

    const stripe = useStripe();
    const elements = useElements()
    const [paymentError,setPaymentError] = useState('');
    const [success,setSuccess] = useState('');
    const [proccessing,setProccessing] = useState(false);
    const [transactionId,setTransactionId] = useState('');
    const [clientSecret, setClientSecret] = useState('');

    const {price,patientName,patientEmail,_id,treatment} = appointment;

    

    useEffect(()=>{
        fetch('https://whispering-sierra-92266.herokuapp.com/create-payment-intent',{
            method: 'POST',
            headers: {
                'content-type' : 'application/json',
                'authorization' : `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({price})
        })
        .then(res => res.json())
        .then(data =>{
            if (data?.clientSecret) {
                setClientSecret(data.clientSecret);
            }
        })
    },[price])


   
    const handleSubmit = async(event) =>{
        event.preventDefault();
       
        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card ===null) {
            return;
        }

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        
         
            setPaymentError(error?.message || '');
            setSuccess('');
            setProccessing(true)
        // Confirm card Payment
        const {paymentIntent, error: intentError} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                  name: patientName,
                  email: patientEmail
                },
              },
            },
          );
          if (intentError) {
            setPaymentError(intentError?.message);
            setProccessing(false);
          }
          else{
            setPaymentError('');
            setTransactionId(paymentIntent.id)
            console.log(
                paymentIntent
            );
            setSuccess(toast('Your Payment is Successfully Completed'));
            // 
            const payment = {
                appointmentId : _id,
                transactionId : paymentIntent.id,
                patientName: patientName,
                patientEmail: patientEmail,
                treatmentName: treatment,
            }
            fetch(`https://whispering-sierra-92266.herokuapp.com/booking/${_id}`,{
                method: 'PATCH',
                headers: {
                    'content-type' : 'application/json',
                    'authorization' : `Bearer ${localStorage.getItem('accessToken')}`
                },
                body : JSON.stringify(payment)
            }).then(res => res.json())
            .then(data => {
                setProccessing(false);
                // console.log(data);
            })
          }



    }
    return (
        <React.Fragment>
            <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                style: {
                    base: {
                    fontSize: '16px',
                    color: '#424770',
                    '::placeholder': {
                        color: '#aab7c4',
                    },
                    },
                    invalid: {
                    color: '#9e2146',
                    },
                },
                }}
            />
            <button className='btn btn-success mt-8 ' type="submit" disabled={!stripe || !clientSecret}>
                Process to Pay
            </button>
            </form>
            {
                paymentError && <p className='text-red-500 text-xl'>{paymentError}</p> 
            }
            {
                transactionId && <p>Your payment complete and transactionId Id is: <span className='text-orange-500 text-bold'> {transactionId}</span></p>
            }
        </React.Fragment>
    );
};

export default CheckoutForm;