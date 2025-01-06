import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const AddMarathon = () => {
  const [title, setTitle] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [marathonDate, setMarathonDate] = useState(new Date());
  const [location, setLocation] = useState('');
  const [distance, setDistance] = useState('25k');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const marathonDetails = {
      title,
      startDate,
      endDate,
      marathonDate,
      location,
      distance,
      description,
      image,
      createdAt: new Date(), // Automatically set the creation date
      totalRegistrationCount: 0, // Initial registration count
    };

    // Simulate saving the marathon details (usually, you'd send this data to a backend)
    console.log(marathonDetails);

    // Show success message
    setMessage('Marathon event created successfully!');
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Create a Marathon Event</h2>
      {message && (
        <div className="mb-4 p-3 text-green-700 bg-green-100 border border-green-300 rounded-md">
          {message}
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Marathon Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div>
          <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">
            Start Registration Date
          </label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            className="w-full p-2 border border-gray-300 rounded-md"
            dateFormat="yyyy-MM-dd"
            required
          />
        </div>

        <div>
          <label htmlFor="endDate" className="block text-sm font-medium text-gray-700">
            End Registration Date
          </label>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            className="w-full p-2 border border-gray-300 rounded-md"
            dateFormat="yyyy-MM-dd"
            required
          />
        </div>

        <div>
          <label htmlFor="marathonDate" className="block text-sm font-medium text-gray-700">
            Marathon Start Date
          </label>
          <DatePicker
            selected={marathonDate}
            onChange={(date) => setMarathonDate(date)}
            className="w-full p-2 border border-gray-300 rounded-md"
            dateFormat="yyyy-MM-dd"
            required
          />
        </div>

        <div>
          <label htmlFor="location" className="block text-sm font-medium text-gray-700">
            Location
          </label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div>
          <label htmlFor="distance" className="block text-sm font-medium text-gray-700">
            Running Distance
          </label>
          <select
            id="distance"
            value={distance}
            onChange={(e) => setDistance(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          >
            <option value="25k">25k</option>
            <option value="10k">10k</option>
            <option value="3k">3k</option>
          </select>
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div>
          <label htmlFor="image" className="block text-sm font-medium text-gray-700">
            Marathon Image
          </label>
          <input
            type="file"
            id="image"
            onChange={(e) => setImage(e.target.files[0])}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <button type="submit" className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddMarathon;
