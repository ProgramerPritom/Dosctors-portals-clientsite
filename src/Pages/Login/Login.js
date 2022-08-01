import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useToken from '../../hooks/useToken';

const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      let navigate = useNavigate();
      let location = useLocation();
      let from = location.state?.from?.pathname || "/";
      const [token] = useToken(user || gUser)

      if ( gLoading || loading) {
        return <Loading></Loading>
      }

    if(token) {
        navigate('/appointment');
    }
    let signInError;
    if (error || gError) {
        signInError = <p className='text-red-500 py-4 text-center'>Sorry: {error?.message || gError?.message}</p>
        
    }

    const onSubmit = data => {
        // console.log(data);
        signInWithEmailAndPassword(data.email, data.password);
        
    }


    return (
        <div className='flex justify-center items-center h-screen my-12'>
            <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="text-center text-2xl font-bold">Login</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="Your Email" className="input input-bordered w-full max-w-xs" 
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

                <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="Type Password" className="input input-bordered w-full max-w-xs" 
                    {...register("password",  {
                        minLength: {
                          value: 6,
                          message: 'Password should be 6 Letter or More' 


                        },
                        required : {
                            value : true,
                            message : 'Password Must be given'
                        }
                        
                      })}
                />
                <label className="label">
                    {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                    {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                    
                </label>
                </div>



                
                {signInError}
                
                <input className='btn w-full max-w-xs text-white' type="submit" value='Login' />
                </form>

                <p className='text-center text-sm'>New on Doctors portal ?  <Link className='text-primary font-bold' to='/signUp'>Create an account</Link></p>
                
                <div className="divider">OR</div>
                <button onClick={() => signInWithGoogle()}
                className="btn btn-outline">Continue with Google</button>
            </div>
            </div>
        </div>
    );
};

export default Login;