import React from "react";

const UpcomingMarathon = () => {
  return (
    <div>
      <section class="py-16 bg-gray-100 ">
        <div class="container mx-auto text-center">
          <h1 class="text-5xl font-bold text-gray-800 my-16">
            Upcoming Marathons
          </h1>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {/* <!-- Marathon Card 1 with a different background --> */}
            <div class="card w-full max-w-sm bg-blue-100 shadow-xl rounded-xl transform transition duration-300 hover:scale-105">
              <div class="card-body   text-left">
                <h2 class="card-title text-2xl font-semibold text-gray-800">
                  New York City Marathon
                </h2>
                <p class="text-lg text-gray-600">Location: New York, USA</p>
                <p class="text-lg text-gray-600">
                  Registration Dates: March 1, 2025 - June 30, 2025
                </p>
                <div class="card-actions justify-end">
                  <a href="details.html" class="btn btn-info text-white">
                    See Details
                  </a>
                </div>
              </div>
            </div>

            {/* <!-- Marathon Card 2 with a different background --> */}
            <div class="card w-full max-w-sm bg-red-300 shadow-xl rounded-xl transform transition duration-300 hover:scale-105">
              <div class="card-body text-left">
                <h2 class="card-title text-2xl font-semibold text-gray-800">
                  Boston Marathon
                </h2>
                <p class="text-lg text-gray-600">Location: Boston, USA</p>
                <p class="text-lg text-gray-600">
                  Registration Dates: February 15, 2025 - April 30, 2025
                </p>
                <div class="card-actions justify-end">
                  <a href="details.html" class="btn btn-info text-white">
                    See Details
                  </a>
                </div>
              </div>
            </div>

            {/* <!-- Marathon Card 3 with a different background --> */}
            <div class="card w-full max-w-sm bg-yellow-100 shadow-xl rounded-xl transform transition duration-300 hover:scale-105">
              <div class="card-body  text-left">
                <h2 class="card-title text-2xl font-semibold text-gray-800">
                  Chicago Marathon
                </h2>
                <p class="text-lg text-gray-600">Location: Chicago, USA</p>
                <p class="text-lg text-gray-600">
                  Registration Dates: March 10, 2025 - June 1, 2025
                </p>
                <div class="card-actions justify-end">
                  <a href="details.html" class="btn btn-info text-white">
                    See Details
                  </a>
                </div>
              </div>
            </div>

            {/* <!-- Marathon Card 4 with a different background --> */}
            <div class="card w-full max-w-sm bg-red-100 shadow-xl rounded-xl transform transition duration-300 hover:scale-105">
              <div class="card-body text-left">
                <h2 class="card-title text-2xl font-semibold text-gray-800">
                  London Marathon
                </h2>
                <p class="text-lg text-gray-600">Location: London, UK</p>
                <p class="text-lg text-gray-600">
                  Registration Dates: January 15, 2025 - April 1, 2025
                </p>
                <div class="card-actions justify-end">
                  <a href="details.html" class="btn btn-info text-white">
                    See Details
                  </a>
                </div>
              </div>
            </div>

            {/* <!-- Marathon Card 5 with a different background --> */}
            <div class="card w-full max-w-sm bg-purple-100 shadow-xl rounded-xl transform transition duration-300 hover:scale-105">
              <div class="card-body  text-left ">
                <h2 class="card-title text-2xl font-semibold text-gray-800">
                  Berlin Marathon
                </h2>
                <p class="text-lg text-gray-600">Location: Berlin, Germany</p>
                <p class="text-lg text-gray-600">
                  Registration Dates: March 5, 2025 - July 10, 2025
                </p>
                <div class="card-actions justify-end">
                  <a href="details.html" class="btn btn-info text-white">
                    See Details
                  </a>
                </div>
              </div>
            </div>

            {/* <!-- Marathon Card 6 with a different background --> */}
            <div class="card w-full max-w-sm bg-teal-100 shadow-xl rounded-xl transform transition duration-300 hover:scale-105">
              <div class="card-body text-left">
                <h2 class="card-title text-2xl font-semibold text-gray-800">
                  Tokyo Marathon
                </h2>
                <p class="text-lg text-gray-600">Location: Tokyo, Japan</p>
                <p class="text-lg text-gray-600">
                  Registration Dates: April 1, 2025 - July 15, 2025
                </p>
                <div class="card-actions justify-end">
                  <a href="details.html" class="btn btn-info text-white">
                    See Details
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UpcomingMarathon;
