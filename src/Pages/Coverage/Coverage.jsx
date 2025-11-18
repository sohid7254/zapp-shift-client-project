import { Search } from "lucide-react";
import React, { useRef } from "react";
import { MapContainer, Marker, Popup, TileLayer, Tooltip } from "react-leaflet";
import 'leaflet/dist/leaflet.css'
import { useLoaderData } from "react-router";
const Coverage = () => {
    const serviceArea = useLoaderData()
    const mapRef = useRef(null)
    const position = [23.8103, 90.4125];

    const handleSearch = (e) => {
        e.preventDefault()
        const location = e.target.location.value;
        const district = serviceArea.find(c => c.district.toLowerCase().includes(location.toLowerCase()))
        if(district) {
            const coord = [district.latitude, district.longitude]
            console.log(district, coord)
            // go to the location
            mapRef.current.flyTo(coord, 12)
        }
    }

    return (
        <div className="my-10 bg-base-100 px-10 rounded-xl  py-10">
            <h3 className="md:text-4xl text-xl font-bold">We are available in 64 districts</h3>

            <div className="flex items-center bg-[#F1F5F9] rounded-full overflow-hidden border border-gray-200 w-100 mt-8">
                <div className="flex items-center px-4 text-gray-500">
                    <Search size={18} />
                </div>
                <form onSubmit={handleSearch} className="flex justify-between">
                    <input name="location" type="text" placeholder="Search here" className="w-full py-3 px-2 bg-transparent focus:outline-none text-gray-700" />
                <button className="bg-[#D4F05A] text-black font-semibold px-8 py-3 rounded-full ml-8">Search</button>
                </form>
                
            </div>
            <div className="border text-gray-400 border-dashed w-11/12 mx-auto mt-10 "></div>
            {/* map position */}
            <div className="w-full h-[500px] mt-10">
                <MapContainer ref={mapRef} center={position} zoom={8} scrollWheelZoom={false} className="h-[500px] ">
                    <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

                    {serviceArea.map((service, index) => (
                        <Marker position={[service.latitude, service.longitude]} key={index}>
                            <Tooltip>
                                <strong>{service.district}</strong> <br /> Service Area: {service.covered_area.join(', ')}.
                            </Tooltip>
                        </Marker>
                    ))}
                </MapContainer>
            </div>
        </div>
    );
};

export default Coverage;
