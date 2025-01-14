import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MarathonSection = () => {
    const [marathonData, SetMarathonData] = useState([]);  // Default to empty array

    useEffect(() => {
        fetch('http://localhost:3000/AddMarathon/limit')
            .then(res => res.json())
            .then(data => {
                SetMarathonData(data);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }, []);

    return (
        <>
            <div>
            <h1 className="text-red-500 text-center my-5 font-bold text-4xl">
                  Marathon
                </h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"> {/* Specified gap */}
            {
                marathonData.length > 0 ? (
                    marathonData.map((data) => (
                        <div key={data._id} className="shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                           
                            <div className="relative overflow-hidden group">
                                <img
                                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                                    src={data.marathonImage}
                                    alt="Marathon"
                                />
                                {/* Event Date Badge */}
                                <div className="absolute top-4 left-4 bg-green-500 text-white text-sm font-bold px-2 py-2 rounded">
                                    Event: {`${new Date(data.marathonStartDate).toDateString()}`}
                                </div>
                            </div>

                            {/* Event Details Section */}
                            <div className="p-4">
                                <div className="flex justify-between items-center mb-2">
                                    {/* You can add some event stats or icons here */}
                                    <span className="text-purple-500 text-sm font-medium"></span>
                                    <span className="text-gray-500 text-xs">Comments</span>
                                </div>

                                {/* Event Location */}
                                <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                                    Location: {data.location}
                                </h3>

                                {/* Event Name */}
                                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                                   {data.marathonTitle}
                                </h3>

                                {/* Registration Start */}
                                <h3 className="text-sm font-semibold text-gray-800 mb-3">
                                    Registration Start:  {`${new Date(data.startRegistrationDate).toLocaleDateString()}`}
                                </h3>

                                {/* Event Description */}
                                <p className="text-gray-600 text-sm line-clamp-3">
                                   {data.description}
                                </p>

                                {/* See Details Button */}
                                <Link to={`/marathon/${data._id}`} >
                                    <button className="mt-4 btn btn-warning text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors duration-300">
                                        See Details
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))
                ) : (
                    <div>Loading...</div> 
                )
            }
        </div>
        </>
      
    );
};

export default MarathonSection;
