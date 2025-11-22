import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router';
import useAuth from '../../../Hooks/useAuth';

const ForgetPass = () => {
    const {register, handleSubmit, formState: {errors}} = useForm()
    const navigate = useNavigate()
    const {handleResetPass} = useAuth()

    const handleResetSubmit = (data) =>{
        handleResetPass(data.email)
          .then(() => {
            navigate("/login")
            console.log("reset email send successfully")
          })
          .catch(error => {
            console.log(error.message)
          })
    }
    return (
        <div className="w-80 mt-5">
            <h2 className="md:text-4xl text-xl font-bold">Forgot Password </h2>
            <p className="text-gray-400">Enter your email address and we’ll send you a reset link.</p>
             
                <form className='space-y-4' onSubmit={handleSubmit(handleResetSubmit)}>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Enter Email: </label>
                    <input type="email" {...register("email", { required: true })} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400" />
                    {errors.email?.type === "required" && <p className="text-red-500 text-sm font-semibold">Email is a must to receive reset link</p>}
                </div>
                <button type="submit" className="w-full bg-primary  py-2 rounded-md font-semibold hover:bg-[#c7dc88] transition">
                    Log In
                </button>
            </form>
            <p className="text-green-600 font-semibold mt-4">
           Kindly check your inbox for reset mail.
        </p>
            
            <h2 className='text-lg text-gray-500'>Remember Your Password? <Link to={"/login"} className='font-bold text-primary'>Log In</Link></h2>
        </div>
    );
};

export default ForgetPass;