import React from 'react';

const Services = ({service,setTreatment}) => {
    const {name,slots} = service
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
        <div className="card-body mx-auto">
            <h2 className="card-title text-secondary">{name}</h2>
            {
                slots.length > 1 ? <><span>{slots[0]}</span></> : <><span className='text-red-500'> Try another date</span></>
            }
            <p>{slots.length} {slots.length > 1 ? "spaces" : "space"} available</p>
            <div className="card-actions justify-end">
            
            <label disabled={slots.length === 0} onClick={()=> setTreatment(service)}  for="booking-modal" className="btn btn-secondary text-white">Book Appointment</label>
            </div>
        </div>
        </div>
    );
};

export default Services;