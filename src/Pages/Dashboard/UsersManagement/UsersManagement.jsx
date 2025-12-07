import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { FiShieldOff } from "react-icons/fi";
import { FaUserShield } from "react-icons/fa6";
import Swal from 'sweetalert2';


const UsersManagement = () => {
    const axiosSecure = useAxiosSecure();
    const [searchText, setSearchText] = useState('');


    const {refetch,  data: users = []} = useQuery({
        queryKey: ['users', searchText],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users?searchText=${searchText}`);
            return res.data;
        }
    })
    // making user admin
   const handleMakeAdmin = (user) => {
       Swal.fire({
           title: "Are you sure?",
           text: `Do you want to make ${user.displayName} an Admin?`,
           icon: "warning",
           showCancelButton: true,
           confirmButtonColor: "#3085d6",
           cancelButtonColor: "#d33",
           confirmButtonText: "Yes, make admin!",
       }).then((result) => {
           if (result.isConfirmed) {
               const roleInfo = { role: "admin" };
               axiosSecure.patch(`/users/${user._id}/role`, roleInfo).then((res) => {
                   if (res.data.modifiedCount) {
                       refetch();
                       Swal.fire({
                           position: "top-end",
                           icon: "success",
                           title: `${user.displayName} is an Admin Now!`,
                           showConfirmButton: false,
                           timer: 1500,
                       });
                   }
               });
           }
       });
   };

    const handleRemoveAdmin = user => {
        // remove admin functionality to be implemented
        Swal.fire({
            title: "Are you sure?",
            text: `Do you want to remove ${user.displayName} from Admin role?`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, remove admin!",
        }).then((result) => {
        if (result.isConfirmed) {
            const roleInfo = { role: 'user' };
            axiosSecure.patch(`/users/${user._id}/role`, roleInfo).then((res) => {
                if (res.data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${user.displayName} is not an Admin Now!`,
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }
            });
        }
    });
    }
    return (
        <div>
            <h3>Users: {users.length}</h3>
            <p>Search text: {searchText}</p>
            <label className="input">
                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.3-4.3"></path>
                    </g>
                </svg>
                <input onChange={(e) => setSearchText(e.target.value)} type="search" required placeholder="Search Users" />
            </label>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Admin Action</th>
                            <th>Other Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img src={user.photoURL || "/demo-user.png"} alt={user.displayName || "User"} className="h-12 w-12 rounded-full object-cover" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{user.displayName}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                                <th>
                                    {user.role === "admin" ? (
                                        <button onClick={() => handleRemoveAdmin(user)} className="btn bg-red-400">
                                            <FiShieldOff />
                                        </button>
                                    ) : (
                                        <button onClick={() => handleMakeAdmin(user)} className="btn bg-green-400">
                                            <FaUserShield />
                                        </button>
                                    )}
                                </th>
                                <th>Action</th>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UsersManagement;