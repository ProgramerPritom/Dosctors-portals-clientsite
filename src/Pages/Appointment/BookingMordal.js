import React from 'react';
import { format } from 'date-fns';

const BookingMordal = ({treatment, date,setTreatment}) => {
    const {_id,name,slots} = treatment;

    const handleModal = (event) => {
        event.preventDefault();
        const slots = event.target.slot.value;
        console.log(slots);
        setTreatment(null);
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
            <label for="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                <h3 className="font-bold text-lg text-secondary uppercase">{treatment.name}</h3>
                <form onSubmit={handleModal} className='grid grid-cols-1 gap-3 justify-items-center mt-3'>
                <input type="text" disabled value={format(date, 'PP')} className="input input-bordered w-full max-w-xs" />

                <select name='slot' className="select select-bordered w-full max-w-xs">
                {slots.map(slot => <option>
                    {slot}
                </option>)}
                
                </select>
                
                <input type="text" name='name' placeholder="Full name" className="input input-bordered w-full max-w-xs" />
                <input type="text" name='email' placeholder="Email" className="input input-bordered w-full max-w-xs" />
                <input type="text" name='phone' placeholder="Phone" className="input input-bordered w-full max-w-xs" />
                <input type="submit" value="Submit" className="btn btn-secondary w-full max-w-xs text-white" />
                </form>
                
            </div>
            </div>
        </div>
    );
};

export default BookingMordal;