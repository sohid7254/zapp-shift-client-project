import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaUserCheck } from "react-icons/fa";
import { IoPersonRemoveSharp } from "react-icons/io5";
import { FaTrashCan } from "react-icons/fa6";
import Swal from "sweetalert2";
const AproveRiders = () => {
    const axiosSecure = useAxiosSecure();
    const {refetch, data: riders = [] } = useQuery({
        queryKey: ["riders", "pending"],
        queryFn: async () => {
            const res = await axiosSecure.get("/riders");
            return res.data;
        },
    });

    const updateRiderStatus = (rider,status) => {
        const updateInfo = { status: status, email: rider.riderEmail};
        axiosSecure.patch(`/riders/${rider._id}`, updateInfo).then((res) => {
            if (res.data.modifiedCount) {
                refetch()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `Rider  Has been ${status}.`,
                    showConfirmButton: false,
                    timer: 2500,
                });
            }
        });
    }

    const handleAprove = (rider) => {
        updateRiderStatus(rider, 'Aproved')
    };

    const handleRejection = (rider) => {
        updateRiderStatus(rider, 'Rejected')
    }

    return (
        <div>
            <h2>Rider Pending Aproval: {riders.length} </h2>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Sl No</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>District</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {riders.map((rider, index) => (
                            <tr>
                                <th>{index + 1}</th>
                                <td> {rider.riderName} </td>
                                <td> {rider.riderEmail}</td>
                                <td>{rider.riderDistrict}</td>
                                <td>
                                    <p className={`${rider.status === 'Aproved'? 'text-green-800': 'text-red-500'}`}>{rider.status}</p>
                                </td>
                                <td className="flex gap-2">
                                    <button onClick={() => handleAprove(rider)} className="btn">
                                        <FaUserCheck />
                                    </button>
                                    <button onClick={() => handleRejection(rider)} className="btn">
                                        <IoPersonRemoveSharp />
                                    </button>
                                    <button className="btn">
                                        <FaTrashCan />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AproveRiders;
