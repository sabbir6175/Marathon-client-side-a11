import React, { useState, useEffect } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const MarathonDetails = () => {
  const { id } = useParams();
  const marathon = useLoaderData();

  // Countdown logic
  const [timeRemaining, setTimeRemaining] = useState("");

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      const now = new Date().getTime();
      const marathonStartDate = new Date(marathon.marathonStartDate).getTime();
      const distance = marathonStartDate - now;

      if (distance <= 0) {
        clearInterval(countdownInterval);
        setTimeRemaining("0d 0h 0m 0s"); // Show 0d 0h 0m 0s if marathon has started
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeRemaining(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      }
    }, 1000);

    // Cleanup on component unmount
    return () => clearInterval(countdownInterval);
  }, [marathon.marathonStartDate]);

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
            <h1 className="text-purple-500 font-bold text-lg">location : </h1>
            <span>{marathon.location}</span>
          </span>
          <span className="flex gap-2 text-base items-center">
            <h1 className="text-purple-500 font-bold text-lg">RunningDistance : </h1>
            <span>{marathon.runningDistance}</span>
          </span>
          <span className="flex gap-2 text-base items-center">
            <h1 className="text-purple-500 font-bold text-lg">StartRegistrationDate : </h1>
            <span>{`${new Date(marathon.startRegistrationDate).toLocaleDateString()}`}</span>
          </span>
          <span className="flex gap-2 text-base items-center">
            <h1 className="text-purple-500 font-bold text-lg">EndRegistrationDate : </h1>
            <span>{`${new Date(marathon.endRegistrationDate).toLocaleDateString()}`}</span>
          </span>
        </div>
        <div>
          <span className="flex gap-2 text-base items-center">
            <h1 className="text-purple-500 font-bold text-lg">MarathonStartDate : </h1>
            <span>{`${new Date(marathon.marathonStartDate).toLocaleDateString()}`}</span>
          </span>
          <span className="flex gap-2 text-base items-center">
            <h1 className="text-purple-500 font-bold text-lg">CreatedAt : </h1>
            <span>{`${new Date(marathon.createdAt).toDateString()}`}</span>
          </span>
          <span className="flex gap-2 text-base items-center">
            <h1 className="text-purple-500 font-bold">TotalRegistrationCount : </h1>
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
          <h1 className="text-purple-500 font-bold text-lg">Description : </h1>
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





// import React, { useState, useEffect } from 'react';
// import { Helmet } from 'react-helmet';
// import { Link, useLoaderData, useNavigate } from 'react-router-dom';

// const Details = () => {
//     const marathon = useLoaderData();
//     const navigate = useNavigate();

//     const calculateTimeLeft = () => {
//         const startDate = new Date(marathon.marathonStartDate).getTime();
//         const now = new Date().getTime();
//         const difference = startDate - now;

//         if (difference > 0) {
//             return {
//                 days: Math.floor(difference / (1000 * 60 * 60 * 24)),
//                 hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
//                 minutes: Math.floor((difference / 1000 / 60) % 60),
//                 seconds: Math.floor((difference / 1000) % 60),
//             };
//         } else {
//             return { days: 0, hours: 0, minutes: 0, seconds: 0 };
//         }
//     };

//     const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

//     useEffect(() => {
//         const timer = setInterval(() => {
//             setTimeLeft(calculateTimeLeft());
//         }, 1000);

//         return () => clearInterval(timer);
//     }, []);

//     const handleRegister = () => {
//         navigate(/register/${marathon._id}, {
//             state: {
//                 email: "user@example.com",
//                 marathonTitle: marathon.marathonTitle,
//                 marathonStartDate: marathon.marathonStartDate,
//             },
//         });
//     };

//     const isOngoing =
//         new Date() >= new Date(marathon.registrationStartDate) &&
//         new Date() <= new Date(marathon.registrationEndDate);

//     const label = isOngoing ? 'Ongoing' : 'Upcoming';

//     return (
//         <div className="max-w-5xl mx-auto my-12 p-6 border rounded-lg shadow-lg bg-slate-300">

//             <Helmet>
//                 <title>Details/Champion Marathons</title>
//             </Helmet>

//             <div className="relative">
//                 <img
//                     src={marathon.marathonImageUrl}
//                     alt={marathon.marathonTitle}
//                     className="w-full h-64 object-cover rounded-lg"
//                 />
//                 <div
//                     className={`absolute top-2 left-2 py-1 px-3 rounded-lg text-sm font-bold ${isOngoing ? 'bg-blue-500' : 'bg-green-500'
//                         } text-white`}
//                 >
//                     {label}
//                 </div>
//             </div>

//             <div className="mt-8">
//                 <h1 className="text-4xl font-extrabold text-black text-center mb-4">
//                     {marathon.marathonTitle}
//                 </h1>
//                 <p className="text-center text-gray-700 text-lg">{marathon.description}</p>

//                 <div className="flex justify-center gap-4 mt-8">
//                     {["Days", "Hours", "Minutes", "Seconds"].map((unit, index) => {
//                         const time = [timeLeft.days, timeLeft.hours, timeLeft.minutes, timeLeft.seconds][index];
//                         return (
//                             <div
//                                 key={unit}
//                                 className="bg-gradient-to-br from-gray-100 to-gray-300 shadow-md rounded-full w-20 h-20 flex items-center justify-center flex-col"
//                             >
//                                 <p className="text-2xl font-bold text-gray-800">{String(time).padStart(2, '0')}</p>
//                                 <p className="text-sm text-gray-500">{unit}</p>
//                             </div>
//                         );
//                     })}
//                 </div>

//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
//                     <div>
//                         <p className="text-lg text-gray-600">
//                             <strong>Location:</strong> {marathon.location}
//                         </p>
//                         <p className="text-lg text-gray-600 mt-2">
//                             <strong>Distance:</strong> {marathon.runningDistance}
//                         </p>
//                     </div>
//                     <div className="md:text-end">

//                         <p className="text-lg text-gray-600 mt-2">
//                             <strong>Registration:</strong>{' '}
//                             {new Date(marathon.registrationStartDate).toLocaleDateString()} -{' '}
//                             {new Date(marathon.registrationEndDate).toLocaleDateString()}
//                         </p>
//                     </div>
//                 </div>

//                 <div className="mt-8 text-center">
//                     <p className="text-xl text-green-600">
//                         <strong>Total Registrations:</strong> {marathon?.totalRegistrationCount}
//                     </p>
//                 </div>

//                 <div className="mt-6 text-center">
//                     {isOngoing ? (
//                         <Link to={`/applyPage/${marathon?._id}`}>
//                             <button
//                                 onClick={handleRegister}
//                                 className="px-6 py-2 bg-gradient-to-r from-teal-500 to-gray-600 text-white rounded-lg transition"
//                             >
//                                 Register Now
//                             </button>
//                         </Link>
//                     ) : (
//                         <p className="text-red-500 font-semibold">
//                             Registration is not open yet.
//                         </p>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Details;

