import React from "react";

const Another2Section = () => {
  const Runner  = [
    {
      title: "Build Your Endurance",
      description:
        "Start by increasing your long runs gradually. Aim for one long run every week, increasing the distance by 10% each time.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-12 h-12 text-blue-500 mx-auto"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v9l3 3m-3 0H9m3-12a9 9 0 110 18 9 9 0 010-18z"
          />
        </svg>
      ),
    },
    {
      title: "Cross-Train to Prevent Injuries",
      description:
        "Incorporate activities like cycling, swimming, or yoga to build strength and flexibility while giving your joints a break from running.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-12 h-12 text-green-500 mx-auto"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v6m0 6h.01M3 12h6m6 0h6"
          />
        </svg>
      ),
    },
    {
      title: "Focus on Nutrition",
      description:
        "Fuel your body properly by eating balanced meals, focusing on carbohydrates, proteins, and healthy fats. Hydration is key too!",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-12 h-12 text-red-500 mx-auto"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 9h15m-15 0l3-3m-3 3l3 3M19.5 9l-3-3m3 3l-3 3M4.5 15h15m-15 0l3-3m-3 3l3 3m10.5-3l-3-3m3 3l-3 3"
          />
        </svg>
      ),
    },
  ]
  return (
    <div className="">
   <section className="py-16 ">
  <div className="container mx-auto text-center">
    <h2 className="text-4xl font-bold text-gray-800 mb-8">
      Training Tips for Runners
    </h2>
    <p className="text-lg text-gray-600 mb-6 md:max-w-2xl m-auto">
      Get ready for your marathon with these essential training tips that will improve your performance and help you stay injury-free.
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
      {Runner.map((tip, index) => (
        <div
          key={index}
          className="card bg-white shadow-lg rounded-lg p-6 hover:scale-105 transform transition duration-300 text-center"
        >
          {tip.icon}
          <h3 className="text-2xl font-semibold text-gray-800 my-4">
            {tip.title}
          </h3>
          <p className="text-gray-600">{tip.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>


      <section class="py-16 ">
        <div class="container mx-auto text-center">
          <h2 class="text-4xl font-bold mb-8">
            Recent Marathon Results
          </h2>
          <p class="text-lg text-gray-600 mb-6  md:max-w-2xl m-auto">
            Check out the top runners and their impressive finishes from recent
            marathons. Stay inspired to achieve your goals!
          </p>
          <div class="overflow-x-auto px-4">
            <table class="table-auto w-full text-center ">
              <thead>
                <tr >
                  <th class="px-4 py-2 text-gray-700 font-semibold">Rank</th>
                  <th class="px-4 py-2 text-gray-700 font-semibold">
                    Runner Name
                  </th>
                  <th class="px-4 py-2 text-gray-700 font-semibold">Time</th>
                  <th class="px-4 py-2 text-gray-700 font-semibold">Event</th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-white border-b hover:bg-gray-100">
                  <td class="px-4 py-2">1</td>
                  <td class="px-4 py-2">John Doe</td>
                  <td class="px-4 py-2">02:10:45</td>
                  <td class="px-4 py-2">New York City Marathon</td>
                </tr>

                <tr class="bg-white border-b hover:bg-gray-100">
                  <td class="px-4 py-2">2</td>
                  <td class="px-4 py-2">Jane Smith</td>
                  <td class="px-4 py-2">02:15:30</td>
                  <td class="px-4 py-2">Boston Marathon</td>
                </tr>

                <tr class="bg-white border-b hover:bg-gray-100">
                  <td class="px-4 py-2">3</td>
                  <td class="px-4 py-2">Sarah Lee</td>
                  <td class="px-4 py-2">02:20:15</td>
                  <td class="px-4 py-2">Chicago Marathon</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Another2Section;
