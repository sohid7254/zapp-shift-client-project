import React from "react";
import { useForm, useWatch } from "react-hook-form";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useLoaderData } from "react-router";
import rider from "../../assets/agent-pending.png";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";

const BeARider = () => {
    const {user} = useAuth()
    const { register, handleSubmit, control } = useForm();
    const axiosSecure = useAxiosSecure();
    
    const serviceArea = useLoaderData();

    const regionsDuplocate = serviceArea.map((c) => c.region);
    const regions = [...new Set(regionsDuplocate)];
    const riderRegion = useWatch({ control, name: "riderRegion" });

    const districsByRegion = (region) => {
        const regionDistrics = serviceArea.filter((c) => c.region === region);
        const districts = regionDistrics.map((d) => d.district);
        return districts;
    };

    const handleRider = (data) => {
        console.log(data);
        axiosSecure
            .post("/riders", data)
            .then((res) => {
                console.log(res.data);
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Application submitted successfully!",
                        showConfirmButton: false,
                        timer: 2500,
                    });
                }
            })
            .catch((err) => {
                console.error("Submission failed:", err.message);
                Swal.fire({
                    icon: "error",
                    title: "Submission Failed",
                    text: "Could not connect to server. Please try again later.",
                });
            });
    };

    return (
        <div className="bg-base-100 rounded-xl px-6 md:px-20 py-10 my-10">
            {/* Header */}
            <div className="space-y-2 text-center md:text-left">
                <h1 className="text-3xl md:text-5xl font-bold">Be a Rider</h1>
                <p className="max-w-2xl mx-auto md:mx-0 text-gray-400 text-sm md:text-base">Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.</p>
            </div>

            <div className="border border-gray-200 my-5" />

            {/* Two-column layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Left side: Form */}
                <div>
                    <p className="text-lg md:text-xl font-semibold mb-5">Enter Your Parcel Details</p>
                    <form onSubmit={handleSubmit(handleRider)}>
                        <fieldset className="fieldset">
                            <label className="label text-sm font-semibold text-black">Your Name:</label>
                            <input type="text" {...register("riderName")} defaultValue={user?.displayName} className="input w-full" placeholder="Your Name" />

                            <label className="label text-sm font-semibold text-black">Driving License Number:</label>
                            <input type="text" {...register("licenseNumber")} className="input w-full" placeholder="Driving License Number" />

                            <label className="label text-sm font-semibold text-black">Your Email:</label>
                            <input type="text" {...register("riderEmail")} defaultValue={user?.email} className="input w-full" placeholder="Your Email" />

                            <fieldset className="fieldset">
                                <legend className="fieldset-legend text-sm font-semibold">Your Region:</legend>
                                <select {...register("riderRegion")} defaultValue="Select Your Region" className="select w-full">
                                    <option disabled>Select Your Region</option>
                                    {regions.map((r, i) => (
                                        <option key={i} value={r}>
                                            {r}
                                        </option>
                                    ))}
                                </select>
                            </fieldset>

                            <fieldset className="fieldset">
                                <legend className="fieldset-legend text-sm font-semibold">Your District:</legend>
                                <select {...register("riderDistrict")} defaultValue="Select Your District" className="select w-full">
                                    <option disabled>Select Your District</option>
                                    {districsByRegion(riderRegion).map((d, i) => (
                                        <option key={i} value={d}>
                                            {d}
                                        </option>
                                    ))}
                                </select>
                            </fieldset>

                            <label className="label text-sm font-semibold text-black">NID Number:</label>
                            <input type="number" {...register("nidNumber")} className="input w-full" placeholder="Your NID Number" />

                            <label className="label text-sm font-semibold text-black">Phone Number:</label>
                            <input type="number" {...register("phoneNumber")} className="input w-full" placeholder="Your Contact Number" />

                            <label className="label text-sm font-semibold text-black">Bike Model And Year:</label>
                            <input type="text" {...register("bikeModel")} className="input w-full" placeholder="Bike Description" />

                            <label className="label text-sm font-semibold text-black">Bike Registration Number:</label>
                            <input type="number" {...register("regNumber")} className="input w-full" placeholder="Bike Registration Number" />

                            <label className="label text-sm font-semibold text-black">Tell us Yourself:</label>
                            <textarea {...register("riderDescription")} className="textarea w-full" placeholder="Tell Us Yourself" />
                        </fieldset>

                        <div className="mt-5">
                            <input type="submit" value="Submit" className="btn btn-primary text-black w-full" />
                        </div>
                    </form>
                </div>

                {/* Right side: Image */}
                <div className="flex items-center justify-center">
                    <img src={rider} alt="Delivery Rider" className="w-full max-w-sm md:max-w-md object-contain" />
                </div>
            </div>
        </div>
    );
};

export default BeARider;
