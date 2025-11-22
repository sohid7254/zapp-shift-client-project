import React from 'react';
import { useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';
import useAuth from '../../../Hooks/useAuth';
import { Link, useLocation, useNavigate } from 'react-router';
import SocialAuth from '../SocialAuth/SocialAuth';

const Login = () => {
    const {register,handleSubmit, formState: {errors}} = useForm()
    const { signInUser } = useAuth();
    const location = useLocation()
    const navigate = useNavigate()
    

    const handleSignIn = (data) => {
        
        signInUser(data.email, data.password)
           .then(result => {
            console.log(result.user)
            navigate(location?.state || "/")
           })
           .catch(error => {
            console.log(error)
           })
    }
    return (
        <div className="mt-5 w-80">
            <h2 className="md:text-4xl font-bold mb-2 text-start">Welcome Back</h2>
            <p className="text-gray-600 mb-6 text-start">LogIn with ZapShift</p>

            <form className="space-y-4" onSubmit={handleSubmit(handleSignIn)}>
                {/* Email */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input type="email" {...register("email", { required: true })} placeholder="Enter your email" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400" />
                    {errors.email?.type === "required" && <p className="text-red-500">Email is a must nedded for LogIn</p>}
                </div>

                {/* Password */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                    <input
                        type="password"
                        {...register("password", {
                            required: true,
                            minLength: 8,
                            pattern: {
                                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/,
                                message: "Password includes 8 characters,uppercase,lowercase,and a special symbol",
                            },
                        })}
                        placeholder="Enter your password"
                        className="w-full px-4 py-2 border   focus:outline-none focus:ring-2 focus:ring-gray-400 rounded-md "
                    />
                    {errors.password?.type === "required" && <p className="text-red-500">You must input a valid passord</p>}
                    {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                </div>

                <Link to={"/forgetPass"} className="text-sm underline text-gray-400">
                    Forget Password?  
                </Link>

                {/* Register Button */}
                <button type="submit" className="w-full bg-primary  py-2 rounded-md font-semibold hover:bg-[#c7dc88] transition">
                    Log In
                </button>
            </form>

            {/* Login Link */}
            <p className="text-center text-sm text-gray-600 mt-4">
                Haven't Account Yet?{" "}
                <Link state={location.state} to={"/register"} className="text-primary font-medium hover:underline">
                    Register
                </Link>
            </p>

            {/* Divider */}
            <div className="flex items-center my-6">
                <hr className="grow border-gray-300" />
                <span className="px-2 text-gray-500 text-sm">Or</span>
                <hr className="grow border-gray-300" />
            </div>

            {/* Google Register */}
            <SocialAuth />
        </div>
    );
};

export default Login;