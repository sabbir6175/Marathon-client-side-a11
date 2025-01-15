import React, { useEffect } from 'react';
import { useContext } from 'react';
import AuthContext from '../../../Context/AuthContext/AuthContext';
import { useState } from 'react';
import {Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyApplyList = () => {
    const {user} = useContext(AuthContext)
    console.log(user)
    const MyMarathon = useLoaderData();
    const [myCampaign, setMyCampaign] = useState([]);
  
    useEffect(() => {
      if (user && MyMarathon) {
          const filteredCampaigns = MyMarathon.filter(campaign => campaign.email === user.email);
          setMyCampaign(filteredCampaigns);
      }
  }, [user, MyMarathon]);


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
          fetch(`http://localhost:3000/registerMarathon/${id}`, {
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
                const remainingUsers = myCampaign.filter((User) => User._id !== id);
                setMyCampaign(remainingUsers);
              }
            });
        }
      });
    };

    return (
        <div className="bg-red-50 pb-20">
        <h1 className="text-center font-bold text-3xl my-10 text-cyan-600">My Marathon List</h1>
  
        <div className="">
          <div className="overflow-x-auto">
            <table className="table w-3/4 mx-auto">
              {/* Table head */}
              <thead className="bg-cyan-500 text-white">
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

              {/* {
                    "_id": "6786c2081acff1ca45f1df47",
                    "email": "mahmuda@gamil.com",
                    "marathonTitle": "Mountain Challenge ",
                    "startDate": "2025-01-15T00:00:00.000Z",
                    "firstName": "Sabbir ",
                    "lastName": "Hasan",
                    "contact": "01310101661",
                    "message": "I want join now please accept me"
                }, */}

                {/* Mapping through the marathon list */}
                {myCampaign.map((marathon, index) => (
                  <tr key={marathon._id} className="hover:bg-gray-100 border-t border-gray-200">
                    <th>{index + 1}</th>
                   
                    <td>{marathon.marathonTitle}</td>
                    <td>{marathon.firstName}</td>
                    <td>{marathon.lastName}</td>
                    <td>{marathon.contact}</td>
                    <td>{marathon.message}</td>
                    
                    <td className="flex gap-2">
                      {/* Update button */}
                      <Link
                        onClick={() => handleModal(marathon._id)}
                        className="btn bg-orange-500 btn-sm "
                      >
                        Update
                      </Link>
                    
                      {/* Modal */}
                      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box">
                          <div className="max-w-4x rounded-md shadow-md mx-auto p-6">
                            <h1 className="text-3xl font-bold text-cyan-400 text-center mb-6">
                              Update Marathon Event
                            </h1>
                          
                          </div>
                        </div>
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

export default MyApplyList;