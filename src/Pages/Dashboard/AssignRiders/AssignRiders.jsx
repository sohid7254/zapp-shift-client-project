import { useQuery } from '@tanstack/react-query';
import React, { useRef, useState } from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

import Swal from 'sweetalert2';

const AssignRiders = () => {
    const [selectedParcel, setSelectedParcel] = useState(null)
    const axiosSecure = useAxiosSecure();
    const riderModalRef = useRef()
    const { data: parcels = [], refetch: parcelsRefetch } = useQuery({
        queryKey: ["parcels", "pending-pickup"],
        queryFn: async () => {
            const res = await axiosSecure.get("/parcels?deliveryStatus=pending-pickup");
            return res.data;
        },
    });
    // todo invalided query when assigned a rider
    const {data: riders = []} = useQuery({
        queryKey: ['riders', selectedParcel?.senderDistrict,'available'],
        enabled: !!selectedParcel,
        queryFn: async () => {
            const res = await axiosSecure.get(`/riders?status=Approved&riderDistrict=${selectedParcel?.senderDistrict}&workStatus=available`);
            return res.data
        }
    })

    const openAssignRiderModal = (parcel) => {
        setSelectedParcel(parcel);
        console.log(parcel.senderDistrict)
        riderModalRef.current.showModal();
        
    }
 
    const handleAssignRider = (rider) => {
        const riderInfo = {
            riderId: rider._id,
            riderName: rider.riderName,
            riderEmail: rider.riderEmail,
            parcelId: selectedParcel._id
        };

        axiosSecure.patch(`/parcels/${selectedParcel._id}`, riderInfo)
          .then(res => {
            if (res.data.modifiedCount) {
                riderModalRef.current.close();
                parcelsRefetch();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `Rider Assigned Successfully.`,
                    showConfirmButton: false,
                    timer: 2500,
                });
            }
          })
    }

    return (
        <div>
            <h2 className="text-5xl">Assign Riders: {parcels.length}</h2>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Sender Email</th>
                            <th>Tracking ID</th>
                            <th>Cost</th>
                            <th>Pickup District</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {parcels.map((parcel, index) => (
                            <tr key={parcel._id}>
                                <th>{index + 1}</th>
                                <td>{parcel.parcelName}</td>
                                <td>{parcel.senderEmail}</td>
                                <td> {parcel.trackingId} </td>
                                <td> {parcel.cost} </td>
                                <td> {parcel.senderDistrict} </td>
                                <td>
                                    <button onClick={() => openAssignRiderModal(parcel)} className="btn btn-primary btn-sm text-black">
                                        Find Riders
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {/* modal */}
            {/* Open the modal using document.getElementById('ID').showModal() method */}

            <dialog ref={riderModalRef} className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{riders.length}</h3>
                    <div className="overflow-x-auto">
                        <table className="table table-zebra">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Job</th>
                                    <th>Favorite Color</th>
                                </tr>
                            </thead>
                            <tbody>
                                {riders.map((rider, index) => (
                                    <tr key={rider._id}>
                                        <th> {index + 1} </th>
                                        <td>{rider.riderName}</td>
                                        <td>{rider.riderEmail}</td>
                                        <td>
                                            <button onClick={() => handleAssignRider(rider)} className="btn btn-primary text-black">Assign</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default AssignRiders;