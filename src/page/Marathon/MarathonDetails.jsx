import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const MarathonDetails = () => {
  const { id } = useParams(); 
  const [marathon, setMarathon] = useState(null); 
  const [timeRemaining, setTimeRemaining] = useState(""); 


  useEffect(() => {
    axios
      .get(`https://marathon-management-system-assignment-11.vercel.app/AddMarathon/${id}`)
      .then((res) => {
        setMarathon(res.data); 
      })
      .catch((error) => {
        console.log(error); 
        toast.error("Failed to fetch marathon details");
      });
  }, [id]);


  useEffect(() => {
    if (!marathon) return; 

    const countdownInterval = setInterval(() => {
      const now = new Date().getTime();
      const marathonStartDate = new Date(marathon.marathonStartDate).getTime();
      const distance = marathonStartDate - now;

      if (distance <= 0) {
        clearInterval(countdownInterval);
        setTimeRemaining("0d 0h 0m 0s"); 
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeRemaining(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      }
    }, 1000);

    
    return () => clearInterval(countdownInterval);
  }, [marathon]);

  if (!marathon) {
    return <div>Loading...</div>; 
  }

  return (
    <div className="max-w-3xl mx-auto p-6 shadow-3xl">
      <div className="p-2">
        <img
          className="w-full rounded-md h-52 md:h-72"
          src={marathon.marathonImage}
          alt="Marathon"
        />
      </div>
      <h1 className="text-2xl font-bold my-3 mx-2">{marathon.marathonTitle}</h1>
      <div className="flex flex-col lg:flex-row md:gap-5 px-2 justify-between">
        <div>
          <span className="flex gap-2 text-base items-center">
            <h1 className="text-purple-500 font-bold text-lg">Location: </h1>
            <span>{marathon.location}</span>
          </span>
          <span className="flex gap-2 text-base items-center">
            <h1 className="text-purple-500 font-bold text-lg">Running Distance: </h1>
            <span>{marathon.runningDistance}</span>
          </span>
          <span className="flex gap-2 text-base items-center">
            <h1 className="text-purple-500 font-bold text-lg">Start Registration Date: </h1>
            <span>{new Date(marathon.startRegistrationDate).toLocaleDateString()}</span>
          </span>
          <span className="flex gap-2 text-base items-center">
            <h1 className="text-purple-500 font-bold text-lg">End Registration Date: </h1>
            <span>{new Date(marathon.endRegistrationDate).toLocaleDateString()}</span>
          </span>
        </div>
        <div>
          <span className="flex gap-2 text-base items-center">
            <h1 className="text-purple-500 font-bold text-lg">Marathon Start Date: </h1>
            <span>{new Date(marathon.marathonStartDate).toLocaleDateString()}</span>
          </span>
          <span className="flex gap-2 text-base items-center">
            <h1 className="text-purple-500 font-bold text-lg">Created At: </h1>
            <span>{new Date(marathon.createdAt).toDateString()}</span>
          </span>
          <span className="flex gap-2 text-base items-center">
            <h1 className="text-purple-500 font-bold">Total Registration Count: </h1>
            <span>{marathon.totalRegistrationCount}</span>
          </span>
        </div>
      </div>
      <h1 className="text-center mt-10 text-red-600 font-bold text-2xl">Countdown to Marathon</h1>
      <div className="my-5 flex justify-center">
        <div className="relative rounded-full w-40 h-40 border-8 border-transparent flex items-center justify-center animate-spin-green">
          <span className="text-xl font-bold">{timeRemaining}</span>
        </div>
      </div>
      <div className="my-5">
        <span className="flex gap-2 text-base items-center">
          <h1 className="text-purple-500 font-bold text-lg">Description: </h1>
          <span>{marathon.description}</span>
        </span>
      </div>
      <Link to={`/marathon/reg/${marathon._id}`}>
        <button className="btn bg-red-500 w-full text-white">Register Now</button>
      </Link>
    </div>
  );
};

export default MarathonDetails;
