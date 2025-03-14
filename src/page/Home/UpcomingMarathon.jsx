import React from "react";

const UpcomingMarathon = () => {
  const marathon =[
    {
      title: "New York City Marathon",
      location: "New York, USA",
      registration: "March 1, 2025 - June 30, 2025",
      image: "https://i.ibb.co.com/jvptHv60/download.jpg",
    },
    {
      title: "Boston Marathon",
      location: "Boston, USA",
      registration: "February 15, 2025 - April 30, 2025",
      image: "https://i.ibb.co.com/TxSHmc4K/happy-athletic-women-running-a-marathon-and-giving-high-five-to-each-other.jpg",
    },
    
    {
      title: "Chicago Marathon",
      location: "Chicago, USA",
      registration: "March 10, 2025 - June 1, 2025",
      image: "https://i.ibb.co.com/HLbVmzkM/images-2.jpg",
    },
    {
      title: "London Marathon",
      location: "London, UK",
      registration: "January 15, 2025 - April 1, 2025",
      image: "https://i.ibb.co.com/dJwB00yY/images-3.jpg",
    },
    {
      title: "Berlin Marathon",
      location: "Berlin, Germany",
      registration: "March 5, 2025 - July 10, 2025",
      image: "https://i.ibb.co.com/Pv2HSJqd/images-4.jpg",
    },
    {
      title: "Tokyo Marathon",
      location: "Tokyo, Japan",
      registration: "April 1, 2025 - July 15, 2025",
      image: "https://i.ibb.co.com/RfBZ5DT/images-6.jpg",
    },
  ]
  
  return (
    <div>
      <section class=" mb-10">
        <div class="container mx-auto text-center">
          <h1 class="text-2xl md:text-4xl lg:text-4xl font-bold my-20">
            Upcoming Marathons
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-10">
  {marathon.map((marathon, index) => (
    <div
      key={index}
      className="card w-full max-w-sm bg-white shadow-xl rounded-xl"
    >
      <img
        src={marathon.image}
        alt={marathon.title}
        className="w-full h-48 object-cover rounded-t-xl"
      />
      <div className="card-body text-left text-black">
        <h2 className="card-title text-xl lg:text-2xl font-semibold">
          {marathon.title}
        </h2>
        <p className="text-base lg:text-lg">Location: {marathon.location}</p>
        <p className="text-base lg:text-lg">
          Registration Dates: {marathon.registration}
        </p>
        <div className="card-actions justify-start">
          <button className="mt-4 btn bg-[#96fbc4] text-black font-medium px-4 py-2 rounded-lg transition-colors duration-300">
            See Details
          </button>
        </div>
      </div>
    </div>
  ))}
</div>

        </div>
      </section>
    </div>
  );
};

export default UpcomingMarathon;
