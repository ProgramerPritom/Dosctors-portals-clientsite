import { signOut } from 'firebase/auth';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Appointment from '../Appointment/Appointment';
import Loading from '../Shared/Loading';

const MyAppointment = () => {
    const [appointments, setAppointments] = useState([]);
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();
    useEffect(()=>{
        if (user) {
            fetch(`https://whispering-sierra-92266.herokuapp.com/booking?patient=${user.email}`,{
                method: 'GET',
                headers: {
                    'authorization' : `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
        .then(res => {
            // console.log('res',res);
            if (res.status === 401 || res.status === 403) {
            signOut(auth);
            localStorage.removeItem('accessToken');
                navigate('/')
            }
           return res.json()
        })
        .then(data => {

            setAppointments(data)
        })
        }
    },[user])
    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h3>Available Appointment for your : {appointments.length}</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                   
                    <thead>
                    <tr>
                        <th>SL</th>
                        <th>Patient Name</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Treatment</th>
                        <th>Payment</th>
                    </tr>
                    </thead>
                    <tbody>
                    
                    {appointments.map((a,index) =><tr key={a._id}>
                        <th>{index +1}</th>
                        <td>{a.patientName}</td>
                        <td>{a.date}</td>
                        <td>{a.slots}</td>
                        <td>{a.treatment}</td>
                        <td>
                            {(a.price && !a.paid) && <Link to={`payment/${a._id}`}><button className='btn btn-xs btn-success'>PAY</button></Link>}
                            {(a.price && a.paid) && <span className='text-success'>PAID</span>}
                        </td>
                    </tr>)}
                    </tbody>
                </table>
                </div>
        </div>
    );
};

export default MyAppointment;