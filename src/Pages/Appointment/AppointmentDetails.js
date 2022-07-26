import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingMordal from './BookingMordal';
import Services from './Services';
import { useQuery } from 'react-query'
import Loading from '../Shared/Loading';


const AppointmentDetails = ({date}) => {
    
    const [treatment,setTreatment] = useState(null);
    const formattedDate = format(date, 'PP');

    const {data: services, isLoading, refetch} = useQuery(['available', formattedDate], ()=>fetch(`http://localhost:5000/available?date=${formattedDate}`)
        .then(res => res.json())
        )

        if (isLoading) {
            return <Loading></Loading>
        }
    // useEffect( ()=>{
    //     fetch(`http://localhost:5000/available?date=${formattedDate}`)
    //     .then(res => res.json())
    //     .then(data => setServices(data));
    // },[formattedDate])

    return (
        <div>
            <h3 className='font-bold text-xl text-center text-primary my-5'>Available Appointments On : {format(date, 'PP')}</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10'>
                {
                    services?.map(service => <Services
                    key={service._id}
                     service={service}
                     setTreatment={setTreatment}></Services>)
                }
                
            </div>
            {treatment && <BookingMordal
             treatment={treatment} 
             date={date}
             setTreatment={setTreatment}
             refetch={refetch}></BookingMordal>}
        </div>
    );
};

export default AppointmentDetails;