import React, { useState, useEffect, useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import DatePicker from "react-datepicker";
import AuthContext from "../../../Context/AuthContext/AuthContext";
import axios from "axios";
import { toast } from "react-toastify";

const MyMarathonList = () => {
  const { user } = useContext(AuthContext);
   const [MyMarathon, setMyMarathon] = useState(null); // Ensure MyMarathon is an array
  const [myCampaign, setMyCampaign] = useState([]);




 useEffect(() => {
    axios.get(`http://localhost:3000/AddMarathon`, { withCredentials: true })
      .then((res) => {
        setMyMarathon(res.data); 
      })
      .catch((error) => {
        console.log(error); 
        toast.error("Failed to fetch marathon details");
      });
  }, []);







  const [marathonData, setMarathonData] = useState({
    marathonTitle: "",
    startRegistrationDate: new Date(),
    endRegistrationDate: new Date(),
    marathonStartDate: new Date(),
    location: "",
    runningDistance: "10k",
    description: "",
    marathonImage: "",
    _id: "",  // Added _id for identifying the marathon
  });



  // Filter campaigns for the logged-in user
  useEffect(() => {
    if (Array.isArray(MyMarathon) && user) {
      const filteredCampaigns = MyMarathon.filter(
        (campaign) => campaign.email === user.email
      );
      setMyCampaign(filteredCampaigns);
    } else {
      console.error("MyMarathon is not an array or is empty:", MyMarathon);
    }
  }, [user, MyMarathon]);

  // Handle form data changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setMarathonData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle date change in date pickers
  const handleDateChange = (date, fieldName) => {
    setMarathonData((prevData) => ({
      ...prevData,
      [fieldName]: date,
    }));
  };

  // Update marathon
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the _id exists before making the API request
    if (!marathonData._id) {
      Swal.fire({
        title: 'Error!',
        text: 'Invalid marathon data. Please try again.',
        icon: 'error',
        confirmButtonText: 'Close',
      });
      return;
    }

    fetch(`http://localhost:3000/AddMarathon/${marathonData._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(marathonData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          // Update the local state with the updated marathon data
          const updatedCampaigns = myCampaign.map((campaign) =>
            campaign._id === marathonData._id ? { ...campaign, ...marathonData } : campaign
          );
          setMyCampaign(updatedCampaigns); // Update the UI immediately

          Swal.fire({
            title: 'Success!',
            text: 'Marathon updated successfully',
            icon: 'success',
            confirmButtonText: 'Close',
          });

          // Close the modal after updating
          document.getElementById('my_modal_5').close();
        }
      })
      .catch((error) => {
        console.error('Error updating marathon:', error);
        Swal.fire({
          title: 'Error!',
          text: 'There was an error updating the marathon.',
          icon: 'error',
          confirmButtonText: 'Close',
        });
      });
  };

  // Show modal and set selected marathon data
  const handleModal = (id) => {
    const selectedMarathon = myCampaign.find((marathon) => marathon._id === id);
    if (selectedMarathon) {
      setMarathonData({
        _id: selectedMarathon._id,
        marathonTitle: selectedMarathon.marathonTitle,
        startRegistrationDate: new Date(selectedMarathon.startRegistrationDate),
        endRegistrationDate: new Date(selectedMarathon.endRegistrationDate),
        marathonStartDate: new Date(selectedMarathon.marathonStartDate),
        location: selectedMarathon.location,
        runningDistance: selectedMarathon.runningDistance,
        description: selectedMarathon.description,
        marathonImage: selectedMarathon.marathonImage,
      });

      document.getElementById('my_modal_5').showModal(); // Open the modal
    }
  };

  // Delete marathon
  const handleDeleteUser = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/AddMarathon/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Marathon has been deleted.",
                icon: "success",
              });
              const remainingCampaigns = myCampaign.filter((campaign) => campaign._id !== id);
              setMyCampaign(remainingCampaigns); // Update the UI to reflect the deleted marathon
            }
          });
      }
    });
  };

  return (
    <div className="bg-red-50 pb-20">
      <h1 className="text-center font-bold text-3xl my-10 text-cyan-600">
        My Marathon List
      </h1>

      <div className="">
        <div className="overflow-x-auto">
          <table className="table w-3/4 mx-auto">
            <thead className="bg-cyan-500 text-white">
              <tr>
                <th className="px-4 py-2 text-left">No :</th>
                <th className="px-4 py-2 text-left">Image</th>
                <th className="px-4 py-2 text-left">Title</th>
                <th className="px-4 py-2 text-left">Location</th>
                <th className="px-4 py-2 text-left">Distance</th>
                <th className="px-4 py-2 text-left">Start Date</th>
                <th className="px-4 py-2 text-left">End Date</th>
                <th className="px-4 py-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {myCampaign.map((marathon, index) => (
                <tr
                  key={marathon._id}
                  className="hover:bg-gray-100 border-t border-gray-200"
                >
                  <th>{index + 1}</th>
                  <th>
                    <img
                      src={marathon.marathonImage}
                      className="w-10 h-10 rounded-full"
                      alt=""
                    />
                  </th>
                  <td>{marathon.marathonTitle}</td>
                  <td>{marathon.location}</td>
                  <td>{marathon.runningDistance}</td>
                  <td>{new Date(marathon.startRegistrationDate).toLocaleDateString()}</td>
                  <td>{new Date(marathon.endRegistrationDate).toLocaleDateString()}</td>
                  <td className="flex gap-2">
                    <button
                      onClick={() => handleModal(marathon._id)}
                      className="btn bg-orange-500 btn-sm"
                    >
                      Update
                    </button>

                    {/* Modal */}
                    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                      <div className="modal-box">
                        <div className="max-w-4x rounded-md shadow-md mx-auto p-6">
                          <h1 className="text-3xl font-bold text-cyan-400 text-center mb-6">
                            Update Marathon Event
                          </h1>
                          <form onSubmit={handleSubmit}>
                            {/* Marathon Title */}
                            <div className="mb-4">
                              <label className="block font-semibold mb-2">Marathon Title</label>
                              <input
                                type="text"
                                name="marathonTitle"
                                value={marathonData.marathonTitle}
                                onChange={handleChange}
                                className="input input-bordered w-full"
                                required
                              />
                            </div>

                            {/* Date pickers */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-4">
                              <div>
                                <label className="block font-semibold mb-2">Start Registration Date</label>
                                <DatePicker
                                  selected={marathonData.startRegistrationDate}
                                  onChange={(date) =>
                                    handleDateChange(date, "startRegistrationDate")
                                  }
                                  className="input input-bordered w-full"
                                  dateFormat="yyyy-MM-dd"
                                />
                              </div>

                              <div>
                                <label className="block font-semibold mb-2">End Registration Date</label>
                                <DatePicker
                                  selected={marathonData.endRegistrationDate}
                                  onChange={(date) =>
                                    handleDateChange(date, "endRegistrationDate")
                                  }
                                  className="input input-bordered w-full"
                                  dateFormat="yyyy-MM-dd"
                                />
                              </div>

                              <div>
                                <label className="block font-semibold mb-2">Marathon Start Date</label>
                                <DatePicker
                                  selected={marathonData.marathonStartDate}
                                  onChange={(date) =>
                                    handleDateChange(date, "marathonStartDate")
                                  }
                                  className="input input-bordered w-full"
                                  dateFormat="yyyy-MM-dd"
                                />
                              </div>
                            </div>

                            {/* Other fields */}
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

                            <button type="submit" className="btn btn-warning w-full">
                              Update Marathon
                            </button>
                          </form>
                        </div>
                      </div>
                      <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                      </form>
                    </dialog>

                    {/* Delete button */}
                    <button
                      onClick={() => handleDeleteUser(marathon._id)}
                      className="btn bg-red-500 btn-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyMarathonList;
