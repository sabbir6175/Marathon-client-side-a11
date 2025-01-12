import React, { useState, useEffect } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const MarathonDetails = () => {
  const { id } = useParams();
  const marathon = useLoaderData();

  //   const [marathon, setMarathon] = useState(null);

  //   console.log(marathon)
  //   useEffect(() => {
  //     // Fetch marathon details
  //     axios.get(`http://localhost:3000/AddMarathon/${id}`)
  //       .then(response => {
  //         setMarathon(response.data);
  //       })
  //       .catch(error => {
  //         console.error('Error fetching marathon details:', error);
  //         toast.error('Failed to load marathon details.');
  //       });
  //   }, [id]);

  //   {
  //     "_id": "677c1dfb00fa32250c957b02",
  //     "marathonTitle": "Sunset Run 2025",
  //     "startRegistrationDate": "2025-02-01",
  //     "endRegistrationDate": "2025-03-01",
  //     "marathonStartDate": "2025-06-10",
  //     "location": "California, USA",
  //     "runningDistance": "25k",
  //     "description": "A scenic race along the coastline at sunset.",
  //     "marathonImage": "https://i.ibb.co.com/FxG39dS/Sunset-Run.jpg",
  //     "totalRegistrationCount": 0,
  //     "createdAt": "2025-01-07"
  // }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div>
        <img src={marathon.marathonImage} alt="" />
      </div>
      <h1 className="text-2xl font-bold my-3">{marathon.marathonTitle}</h1>
      <div className="flex flex-col lg:flex-row md:gap-5">
        <div>
          <span className="flex gap-2 text-base items-center">
            <h1 className="text-purple-500 font-bold text-lg">location : </h1>
            <span> {marathon.location}</span>
          </span>
          <span className="flex gap-2 text-base items-center">
            <h1 className="text-purple-500 font-bold text-lg">
              RunningDistance :{" "}
            </h1>
            <span> {marathon.runningDistance}</span>
          </span>
          <span className="flex gap-2 text-base items-center">
            <h1 className="text-purple-500 font-bold text-lg">
              StartRegistrationDate :{" "}
            </h1>
            <span> {marathon.startRegistrationDate}</span>
          </span>
          <span className="flex gap-2 text-base items-center">
            <h1 className="text-purple-500 font-bold text-lg">
              EndRegistrationDate :{" "}
            </h1>
            <span> {marathon.endRegistrationDate}</span>
          </span>
        </div>
        <div>
          <span className="flex gap-2 text-base items-center">
            <h1 className="text-purple-500 font-bold text-lg">
              MarathonStartDate :{" "}
            </h1>
            <span> {marathon.marathonStartDate}</span>
          </span>
          <span className="flex gap-2 text-base items-center">
            <h1 className="text-purple-500 font-bold text-lg">CreatedAt : </h1>
            <span> {marathon.createdAt}</span>
          </span>
          <span className="flex gap-2 text-base items-center">
            <h1 className="text-purple-500 font-bold text-lg">
              TotalRegistrationCount :{" "}
            </h1>
            <span> {marathon.totalRegistrationCount}</span>
          </span>
        </div>
      </div>
        <h1 className="text-center  mt-10 text-red-600 font-bold text-2xl">Countdown to Marathon</h1>
      <div className="my-5 flex justify-center">
        <div className="relative rounded-full w-40 h-40 border-8 border-transparent flex items-center justify-center animate-spin-green">
          count down
        </div>
      </div>
      <div className="my-5">
            <span className="flex gap-2 text-base items-center">
                <h1 className="text-purple-500 font-bold text-lg">Description : </h1>
                <span> {marathon.description}</span>
            </span>
      </div>
        <Link to={`/marathon/reg/${marathon._id}`}>
             <button className="btn bg-red-500 w-full text-white">Register Now</button>
        </Link>
    </div>
  );
};

export default MarathonDetails;

