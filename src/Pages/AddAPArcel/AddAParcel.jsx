import React from "react";
import { useForm, useWatch } from "react-hook-form";
import { useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";

const AddAParcel = () => {
    const {
        register,
        handleSubmit,
        control,
        // formState: { errors }
    } = useForm();

    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate()
    const serviceArea = useLoaderData();
    const regionsDuplocate = serviceArea.map((c) => c.region);
    const regions = [...new Set(regionsDuplocate)];

    const senderRegion = useWatch({ control, name: "senderRegion" });
    const receiverRegion = useWatch({ control, name: "receiverRegion" });

    const districsByRegion = (region) => {
        const regionDistrics = serviceArea.filter((c) => c.region === region);
        const districts = regionDistrics.map((d) => d.district);
        return districts;
    };

    const handleSendPArcel = (data) => {
        const isDocument = data.parcelType === "document";
        const isSameDistrict = data.senderDistrict === data.receiverDistrict;
        const parcelWeight = parseFloat(data.parcelWeight);
        let cost = 0;
        if (isDocument) {
            cost = isSameDistrict ? 60 : 80;
        } else {
            if (parcelWeight < 3) {
                cost = isSameDistrict ? 110 : 150;
            } else {
                const minCharge = isSameDistrict ? 110 : 150;
                const extraWeight = parcelWeight - 3;
                const extraCharge = isSameDistrict ? extraWeight * 40 : extraWeight * 40 + 40;

                cost = minCharge + extraCharge;
            }
        }
        console.log("cost", cost);
        data.cost = cost;
        Swal.fire({
            title: "Agree with the Cost...",
            text: `You will be cost ${cost} Taka`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, I Agree!",
        }).then((result) => {
            if (result.isConfirmed) {
                // save parcel to the DB
                axiosSecure.post("/parcels", data).then((res) => {
                    console.log("after saving parcel", res.data);
                    if (res.data.insertedId) {
                        navigate('/dashboard/my-parcels')
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Parcel has created, Please Pay",
                            showCancelButton: false,
                            timer: 2500
                        });
                    }
                });
            }
        });
    };
    return (
        <div className="bg-base-100 rounded-xl px-15 py-10 my-10">
            <h2 className="md:text-4xl text-xl font-bold">Send A Parcel</h2>
            <div className="border border-gray-200 my-5"> </div>
            <p className="text-xl font-semibold">Enter Your Parcel Details</p>
            <form onSubmit={handleSubmit(handleSendPArcel)} className="mt-6">
                {/* parcelType */}
                <div className="">
                    <label className="label mr-5">
                        <input type="radio" {...register("parcelType")} value="document" className="radio" defaultChecked />
                        Document
                    </label>
                    <label className="label">
                        <input type="radio" {...register("parcelType")} value="non-document" className="radio" />
                        Non-Document
                    </label>
                </div>

                {/* parcel name and weight */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ">
                    <fieldset className="fieldset">
                        <label className="label text-lg font-bold text-black">Parcel Name: </label>
                        <input type="text" {...register("parcelName")} className="input w-full" placeholder="Parcel Name" />
                    </fieldset>
                    <fieldset className="fieldset">
                        <label className="label text-lg font-bold text-black">Parcel Weight (KG) </label>
                        <input type="Number" {...register("parcelWeight")} className="input w-full" placeholder="Parcel Name" />
                    </fieldset>
                </div>

                <div className="border border-gray-200 my-5"> </div>

                {/* 2 column sender and receiver details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* sender details */}
                    <div>
                        <h2 className="text-xl font-bold">Sender Details</h2>
                        <fieldset className="fieldset">
                            {/* Name */}
                            <label className="label text-sm font-semibold text-black">Sender Name: </label>
                            <input type="text" {...register("senderName")} defaultValue={user?.displayName} className="input w-full" placeholder="Your Name" />

                            {/* sender email */}
                            <label className="label text-sm font-semibold text-black">Sender Email: </label>
                            <input type="text" {...register("senderEmail")} className="input w-full" placeholder="Your Email" defaultValue={user?.email} />

                            {/* sender region */}

                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Sender Region</legend>
                                <select {...register("senderRegion")} defaultValue="Pick a Region" className="select w-full">
                                    <option disabled={true}>Pick a Region</option>
                                    {regions.map((r, i) => (
                                        <option key={i} value={r}>
                                            {r}
                                        </option>
                                    ))}
                                </select>
                            </fieldset>

                            {/* sender district */}
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Sender Districts</legend>
                                <select {...register("senderDistrict")} defaultValue="Pick a district" className="select w-full">
                                    <option disabled={true}>Pick a District</option>
                                    {districsByRegion(senderRegion).map((d, i) => (
                                        <option value={d} key={i}>
                                            {d}
                                        </option>
                                    ))}
                                </select>
                            </fieldset>

                            {/* Address */}
                            <label className="label text-sm font-semibold text-black">Sender Address: </label>
                            <input type="text" {...register("senderAddress")} className="input w-full" placeholder="Your Address" />

                            {/* Number */}
                            <label className="label text-sm font-semibold text-black">Sender Contact Number: </label>
                            <input type="number" {...register("senderNumber")} className="input w-full" placeholder="Your Contact Number" />

                            {/* Packing Instruction */}
                            <label className="label text-sm font-semibold text-black">Packup Instruction</label>
                            <textarea type="text-area" {...register("packupInstruction")} className="textarea w-full" placeholder="Instructions" />
                        </fieldset>
                    </div>

                    {/* receiver details */}
                    <div>
                        <h2 className="text-xl font-bold">Receiver Details</h2>
                        <fieldset className="fieldset">
                            {/* Name */}

                            <label className="label text-sm font-semibold text-black">Receiver Name: </label>
                            <input type="text" {...register("receiverName")} className="input w-full" placeholder="Receiver Name" />

                            {/* receiver email */}
                            <label className="label text-sm font-semibold text-black">Receiver Email: </label>
                            <input type="text" {...register("receiverEmail")} className="input w-full" placeholder="Receiver Email" />

                            {/* region */}
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Receiver Region</legend>
                                <select {...register("receiverRegion")} defaultValue="Pick a Region" className="select w-full">
                                    <option disabled={true}>Pick a Region</option>
                                    {regions.map((r, i) => (
                                        <option key={i} value={r}>
                                            {r}
                                        </option>
                                    ))}
                                </select>
                            </fieldset>

                            {/* sender district */}
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Receiver Districts</legend>
                                <select {...register("receiverDistrict")} defaultValue="Pick a district" className="select w-full">
                                    <option disabled={true}>Pick a District</option>
                                    {districsByRegion(receiverRegion).map((d, i) => (
                                        <option key={i} value={d}>
                                            {d}
                                        </option>
                                    ))}
                                </select>
                            </fieldset>

                            {/* Address */}
                            <label className="label text-sm font-semibold text-black">Receivers Address: </label>
                            <input type="text" {...register("receiverAddress")} className="input w-full" placeholder="Receiver Address" />

                            {/* Number */}
                            <label className="label text-sm font-semibold text-black">Receiver Contact Number: </label>
                            <input type="number" {...register("receiverNumber")} className="input w-full" placeholder="Receiver Contact Number" />

                            {/* Packing Instruction */}
                            <label className="label text-sm font-semibold text-black">Delivery Instruction</label>
                            <textarea type="text-area" {...register("deliveryInstruction")} className="textarea w-full" placeholder="Instruction" />
                        </fieldset>
                    </div>
                </div>

                {/* button */}
                <div className="mt-5">
                    <input type="submit" value="Proceed to Confirm Booking" className="btn btn-primary text-black" />
                </div>
            </form>
        </div>
    );
};

export default AddAParcel;
