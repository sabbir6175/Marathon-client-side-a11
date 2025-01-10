import React from "react";
import { useParams } from "react-router-dom";

const RegisterForm = () => {
  const {id} = useParams()
  return (
    <div>
      <div className="max-w-md mx-auto my-10 p-6 bg-base-100 shadow-xl rounded-lg">
        <h2 className="text-2xl font-bold text-center text-purple-600 mb-6">
          Simple Form
        </h2>
        <form className="flex flex-col gap-4">
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            defaultValue="sabbirhasannahid6175@gmail.com"
            className="input input-bordered w-full"
          />
          <input
            type="text"
            name="marathonTitle"
            placeholder="Marathon Title"
            defaultValue="dfsadf"
            className="input input-bordered w-full"
          />
          <input
            type="datetime-local"
            name="startDate"
            defaultValue="2025-01-31T18:00:00"
            className="input input-bordered w-full"
          />
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="input input-bordered w-full"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className="textarea textarea-bordered w-full"
          ></textarea>
          <button type="submit" className="btn btn-primary w-full">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
