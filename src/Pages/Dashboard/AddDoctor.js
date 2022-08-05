import React from 'react';
import { useForm } from "react-hook-form";
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';

const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const {data: services, isLoading} = useQuery('services', ()=> fetch('http://localhost:5000/service').then(res=>res.json()));

    const imageStorageKey = 'f554d4a94faa54a256b033c9a2b30f21';

    /**
     * 3 ways to store images
     * 1.Third party storage // like imgbb
     * 2.Your own storage in your own server(file system)
     * 3.Database: Mongodb
     * 
     * YUP : to validate file : Search : YUP file validation for react hook form
    */


    const onSubmit = async data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        // console.log(data)
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url,{
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(result =>{
            if (result.success) {
                const img = result.data.url;
                const doctor = {
                    name: data.name,
                    email: data.email,
                    specialty: data.specialty,
                    img: img
                }
                //send to my database
                fetch('http://localhost:5000/doctor',{
                    method: 'POST',
                    headers: {
                        'content-type' : 'application/json',
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(doctor)
                })
                .then(res => res.json())
                .then(inserted => {
                    // console.log("Doctor",inserted);
                    if (inserted.insertedId) {
                        toast('Doctor Details added successfully');
                        reset();
                    }
                    else{
                        toast.error('Failed to add Doctor details');
                    }
                })
            }
            // console.log("Image bb",result);
        })
   
    }

    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div>
            <h2 className="text-3xl">Add New Doctor..</h2>
            <div className="addDoctor-form px-5">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full max-w-full">
                <label className="label">
                    <span className="label-text">Full Name</span>
                </label>
                <input type="text" placeholder="Your Name" className="input input-bordered w-full max-w-full" 
                    {...register("name",  {
                        
                        required : {
                            value : true,
                            message : 'Enter Full Name first'
                        }
                        
                      })}
                />
                <label className="label">
                    {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                    
                    
                </label>
                </div>

                <div className="form-control w-full max-w-full">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="Your Email" className="input input-bordered w-full max-w-full" 
                    {...register("email",  {
                        pattern: {
                          value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                          message: 'Provide a Valid Email' 


                        },
                        required : {
                            value : true,
                            message : 'Email Must be given'
                        }
                        
                      })}
                />
                <label className="label">
                    {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                    {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                    
                </label>
                </div>


                <div className="form-control w-full max-w-full">
                <label className="label">
                    <span className="label-text">Specialization</span>
                </label>
                <select {...register("specialty")} class="select input-bordered w-full max-w-full">
                    {
                        services.map(service => <option
                        key={service._id} value={service.name}
                        >{service.name}</option>)
                    }
                </select>
                
                </div>

                <div className="form-control w-full max-w-full">
                <label className="label">
                    <span className="label-text">Image</span>
                </label>
                <input type="file" className="p-2 input input-bordered w-full max-w-xs" 
                    {...register("image",  {
                        
                        required : {
                            value : true,
                            message : 'Image is Needed'
                        }
                        
                      })}
                />
                <label className="label">
                    {errors.image?.type === 'required' && <span className="label-text-alt text-red-500">{errors.image.message}</span>}
                    
                    
                </label>
                </div>


                
                
                
                <input className='btn w-full max-w-full my-4 text-white' type="submit" value='ADD DOCTOR' />
                </form>
            </div>
        </div>
    );
};

export default AddDoctor;