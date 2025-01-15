import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Marathon = () => {
  const [marathons, setMarathons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortOrder, setSortOrder] = useState("newest"); // Default sort order is descending (newest first)

  useEffect(() => {
    // Fetch marathons from backend API with the sorting option
    axios.get(`http://localhost:3000/AddMarathon?sortOrder=${sortOrder}`, {withCredentials: true} )
      .then((response) => {
        setMarathons(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError("Failed to fetch marathons.");
        setLoading(false);
      });
  }, [sortOrder]); // Re-fetch data when sortOrder changes

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="p-4">
      {/* Sorting Dropdown */}
      <div className="mb-5 text-center">
        <h1 className="text-3xl font-bold mb-2 text-orange-400">All Marathon</h1>
        <label className="text-lg font-semibold ">Sort By </label>
        <br />
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="ml-2 p-2 mt-2 border-2 border-black rounded"
        >
          <option value="newest">Newest to Oldest</option>
          <option value="older">Oldest to Newest</option>
        </select>
      </div>

      {/* Marathon Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {marathons.map((marathon) => (
          <div
            key={marathon._id}
            className="card border-2 bg-base-100 shadow-xl p-5 "
          >
              <div className="relative overflow-hidden group">
                  <img
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      src={marathon.marathonImage}
                      alt="Marathon"
                  />
                  {/* Event Date Badge */}
                  <div className="absolute top-4 left-4 bg-green-500 text-white text-sm font-bold px-2 py-2 rounded">
                      Event: {`${new Date(marathon.marathonStartDate).toDateString()}`}
                  </div>
              </div>
            <div className="card-body">
              <h2 className="card-title text-xl font-bold">{marathon.marathonTitle}</h2>
              <p>Location : {marathon.location}</p>
              <p>
                {`Registration start: ${new Date(marathon.startRegistrationDate).toLocaleDateString()}`}
              </p>
              <p>{`Registration End: ${new Date(marathon.endRegistrationDate).toLocaleDateString()}`}</p>
              <div className="card-actions">
                <Link to={`/marathon/${marathon._id}`} className="btn text-red-500 btn-warning">
                  See Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marathon;
