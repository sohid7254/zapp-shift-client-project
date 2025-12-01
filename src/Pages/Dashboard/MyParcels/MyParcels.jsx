import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { MdDeleteOutline } from "react-icons/md";
import { RiFileEditFill } from "react-icons/ri";
import Swal from "sweetalert2";
import { Link } from "react-router";


const MyParcels = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const { data: parcels = [], refetch } = useQuery({
        queryKey: ["myParcels", user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/parcels?email=${user.email}`);
            return res.data;
        },
    });

const handlePayment =async (parcel) => {
    const paymentInfo = {
        cost: parcel.cost,
        parcelId: parcel._id,
        senderEmail:parcel.senderEmail,
        parcelName: parcel.parcelName
    }
    const res = await axiosSecure.post('/payment-checkout-session', paymentInfo)

    console.log(res.data.url);
    window.location.assign(res.data.url);
};

    const handleParcelDetele = (id) => {
        console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/parcels/${id}`).then((res) => {
                    
                    if (res.data.deletedCount) {
                        refetch()

                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success",
                        });
                    }
                });
            }
        });
    };

    return (
        <div className="overflow-x-auto bg-base-100">
            <h2>My Parcel Are here: {parcels.length}</h2>
            <table className="table table-zebra">
                {/* head */}
                <thead>
                    <tr>
                        <th>SL No.</th>
                        <th>Name</th>
                        <th>Cost</th>

                        <th>Payement</th>
                        <th>Delivery Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {parcels.map((parcel, index) => (
                        <tr key={parcel._id}>
                            <th>{index + 1}</th>
                            <td>{parcel.parcelName}</td>
                            <td> {parcel.cost} </td>
                            <td>
                                {parcel.paymentStatus === "paid" ? (
                                    <p className="bg-primary w-15 text-center rounded-xl">Paid</p>
                                ) : (
                                    <button onClick={() => handlePayment(parcel)} className="btn btn-sm btn-primary text-black">
                                        {" "}
                                        Pay
                                    </button>
                                )}
                            </td>
                            <td>{parcel.deliveryStatus}</td>
                            <td>
                                <button className="btn btn-square hover:bg-primary text-secondary">
                                    <FaMagnifyingGlass />
                                </button>
                                <button onClick={() => handleParcelDetele(parcel._id)} className="btn btn-square hover:bg-primary text-secondary mx-2">
                                    <MdDeleteOutline />
                                </button>
                                <button className="btn btn-square hover:bg-primary text-secondary">
                                    <RiFileEditFill />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MyParcels;
