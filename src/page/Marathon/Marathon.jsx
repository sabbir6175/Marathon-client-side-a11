import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Marathon = () => {
  const [marathons, setMarathons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch marathons from backend API
    axios
      .get('http://localhost:3000/AddMarathon')
      .then(response => {
        setMarathons(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError('Failed to fetch marathons.');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {marathons.map((marathon) => (
        <div key={marathon._id} className="card border-2 bg-base-100 shadow-xl p-5 transform transition-all duration-300 hover:text-white hover:scale-105 hover:shadow-2xl hover:bg-red-300 hover:translate-y-[-10px]">
          <figure>
            <img src={marathon.marathonImage} alt={marathon.marathonTitle} className="w-full h-48 object-cover transform transition-transform duration-300 hover:scale-105 hover:translate-y-[-10px]" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-xl font-bold">{marathon.marathonTitle}</h2>
            <p className="">Location: {marathon.location}</p>
            <p className="">
              {`Registration start: ${new Date(marathon.startRegistrationDate).toLocaleDateString()}`}
              
            </p>
            <p>{`Registration End: ${new Date(marathon.endRegistrationDate).toLocaleDateString()}`}</p>
            <div className="card-actions justify-end">
              <Link to={`/marathon/${marathon._id}`} className="btn btn-info">
                See Details
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Marathon;
