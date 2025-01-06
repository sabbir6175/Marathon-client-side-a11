import { useState } from "react";
import AddMarathon from "./AnotherPage/AddMarathon";
import MyApplyList from "./AnotherPage/MyApplyList";
import MyMarathonList from "./AnotherPage/MyMarathonList";


const Dashboard = () => {
    const [activePage, setActivePage] = useState('AddMarathon');
  
    const renderContent = () => {
      switch (activePage) {
        case 'AddMarathon':
          return <AddMarathon />;
        case 'MyMarathonList':
          return <MyMarathonList />;
        case 'MyApplyList':
          return <MyApplyList />;
        default:
          return <div className="p-4">Select a page from the sidebar.</div>;
      }
    };
  
    return (
      <div className="flex flex-col min-h-screen">
        
        <div className="flex flex-1">
          <nav className="w-1/5 bg-cyan-300  p-4">
            <ul className="space-y-2">
              <li>
                <button
                  className={`w-full  text-left p-2 ${activePage === 'AddMarathon' ? 'bg-red-100 rounded-sm' : ''}`}
                  onClick={() => setActivePage('AddMarathon')}
                >
                  Add Marathon
                </button>
              </li>
              <li>
                <button
                  className={`w-full text-left p-2 ${activePage === 'MyMarathonList' ? 'bg-red-100 rounded-sm' : ''}`}
                  onClick={() => setActivePage('MyMarathonList')}
                >
                  My Marathon List
                </button>
              </li>
              <li>
                <button
                  className={`w-full text-left p-2 ${activePage === 'MyApplyList' ? 'bg-red-100 rounded-sm' : ''}`}
                  onClick={() => setActivePage('MyApplyList')}
                >
                  My Apply List
                </button>
              </li>
            </ul>
          </nav>
          <div className="w-4/5 p-4 ">{renderContent()}</div>
        </div>
      
      </div>
    );
  };
  
  export default Dashboard;
  