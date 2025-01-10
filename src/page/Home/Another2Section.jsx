import React from "react";

const Another2Section = () => {
  return (
    <div className="">
      <section class="py-16 bg-gray-200">
        <div class="container mx-auto text-center">
          <h2 class="text-3xl font-semibold text-gray-800 mb-8">
            Training Tips for Runners
          </h2>
          <p class="text-lg text-gray-600 mb-6">
            Get ready for your marathon with these essential training tips that
            will improve your performance and help you stay injury-free.
          </p>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
            <div class="card bg-white shadow-lg rounded-lg p-6 hover:scale-105 transform transition duration-300">
              <h3 class="text-2xl font-semibold text-gray-800 mb-4">
                Build Your Endurance
              </h3>
              <p class="text-gray-600">
                Start by increasing your long runs gradually. Aim for one long
                run every week, increasing the distance by 10% each time.
              </p>
            </div>

            <div class="card bg-white shadow-lg rounded-lg p-6 hover:scale-105 transform transition duration-300">
              <h3 class="text-2xl font-semibold text-gray-800 mb-4">
                Cross-Train to Prevent Injuries
              </h3>
              <p class="text-gray-600">
                Incorporate activities like cycling, swimming, or yoga to build
                strength and flexibility while giving your joints a break from
                running.
              </p>
            </div>

            <div class="card bg-white shadow-lg rounded-lg p-6 hover:scale-105 transform transition duration-300">
              <h3 class="text-2xl font-semibold text-gray-800 mb-4">
                Focus on Nutrition
              </h3>
              <p class="text-gray-600">
                Fuel your body properly by eating balanced meals, focusing on
                carbohydrates, proteins, and healthy fats. Hydration is key too!
              </p>
            </div> 
          </div>
        </div>
      </section>

      <section class="py-16 bg-blue-100">
        <div class="container mx-auto text-center">
          <h2 class="text-3xl font-semibold text-gray-800 mb-8">
            Recent Marathon Results
          </h2>
          <p class="text-lg text-gray-600 mb-6">
            Check out the top runners and their impressive finishes from recent
            marathons. Stay inspired to achieve your goals!
          </p>
          <div class="overflow-x-auto px-4">
            <table class="table-auto w-full text-left ">
              <thead>
                <tr>
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
