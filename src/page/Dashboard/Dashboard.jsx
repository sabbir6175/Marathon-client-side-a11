
import { Link, Outlet, useLocation } from "react-router-dom";


const Dashboard = () => {
  const location = useLocation()
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-1">
        <div className="w-1/5 bg-cyan-400 p-4">
          <nav>
            <ul className="space-y-4">
              <li>
                <Link
                  to={"AddMarathon"}
                  className="w-full text-left p-2"
                >
                  Add Marathon
                </Link>
              </li>
              <li>
                <Link
                  to={"MyMarathonList"}
                  className="w-full text-left p-2"
                >
                  My Marathon List
                </Link>
              </li>
              <li>
                <Link
                  to={"MyApplyList"}
                  className="w-full text-left p-2"
                >
                  My Apply List
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="w-4/5 p-4 bg-pink-50">
          {location.pathname === '/Dashboard' && (
              <h1 className="text-2xl font-semibold text-center">
                No Data Select a page in the sidebar
              </h1>
            )}
         
            {/* <h1 className="text-2xl font-semibold text-center">No Data Select a page in the sidebar</h1> */}
          {/* Render content based on route */}
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
