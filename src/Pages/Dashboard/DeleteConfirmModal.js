import React from 'react';
import { toast } from 'react-toastify';

const DeleteConfirmModal = ({deletingDoctor, refetch,setDeletingDoctor}) => {
 const {name,email} = deletingDoctor;
    const handleDoctorDelete = () =>{
        fetch(`https://whispering-sierra-92266.herokuapp.com/doctor/${email}`,{
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res =>res.json())
        .then(data => {
            // console.log('delete data', data);
            if (data.deletedCount) {
                toast.success( `Doctor ${name} is deleted.` );
                setDeletingDoctor(null);
                refetch();
            }
        })
    }

    return (
        <div>
            
            

            
            <input type="checkbox" id="delete-confirm-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
                <h3 className="font-bold text-lg">Are You sure want to Delete Dr.{name}</h3>
                <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                <div className="modal-action">

                <button onClick={()=>handleDoctorDelete()} className="btn btn-error">
                Delete Now
                </button>

                <label htmlFor="delete-confirm-modal" className="btn btn-success">Cancel</label>
                </div>
            </div>
            </div>
        </div>
    );
};

export default DeleteConfirmModal;