import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MarathonSection = () => {
  const [marathonData, SetMarathonData] = useState([]); // Default to empty array

  useEffect(() => {
    fetch(
      "https://marathon-management-system-assignment-11.vercel.app/AddMarathon/limit"
    )
      .then((res) => res.json())
      .then((data) => {
        SetMarathonData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <div>
        <h1 className="text-black text-3xl md:text-4xl text-center my-8 md:my-20 font-bold ">
          Marathon
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {" "}
        {/* Specified gap */}
        {marathonData.length > 0 ? (
          marathonData.map((data) => (
            <div
              key={data._id}
              className="shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative overflow-hidden group">
                <img
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  src={data.marathonImage}
                  alt="Marathon"
                />
                {/* Event Date Badge */}
                <div className="absolute top-4 left-4 text-red-400  text-sm font-bold px-2 py-2 rounded">
                  {`${new Date(data.marathonStartDate).toDateString()}`}
                </div>
              </div>

              {/* Event Details Section */}
              <div className="p-4">
                {/* Event Name */}
                <h3 className="text-2xl font-semibold  mb-2">
                  {data.marathonTitle}
                </h3>

                {/* Event Location */}
                <h3 className="text-base">
                  <span className="text-lg  font-medium">Location : </span>{" "}
                  {data.location}
                </h3>

                {/* Registration Start */}
                <h3 className="text-base ">
                 
                  <span className="text-lg  font-medium">Registration Start: </span>{" "}
                  {`${new Date(
                    data.startRegistrationDate
                  ).toLocaleDateString()}`}
                </h3>

                {/* Event Description */}
                <p className=" text-base line-clamp-3">
                <span className="text-lg  font-medium">Description : </span>{" "}
                  {data.description}
                </p>

                {/* See Details Button */}
                <Link to={`/marathon/${data._id}`}>
                  <button className="mt-4 btn bg-[#96fbc4] text-black font-medium px-4 py-2 rounded-lg  transition-colors duration-300">
                    See Details
                  </button>
                </Link>
              </div>
            </div>
          ))
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </>
  );
};

export default MarathonSection;
