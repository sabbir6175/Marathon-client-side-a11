import { Link, Outlet, useLocation } from "react-router-dom";

const Dashboard = () => {
  const location = useLocation();

  // Function to check if the link is active
  const isActive = (path) => {
    return location.pathname === path ? "bg-[#96fbc4] text-red-300" : "text-black";
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-1">
        <div className="w-2/6 lg:w-1/5 shadow-2xl bg-[#96fbc4] border-dotted p-4">
          <nav>
            <ul className="space-y-4">
              <li>
                <Link
                  to={"AddMarathon"}
                  className={`w-full font-bold text-left rounded-sm md:p-2 ${isActive('/Dashboard/AddMarathon')}`}
                >
                  Add Marathon
                </Link>
              </li>
              <li>
                <Link
                  to={"MyMarathonList"}
                  className={`w-full font-bold text-left rounded-sm md:p-2 ${isActive('/Dashboard/MyMarathonList')}`}
                >
                  My Marathon List
                </Link>
              </li>
              <li>
                <Link
                  to={"MyApplyList"}
                  className={`w-full font-bold text-left rounded-sm md:p-2 ${isActive('/Dashboard/MyApplyList')}`}
                >
                  My Apply List
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="w-4/5 md:p-4 bg-gray-50 pl-5">
          {location.pathname === '/Dashboard' && (
            <h1 className="text-2xl font-semibold text-center">
              No Data Select a page in the sidebar
            </h1>
          )}
          {/* Render content based on route */}
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
