import React from "react";
import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";
import DatePicker from "react-datepicker";

const MyMarathonList = () => {
  const MyMarathon = useLoaderData();
  const [myCampaign, setMyCampaign] = useState(MyMarathon);


  const [marathonData, setMarathonData] = useState({
    marathonTitle: "",
    startRegistrationDate: new Date(),
    endRegistrationDate: new Date(),
    marathonStartDate: new Date(),
    location: "",
    runningDistance: "10k",
    description: "",
    marathonImage: "",
  });


  const handleSubmit = (e) => {
    e.preventDefault();
  }


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

  const handleModal =() =>{
    document.getElementById("my_modal_5").showModal()
  }

// delete marathon data
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
              const remainingUsers = myCampaign.filter(
                (User) => User._id !== id
              );
              setMyCampaign(remainingUsers);
            }
          });
      }
    });
  };

  return (
    <div className="bg-red-50 pb-20">
      <h1 className="text-center font-bold text-3xl my-10 text-cyan-600">
        {" "}
        My Marathon List
      </h1>

      <div className="">
        <div className="overflow-x-auto ">
          <table className="table w-3/4 mx-auto">
            {/* head */}
            <thead className="bg-cyan-500 text-white">
              <tr className="">
                <th className="px-4 py-2 text-left">No : </th>
                <th className="px-4 py-2 text-left">Image</th>
                <th className="px-4 py-2 text-left">Title</th>
                <th className="px-4 py-2 text-left">Location</th>
                <th className="px-4 py-2 text-left">Distance</th>
                <th className="px-4 py-2 text-left">Start Data</th>
                <th className="px-4 py-2 text-left">End Data</th>
                <th className="px-4 py-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {myCampaign.map((marathon, index) => (
                <tr key={marathon._id} className="hover:bg-gray-100 border-t border-gray-200">
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
                  <td>{marathon.startRegistrationDate}</td>
                  <td>{marathon.endRegistrationDate}</td>
                  <td className="flex gap-2">

                    {/* update button  */}



                    <button onClick={()=>handleModal(`${marathon._id}`)}
                      
                      className="btn bg-orange-500 btn-sm "
                    >
                      Update
                    </button>
                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    
                    <dialog
                      id="my_modal_5"
                      className="modal modal-bottom sm:modal-middle"
                    >
                      <div className="modal-box">

                        <div className="max-w-4x  rounded-md shadow-md mx-auto p-6">
                               <h1
                                 className="text-3xl font-bold text-cyan-400 text-center
                              mb-6"
                               >
                                 Update Marathon Event
                               </h1>
                               <form onSubmit={handleSubmit}>
                                 <div className="mb-4">
                                   <label className="block font-semibold mb-2">Marathon Title</label>
                                   <input
                                     type="text"
                                     name="title"
                                     value={marathonData.title}
                                     defaultValue={marathon.marathonTitle}
                                     onChange={handleChange}
                                     className="input input-bordered w-full"
                                     required
                                   />
                                 </div>
                       
                                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-4">
                                   <div>
                                     <label className="block font-semibold mb-2">
                                       Start Registration Date
                                     </label>
                                     <DatePicker
                                       selected={marathonData.startRegistrationDate}
                                       onChange={(date) =>
                                         handleDateChange(date, "startRegistrationDate")
                                       }
                                       defaultValue={marathon.startRegistrationDate}
                                       className="input input-bordered w-full"
                                      dateFormat="yyyy-MM-dd"
                                     />
                                   </div>
                       
                                   <div>
                                     <label className="block font-semibold mb-2">
                                       End Registration Date
                                     </label>
                                     <DatePicker
                                       selected={marathonData.endRegistrationDate}
                                       onChange={(date) =>
                                         handleDateChange(date, "endRegistrationDate")
                                       }
                                       defaultValue={marathon.endRegistrationDate}
                                       className="input input-bordered w-full"
                                        dateFormat="yyyy-MM-dd"
                                     />
                                   </div>
                       
                                   <div>
                                     <label className="block font-semibold mb-2">
                                       Marathon Start Date
                                     </label>
                                     <DatePicker
                                       selected={marathonData.marathonStartDate}
                                       onChange={(date) => handleDateChange(date, "marathonStartDate")}
                                       defaultValue={marathon.marathonStartDate}
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
                                     defaultValue={marathon.location}
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
                                     defaultValue={marathon.runningDistance}
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
                                     defaultValue={marathon.description}
                                     onChange={handleChange}
                                     className="textarea textarea-bordered w-full"
                                     required
                                   ></textarea>
                                 </div>
                       
                                 <div className="mb-4">
                                   <label className="block font-semibold mb-2">
                                     Marathon Image URL
                                   </label>
                                   <input
                                     type="text"
                                     name="marathonImage"
                                     value={marathonData.marathonImage}
                                     defaultValue={marathon.marathonImage}
                                     onChange={handleChange}
                                     className="input input-bordered w-full"
                                     required
                                   />
                                 </div>
                       
                                 <button type="submit" className="btn btn-warning w-full">
                                  Update Marathon
                                 </button>
                                 <div className="modal-action">
                                    <form method="dialog">
                                      {/* if there is a button in form, it will close the modal */}
                                      <button className="btn bg-success text-white">Close</button>
                                    </form>
                                  </div>
                               </form>
                        </div>
                       
                      </div>
                    </dialog>

                    <button
                      onClick={() => handleDeleteUser(marathon._id)}
                      className="btn bg-red-500 btn-sm  "
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

  //   {
  //     "_id": "677c1dfb00fa32250c957b02",
  //     "marathonTitle": "Sunset Run 2025",
  //     "startRegistrationDate": "2025-02-01",
  //     "endRegistrationDate": "2025-03-01",
  //     "marathonStartDate": "2025-06-10",
  //     "location": "California, USA",
  //     "runningDistance": "25k",
  //     "description": "A scenic race along the coastline at sunset.",
  //     "marathonImage": "https://i.ibb.co.com/FxG39dS/Sunset-Run.jpg",
  //     "totalRegistrationCount": 0,
  //     "createdAt": "2025-01-07"
  // }

export default MyMarathonList;
