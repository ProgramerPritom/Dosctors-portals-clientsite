import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingMordal from './BookingMordal';
import Services from './Services';


const AppointmentDetails = ({date}) => {
    const [services, setServices] = useState([]);
    const [treatment,setTreatment] = useState(null);

    useEffect( ()=>{
        fetch('http://localhost:5000/service')
        .then(res => res.json())
        .then(data => setServices(data));
    },[])

    return (
        <div>
            <h3 className='font-bold text-xl text-center text-primary my-5'>Available Appointments On : {format(date, 'PP')}</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10'>
                {
                    services.map(service => <Services
                    key={service._id}
                     service={service}
                     setTreatment={setTreatment}></Services>)
                }
                
            </div>
            {treatment && <BookingMordal
             treatment={treatment} 
             date={date}
             setTreatment={setTreatment}></BookingMordal>}
        </div>
    );
};

export default AppointmentDetails;