import React, { useState } from "react";

const Pricing = () => {
    const [parcelType, setParcelType] = useState("")
    const [destination, setDestination] = useState("")
    const [weight, setWeight] = useState("")
    const [cost, setCost] = useState(null)

    const calculateCost = () => {
        let basePrice = 0;

        if(destination === "Inside Dhaka"){
            basePrice = 60;
        } else if ( destination === "Outside Dhaka"){
            if(parcelType === "Document"){
                basePrice = 100;
            } else if (parcelType === "Box"){
                basePrice = 120;
            } else if(parcelType === "Fabrics"){
                basePrice = 100;
            }
        }

        let total = basePrice;


        if(weight > 1){
            total += (weight - 1) * 10;
        }

        setCost(total)
    }
    const resetForm = () => {
        setWeight("");
        setParcelType("");
        setDestination("");
        setCost(null)
    }
    return (
        <div className="bg-base-100 w-full  my-5 rounded-xl px-20 py-15">
            <h2 className="md:text-4xl text-xl font-bold text-secondary">Pricing Calculator</h2>
            <p className="text-sm mt-1 font-semibold text-gray-500">
                Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal <br /> packages to business shipments — we deliver on time, every time.
            </p>
            <div className="border border-gray-400 mt-8"></div>
            <h2 className="text-center text-2xl text-secondary font-bold mt-10">Calculate Your Cost</h2>
            <div className="grid grid-cols-2 justify-between text-center">
                <div className="w-100 text-start cols-span-1">
                    <div className="">
                        <label className="text-lg font-bold">Parcel Type :</label>
                        <select value={parcelType} onChange={(e) => setParcelType(e.target.value)} id="" className="mb-3 w-full p-2 border rounded">
                            <option value="">Select Your Parcel</option>
                            <option value="Box">Box</option>
                            <option value="Fabrics">Fabrics</option>
                            <option value="Document">Document</option>
                        </select>
                    </div>
                    <div>
                        <label className="text-lg font-bold">Destination Type :</label>
                        <select value={destination} onChange={(e) => setDestination(e.target.value)} name="" id="" className="mb-3 w-full p-2 border rounded">
                            <option value="">Select Destination</option>
                            <option value="Inside Dhaka">Inside Dhaka</option>
                            <option value="Outside Dhaka">Outside Dhaka</option>
                        </select>
                    </div>
                    <label className="text-lg font-bold">Weight (KG)</label>
                    <input type="number" onChange={(e) => setWeight(Number(e.target.value))} placeholder="Weight (KG)" className="mb-3 w-full p-2 border rounded" />

                    <div className="flex justify-between items-center">
                        <button onClick={resetForm} className="btn border border-primary text-secondary font-bold">
                            Reset
                        </button>
                        <button onClick={calculateCost} className="btn bg-primary border border-black w-70">
                            Calculate
                        </button>
                    </div>
                </div>
                <div className="col-span-1 flex justify-center items-center">
                    <p className="text-5xl font-bold">{cost !== null ? `${cost} Tk` : "Cost"}</p>
                </div>
            </div>
        </div>
    );
};

export default Pricing;
