import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaEye, FaUserCheck } from "react-icons/fa";
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

    const [selectedRider, setSelectedRider] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

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
        updateRiderStatus(rider, 'Approved')
    };

    const handleRejection = (rider) => {
        updateRiderStatus(rider, 'Rejected')
    }

    const handleViewDetails = (rider) => {
        setSelectedRider(rider);
        setIsModalOpen(true);
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
                            <th>Application Status</th>
                            <th>Work Status</th>
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
                                    <p className={`${rider.status === "Approved" ? "text-green-800" : "text-red-500"}`}>{rider.status}</p>
                                </td>
                                <td>{rider.workStatus}</td>
                                
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
                                    <button onClick={() => handleViewDetails(rider)} className="btn">
                                        <FaEye />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>{" "}
            {/* Modal */}
            {isModalOpen && selectedRider && (
                <div className="fixed inset-0  bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded shadow-lg w-96">
                        <h2 className="text-xl font-bold mb-4">Rider Details</h2>
                        <p>
                            <strong>Id:</strong> {selectedRider._id}
                        </p>
                        <p>
                            <strong>Name:</strong> {selectedRider.riderName}
                        </p>
                        <p>
                            <strong>Email:</strong> {selectedRider.riderEmail}
                        </p>
                        <p>
                            <strong>District:</strong> {selectedRider.riderDistrict}
                        </p>
                        <p>
                            <strong>Region:</strong> {selectedRider.riderRegion}
                        </p>
                        <p>
                            <strong>Licence Number:</strong> {selectedRider.licenseNumber}
                        </p>
                        <p>
                            <strong>NID Number:</strong> {selectedRider.nidNumber}
                        </p>
                        <p>
                            <strong>Bike Model:</strong> {selectedRider.bikeModel}
                        </p>
                        <p>
                            <strong>Register Number:</strong> {selectedRider.regNumber}
                        </p>
                        <p>
                            <strong>Rider Description:</strong> {selectedRider.riderDescription}
                        </p>
                        <p>
                            <strong>Status:</strong> {selectedRider.status}
                        </p>
                        <div className="mt-4 flex justify-end">
                            <button onClick={() => setIsModalOpen(false)} className="btn btn-error">
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AproveRiders;
