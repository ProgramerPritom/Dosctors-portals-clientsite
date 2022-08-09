import React from 'react';
import { useState } from 'react';
import { toast } from 'react-toastify';

const DoctorRow = ({doctor, index ,refetch,setDeletingDoctor}) => {
    
    const {name, specialty, img,email } = doctor;
    
    return (
        
            <tr>
                <th>{index + 1}</th>

                <td><div class="avatar">
                <div class="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={img} alt={name} />
                </div>
                </div></td>

                <td>{name}</td>

                <td>{specialty}</td>

                <td>
                <label onClick={()=>setDeletingDoctor(doctor)} for="delete-confirm-modal" class="btn modal-button btn-circle btn-outline"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="red"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg></label>


                
                </td>
            </tr>
        
    );
};

export default DoctorRow;