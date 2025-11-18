import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import useAuth from '../../../Hooks/useAuth';
import { useLocation, useNavigate } from 'react-router';

const SocialAuth = () => {
    const {signInGoogle} = useAuth()
    const location = useLocation()
    const navigate = useNavigate()
    
    const handleGoogleSignIn = () =>{
        signInGoogle()
          .then(result => {
            console.log(result.user)
            navigate(location?.state || "/")
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