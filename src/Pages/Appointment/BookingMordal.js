import React from 'react';
import { format } from 'date-fns';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import { toast } from 'react-toastify';

const BookingMordal = ({treatment, date,setTreatment, refetch}) => {
    const {_id,name,slots,price} = treatment;
    const [user, loading,] = useAuthState(auth);
    const formattedDate = format(date, 'PP');

    if (loading) {
        return <Loading></Loading>
    }

    const handleModal = (event) => {
        event.preventDefault();
        const slots = event.target.slot.value;
        const booking = {
            treatmentId : _id,
            treatment : name,
            date : formattedDate,
            slots,
            price,
            patientName: user.displayName,
            patientEmail : user.email,
            phone: event.target.phone.value

        }
        fetch('https://whispering-sierra-92266.herokuapp.com/booking', {
            method: 'POST',
            body: JSON.stringify(booking),
            headers: {
                'Content-type': 'application/json',
            },
            })
            .then(res => res.json())
            .then(data => {

               
                if (data.success) {
                    toast(`Appointment is set ${formattedDate} at ${slots}`);
                }else{
                    toast.error(`Allready appointment set on ${data.booking?.date} at ${data.booking?.slots}`);
                }
                refetch();
                setTreatment(null);
            })
        
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
                {slots.map((slot, index) => <option
                key={index}
                value={slot}
                >{slot}
                </option>)}
                
                </select>
                
                <input type="text" name='name' disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />

                <input type="text" name='email' disabled value={user?.email || ''} className="input input-bordered w-full max-w-xs" />

                <input type="text" name='phone' placeholder="Phone" className="input input-bordered w-full max-w-xs" />

                <input type="submit" value="Submit" className="btn btn-secondary w-full max-w-xs text-white" />
                </form>
                
            </div>
            </div>
        </div>
    );
};

export default BookingMordal;