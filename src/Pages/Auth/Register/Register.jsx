import React from 'react';
import { useForm } from 'react-hook-form';

import useAuth from '../../../Hooks/useAuth';
import { Link, useLocation, useNavigate } from 'react-router';
import SocialAuth from '../SocialAuth/SocialAuth';
import axios from 'axios';


const Register = () => {
    const {register,handleSubmit, formState: {errors}} = useForm()

    const { registerUser, updateUserProfile } = useAuth();
    const location = useLocation()
    const navigate = useNavigate()
    console.log(location)

    const handleRegisteration = (data) => {
        

        const profileImage = data.image[0]

        registerUser(data.email, data.password)
            .then((result) => {
                console.log(result.user)
                //1.  store the image inmform data
                const formData = new FormData();
                formData.append('image', profileImage)

                // 2. send the photo to the store and get the url
                const image_API_URL = `https://api.imgbb.com/1/upload?expiration=600&key=${import.meta.env.VITE_image_host_key}`;

                axios.post(image_API_URL, formData)
                  .then(res => {
                    console.log('after image upload', res.data.data.url)
                    // update user Profile on the firebase
                    const userProfile = {
                        displayName : data.name,
                        photoURL : res.data.data.url
                    }
                    updateUserProfile(userProfile)
                      .then(() => {
                        console.log('userProfile updated')
                        navigate(location?.state || "/")
                      })
                      .catch(error => console.log(error))
                  })
                  
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <div className="mt-5">
            <h2 className="md:text-4xl font-bold mb-2 text-start">Create an Account</h2>
            <p className="text-gray-600 mb-6 text-start">Register with ZapShift</p>

            <form className="space-y-4" onSubmit={handleSubmit(handleRegisteration)}>
                {/* Name */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input type="text" {...register("name", { required: true, minLength: 6 })} placeholder="Enter your name" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400" />
                    {errors.name?.type === "required" && (
                        <p role="alert" className="text-red-400">
                             Name is required
                        </p>
                    )}
                </div>
                {/* Image Uploader */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Upload Your Image</label>
                    <input type="file" {...register("image", { required: true})} placeholder="Enter your Image" className="file-input w-full  border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400" />
                    {errors.image?.type === "required" && (
                        <p role="alert" className="text-red-400">
                            Image name is required
                        </p>
                    )}
                </div>

                {/* Email */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input type="email" {...register("email", { required: true })} placeholder="Enter your email" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400" />
                    {errors.email?.type === "required" && <p className="text-red-500">Email is a must nedded for registeration</p>}
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

                {/* Register Button */}
                <button type="submit" className="w-full bg-primary  py-2 rounded-md font-semibold hover:bg-[#c7dc88] transition">
                    Register
                </button>
            </form>

            {/* Login Link */}
            <p className="text-center text-sm text-gray-600 mt-4">
                Already have an account?{" "}
                <Link state={location.state} to="/login" className="text-[#2b8a4e] font-medium hover:underline">
                    Login
                </Link>
            </p>

            {/* Divider */}
            <div className="flex items-center my-6">
                <hr className="grow border-gray-300" />
                <span className="px-2 text-gray-500 text-sm">Or</span>
                <hr className="grow border-gray-300" />
            </div>
            {/* Social LogIn */}
            <SocialAuth />
        </div>
    );
};

export default Register;