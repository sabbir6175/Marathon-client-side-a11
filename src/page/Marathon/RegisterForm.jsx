import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";

import AuthContext from "../../Context/AuthContext/AuthContext";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const RegisterForm = () => {
  const { id } = useParams(); 
    const [registerMarathon, setRegisterMarathon] = useState([])
    const { user} = useContext(AuthContext)
    const navigate = useNavigate()

    useEffect(() => {
      axios.get(`https://marathon-management-system-assignment-11.vercel.app/AddMarathon/${id}`)
        .then((res) => {
          setRegisterMarathon(res.data); 
        })
        .catch((error) => {
          console.log(error); 
          toast.error("Failed to fetch marathon details");
        });
    }, [id]);


        const handleRegistration =(e)=>{
            e.preventDefault();

            const form = e.target;
            const email = form.email.value;
            const marathonTitle = form.marathonTitle.value;
            const startDate = form.startDate.value;
            const firstName = form.firstName.value;
            const lastName = form.lastName.value;
            const contact = form.contact.value;
            const message = form.message.value;
            const newRegistrationForm = {email, marathonTitle, startDate, firstName, lastName, contact, message} 
            console.log(newRegistrationForm )
            
            
                   fetch("https://marathon-management-system-assignment-11.vercel.app/registerMarathon", {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify(newRegistrationForm),
                    })
                      .then((res) => res.json())
                      .then((data) => {
                        console.log(data);
                        Swal.fire({
                          title: "Marathon Registration successfully!",
                          icon: "success",
                          draggable: true
                        });
                      });

        }




  return (
    <div className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% py-10">
      <div className="max-w-md mx-auto  py-10 p-6 bg-base-100 shadow-2xl rounded-lg">
        <h2 className="text-2xl font-bold text-center text-black mb-6">
        Registration Form 
        </h2>
        <form onSubmit={handleRegistration} className="flex text-black flex-col gap-4">
            <label htmlFor="">
                <span>Email : </span>
            </label>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            readOnly
            defaultValue={user.email}
            className="input input-bordered w-full"
          />
           <label htmlFor="">
                <span>Marathon Title : </span>
            </label>
          <input
            type="text"
            name="marathonTitle"
            placeholder="Marathon Title"
            readOnly
            defaultValue={registerMarathon.marathonTitle}
            className="input input-bordered w-full"
          />
            <label htmlFor="">
                <span> Marathon Start Date : </span>
            </label>
          <input
            readOnly
            name="startDate"
            defaultValue={new Date(registerMarathon.marathonStartDate).toLocaleDateString()}
            className="input input-bordered w-full"
          />
           <label htmlFor="">
                <span> First Name : </span>
            </label>
          <input
            type="text"
            name="firstName"
            placeholder="Your Name"
            className="input input-bordered w-full"
            required
          />
           <label htmlFor="">
                <span> Last Name : </span>
            </label>
          <input
            type="text"
            name="lastName"
            placeholder="Your Name"
            className="input input-bordered w-full"
            required
          />
           <label htmlFor="">
                <span> Contact Number : </span>
            </label>
          <input
            type="number"
            name="contact"
            placeholder="Your Name"
            className="input input-bordered w-full"
            required
          />

           <label htmlFor="">
                <span> Additional Info : </span>
            </label>
          <textarea
            name="message"
            placeholder="Your Message"
            className="textarea textarea-bordered w-full"
            required
          ></textarea>
          <button type="submit" className="btn bg-red-500 w-full">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
