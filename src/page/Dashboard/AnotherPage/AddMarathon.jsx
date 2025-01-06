import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AddMarathon = () => {
  const [formData, setFormData] = useState({
    marathonTitle: "",
    startRegistrationDate: new Date(),
    endRegistrationDate: new Date(),
    marathonStartDate: new Date(),
    location: "",
    runningDistance: "25k", // default value
    description: "",
    marathonImage: null,
    totalRegistrationCount: 0,
    createdAt: new Date(),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDateChange = (date, name) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: date,
    }));
  };

  const handleImageChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      marathonImage: e.target.files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add the logic to save the form data to the server or handle the data here.
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-gradient-to-r  bg-emerald-300 shadow-lg rounded-lg">
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold">Marathon Title</label>
        <input
          type="text"
          name="marathonTitle"
          value={formData.marathonTitle}
          onChange={handleChange}
          className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-semibold">Start Registration Date</label>
        <DatePicker
          selected={formData.startRegistrationDate}
          onChange={(date) => handleDateChange(date, "startRegistrationDate")}
          className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-semibold">End Registration Date</label>
        <DatePicker
          selected={formData.endRegistrationDate}
          onChange={(date) => handleDateChange(date, "endRegistrationDate")}
          className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-semibold">Marathon Start Date</label>
        <DatePicker
          selected={formData.marathonStartDate}
          onChange={(date) => handleDateChange(date, "marathonStartDate")}
          className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-semibold">Location</label>
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-semibold">Running Distance</label>
        <select
          name="runningDistance"
          value={formData.runningDistance}
          onChange={handleChange}
          className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        >
          <option value="25k">25k</option>
          <option value="10k">10k</option>
          <option value="3k">3k</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-semibold">Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        ></textarea>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-semibold">Marathon Image</label>
        <input
          type="file"
          name="marathonImage"
          onChange={handleImageChange}
          className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-semibold">Total Registration Count</label>
        <input
          type="number"
          name="totalRegistrationCount"
          value={formData.totalRegistrationCount}
          disabled
          className="w-full p-2 mt-2 border border-gray-300 rounded-md bg-gray-100"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-semibold">Created At</label>
        <input
          type="text"
          name="createdAt"
          value={formData.createdAt.toString()}
          disabled
          className="w-full p-2 mt-2 border border-gray-300 rounded-md bg-gray-100"
        />
      </div>

      <button
        type="submit"
        className="w-full p-3 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition duration-300"
      >
        Submit
      </button>
    </form>
  );
};

export default AddMarathon;
