import React from "react";
import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";

const MyMarathonList = () => {
  const MyMarathon = useLoaderData();
//   console.log(MyMarathon)

  const [myCampaign, setMyCampaign] = useState(MyMarathon);



  const handleDeleteUser =(id)=>{
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
       
        fetch(`http://localhost:3000/AddMarathon/${id}`,{
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data=>{
                if(data.deletedCount){
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your Marathon has been deleted.",
                        icon: "success"
                    });
                    const remainingUsers = myCampaign.filter(User => User._id !== id)
                    setMyCampaign(remainingUsers)
                }
            })
        }
       
      });
}



  return (
    <div className="bg-red-50 pb-20">
      <h1 className="text-center font-bold text-3xl my-10 text-cyan-600"> My Marathon List</h1>

     
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
                {
                    myCampaign.map((marathon, index) => (
                        <tr className="hover:bg-gray-100 border-t border-gray-200">
                            <th>{index + 1}</th>
                            <th><img src={marathon.marathonImage} className="w-10 h-10 rounded-full" alt="" /></th>
                            <td>{marathon.marathonTitle}</td>
                            <td>{marathon.location}</td>
                            <td>{marathon.runningDistance}</td>
                            <td>{marathon.startRegistrationDate}</td>
                            <td>{marathon.endRegistrationDate}</td>
                            <td className="flex gap-2">
                                <button className="btn bg-orange-500 btn-sm ">Update</button>
                                <button onClick={()=>handleDeleteUser(marathon._id)} className="btn bg-red-500 btn-sm  ">Delete</button>
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
