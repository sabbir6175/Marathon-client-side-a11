import React, { useState, useEffect, useContext } from "react";
import { useLoaderData } from "react-router-dom";
import AuthContext from "../../../Context/AuthContext/AuthContext";
import Swal from "sweetalert2";
import axios from "axios";
import { toast } from "react-toastify";

const MyApplyList = () => {
  const { user } = useContext(AuthContext);
 const [MyMarathon, setMyMarathon] = useState(null);
  const [myCampaign, setMyCampaign] = useState([]);
  const [selectedMarathon, setSelectedMarathon] = useState(null); 
  const [searchQuery, setSearchQuery] = useState(""); 


  useEffect(() => {
    axios.get('https://marathon-management-system-assignment-11.vercel.app/registerMarathon')
      .then((res) => {
        setMyMarathon(res.data); 
      })  
      .catch((error) => {
        console.log(error); 
        toast.error("Failed to fetch marathon details");
      });
  }, []);


  // Filter campaigns for the logged-in user
  useEffect(() => {
    if (user && MyMarathon) {
      const filteredCampaigns = MyMarathon.filter(
        (campaign) => campaign.email === user.email
      );
      setMyCampaign(filteredCampaigns);
    }
  }, [user, MyMarathon]);

  // Filter the marathons based on the search query
  const filteredMarathons = myCampaign.filter((marathon) =>
    marathon.marathonTitle.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Set the selected marathon to populate the modal form
  const handleModal = (id) => {
    const selected = myCampaign.find((marathon) => marathon._id === id);
    setSelectedMarathon(selected);
    document.getElementById("my_modal_5").showModal();
  };

  // Handle form submission
  const handleRegistration = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const marathonTitle = form.marathonTitle.value;
    const startDate = form.startDate.value;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const contact = form.contact.value;
    const message = form.message.value;

    const updatedRegistration = {
      email,
      marathonTitle,
      startDate,
      firstName,
      lastName,
      contact,
      message,
    };

    // Send the updated data to the server
    fetch(`https://marathon-management-system-assignment-11.vercel.app/registerMarathon/${selectedMarathon._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedRegistration),
    })
    .then(res => res.json())
    .then(data => {
      if (data.modifiedCount > 0) {
        Swal.fire({
          title: 'Success!',
          text: 'Register updated successfully',
          icon: 'success',
          confirmButtonText: 'Close',
        });
        const updatedCampaigns = myCampaign.map(campaign => 
          campaign._id === selectedMarathon._id ? { ...campaign, ...updatedRegistration } : campaign
        );
        setMyCampaign(updatedCampaigns);
        document.getElementById("my_modal_5").close();
      }
    });
  };

  // Delete marathon data
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
        fetch(`https://marathon-management-system-assignment-11.vercel.app/registerMarathon/${id}`, {
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
            const remainingUsers = myCampaign.filter(
              (User) => User._id !== id
            );
            setMyCampaign(remainingUsers);
          }
        });
      }
    });
  };

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className=" pb-20">
      <h1 className="text-center font-bold text-2xl md:text-3xl my-10 text-black">
        My Apply List ({filteredMarathons.length})
      </h1>
       
        <div className="table lg:w-3/4 mx-auto">
            <span className="text-lg ml-5 md:text-2xl font-bold">Search: </span>
            <input
              type="search"
              className="border-2 border-black px-2 py-2 w-48 md:w-72 mb-5 rounded-md"
              placeholder="Search by Marathon Title"
              value={searchQuery}
              onChange={handleSearchChange}
            />
        </div>
      <div className="px-2">
        <div className="overflow-x-auto">
          <table className="table w-3/4 mx-auto ">
            <thead className="bg-green-200 text-black font-bold ">
              <tr>
                <th className="px-4 py-2 text-left">No : </th>
                <th className="px-4 py-2 text-left">Marathon Title</th>
                <th className="px-4 py-2 text-left">First Name</th>
                <th className="px-4 py-2 text-left">Last Name</th>
                <th className="px-4 py-2 text-left">Contact Number</th>
                <th className="px-4 py-2 text-left">Additional Info</th>
                <th className="px-4 py-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredMarathons.map((marathon, index) => (
                <tr
                  key={marathon._id}
                  className="hover:bg-gray-100 border-t border-gray-200"
                >
                  <th>{index + 1}</th>
                  <td>{marathon.marathonTitle}</td>
                  <td>{marathon.firstName}</td>
                  <td>{marathon.lastName}</td>
                  <td>{marathon.contact}</td>
                  <td>{marathon.message}</td>

                  <td className="flex gap-2">
                    <button
                      onClick={() => handleModal(marathon._id)}
                      className="btn bg-orange-500 btn-sm "
                    >
                      Update
                    </button>

                    {/* Modal */}
                    <dialog
                      id="my_modal_5"
                      className="modal modal-bottom sm:modal-middle"
                    >
                      <div className="modal-box">
                        <div className="max-w-4x rounded-md shadow-md mx-auto p-6">
                          <h1 className="text-3xl font-bold text-cyan-400 text-center mb-6">
                            Update Register Marathon
                          </h1>
                          {selectedMarathon && (
                            <form
                              onSubmit={handleRegistration}
                              className="flex flex-col gap-4"
                            >
                              <label>Email:</label>
                              <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                readOnly
                                defaultValue={selectedMarathon.email}
                                className="input input-bordered w-full"
                              />
                              <label>Marathon Title:</label>
                              <input
                                type="text"
                                name="marathonTitle"
                                placeholder="Marathon Title"
                                readOnly
                                defaultValue={selectedMarathon.marathonTitle}
                                className="input input-bordered w-full"
                              />
                              <label>Start Date:</label>
                              <input
                                type="text"
                                name="startDate"
                                placeholder="Start Date"
                                readOnly
                                defaultValue={new Date(selectedMarathon.startDate).toLocaleDateString()}
                                className="input input-bordered w-full"
                              />
                              <label>First Name:</label>
                              <input
                                type="text"
                                name="firstName"
                                placeholder="First Name"
                                defaultValue={selectedMarathon.firstName}
                                className="input input-bordered w-full"
                                required
                              />
                              <label>Last Name:</label>
                              <input
                                type="text"
                                name="lastName"
                                placeholder="Last Name"
                                defaultValue={selectedMarathon.lastName}
                                className="input input-bordered w-full"
                                required
                              />
                              <label>Contact Number:</label>
                              <input
                                type="number"
                                name="contact"
                                placeholder="Contact Number"
                                defaultValue={selectedMarathon.contact}
                                className="input input-bordered w-full"
                                required
                              />
                              <label>Additional Info:</label>
                              <textarea
                                name="message"
                                placeholder="Your Message"
                                defaultValue={selectedMarathon.message}
                                className="textarea textarea-bordered w-full"
                                required
                              ></textarea>
                              <button type="submit" className="btn btn-primary w-full">
                                Submit
                              </button>
                            </form>
                          )}
                        </div>
                      </div>
                      <form method="dialog" className="modal-backdrop">
                        <button>Close</button>
                      </form>
                    </dialog>

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
        
            {filteredMarathons.length === 0 && (
                <div className="text-center text-red-500 font-normal text-sm mt-4">
                No Marathon found matching your search.
                </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default MyApplyList;
