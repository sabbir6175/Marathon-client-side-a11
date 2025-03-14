import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import AuthContext from "../../../Context/AuthContext/AuthContext";

const AddMarathon = () => {
  const { user } = useContext(AuthContext);
  const [marathonData, setMarathonData] = useState({
    marathonTitle: "",
    startRegistrationDate: new Date(),
    endRegistrationDate: new Date(),
    marathonStartDate: new Date(),
    location: "",
    runningDistance: "10k",
    description: "",
    marathonImage: "",
    email: user.email
  });

  const navigate = useNavigate();

  // Handle form data changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setMarathonData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDateChange = (date, fieldName) => {
    setMarathonData((prevData) => ({
      ...prevData,
      [fieldName]: date,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(marathonData);
    // Send the data to the backend to create a new marathon
    fetch("https://marathon-management-system-assignment-11.vercel.app/marathon", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(marathonData),
    })
      .then((res) => res.json())
      .then((data) => {
        setMarathonData(data);
        console.log(data);
        toast.success("Marathon created successfully!");
        navigate('/');
      });
  };

  return (
    <div className="p-5 lg:p-10 rounded-md">
      <div className="max-w-4xl  text-black rounded-md shadow-sm mx-auto md:p-6">
        <h1 className="text-center font-bold text-2xl md:text-3xl mb-5 text-black">Create Marathon Event</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block font-semibold mb-2">Marathon Title</label>
            <input
              type="text"
              name="marathonTitle"  // Change name here to match the state key
              value={marathonData.marathonTitle}
              onChange={handleChange}
              className="input input-bordered w-full"
              required
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-4">
            <div>
              <label className="block font-semibold mb-2">Start Registration Date</label>
              <DatePicker
                selected={marathonData.startRegistrationDate}
                onChange={(date) => handleDateChange(date, "startRegistrationDate")}
                className="input input-bordered w-full"
                dateFormat="yyyy-MM-dd"
              />
            </div>

            <div>
              <label className="block font-semibold mb-2">End Registration Date</label>
              <DatePicker
                selected={marathonData.endRegistrationDate}
                onChange={(date) => handleDateChange(date, "endRegistrationDate")}
                className="input input-bordered w-full"
                dateFormat="yyyy-MM-dd"
              />
            </div>

            <div>
              <label className="block font-semibold mb-2">Marathon Start Date</label>
              <DatePicker
                selected={marathonData.marathonStartDate}
                onChange={(date) => handleDateChange(date, "marathonStartDate")}
                className="input input-bordered w-full"
                dateFormat="yyyy-MM-dd"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block font-semibold mb-2">Location</label>
            <input
              type="text"
              name="location"
              value={marathonData.location}
              onChange={handleChange}
              className="input input-bordered w-full"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block font-semibold mb-2">Running Distance</label>
            <select
              name="runningDistance"
              value={marathonData.runningDistance}
              onChange={handleChange}
              className="select select-bordered w-full"
              required
            >
              <option value="25k">25k</option>
              <option value="10k">10k</option>
              <option value="3k">3k</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block font-semibold mb-2">Description</label>
            <textarea
              name="description"
              value={marathonData.description}
              onChange={handleChange}
              className="textarea textarea-bordered w-full"
              required
            ></textarea>
          </div>

          <div className="mb-4">
            <label className="block font-semibold mb-2">Marathon Image URL</label>
            <input
              type="text"
              name="marathonImage"
              value={marathonData.marathonImage}
              onChange={handleChange}
              className="input input-bordered w-full"
              required
            />
          </div>

          <button type="submit" className="btn bg-red-400 text-black w-full">
            Create Marathon
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddMarathon;

