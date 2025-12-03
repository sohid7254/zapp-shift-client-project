import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import useAuth from '../../../Hooks/useAuth';
import { useLocation, useNavigate } from 'react-router';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';


const SocialAuth = () => {
    const {signInGoogle} = useAuth()
    const location = useLocation()
    const navigate = useNavigate()
    const axiosSecure = useAxiosSecure()
    
    const handleGoogleSignIn = () =>{
        signInGoogle()
          .then(result => {
              console.log(result.user);
              navigate(location?.state || "/");
              // creat user in the data base
              const userInfo = {
                  email: result.user.email,
                  displayName: result.user.displayName,
                  photoURL: result.user.photoURL,
              };

              axiosSecure.post('/users', userInfo)
               .then(res => {
                 console.log('user data has been store', res.data)
                 
               })
          })
          .catch(error => {
            console.log(error)
          })
    }
    return (
        <div>
            {/* Google Register */}
            <button onClick={handleGoogleSignIn} type="button" className="w-full border border-gray-300 py-2 rounded-md flex items-center justify-center gap-2 bg-[#ebeef2] hover:bg-gray-50 transition">
                <FcGoogle className="w-5 h-5" />
                <span className="text-sm font-bold text-gray-700">Get Access with Google</span>
            </button>
        </div>
    );
};

export default SocialAuth;