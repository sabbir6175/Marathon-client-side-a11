// import { MdOutlineMenu } from "react-icons/md";
// import { Link, Outlet, useLocation } from "react-router-dom";

// const Dashboard = () => {
//   const location = useLocation();

//   // Function to check if the link is active
//   const isActive = (path) => {
//     return location.pathname === path ? "bg-[#96fbc4] text-red-300" : "text-black";
//   };
  // const links = <>
  //  <nav>
  //           <ul className="space-y-4">
  //             <li>
  //               <Link
  //                 to={"AddMarathon"}
  //                 className={`w-full font-bold text-left rounded-sm md:p-2 ${isActive('/Dashboard/AddMarathon')}`}
  //               >
  //                 Add Marathon
  //               </Link>
  //             </li>
  //             <li>
  //               <Link
  //                 to={"MyMarathonList"}
  //                 className={`w-full font-bold text-left rounded-sm md:p-2 ${isActive('/Dashboard/MyMarathonList')}`}
  //               >
  //                 My Marathon List
  //               </Link>
  //             </li>
  //             <li>
  //               <Link
  //                 to={"MyApplyList"}
  //                 className={`w-full font-bold text-left rounded-sm md:p-2 ${isActive('/Dashboard/MyApplyList')}`}
  //               >
  //                 My Apply List
  //               </Link>
  //             </li>
  //             <div className="divider"></div>
  //             <li>
  //               <Link className="md:p-2" to={'/'}>Back to Home</Link>
  //             </li>
  //           </ul>
  //         </nav>
  
  // </>

//   return (
//     <div className="flex flex-col min-h-screen">
//       <div className="flex flex-1">
//         <div className="hidden md:block md:w-1/3 lg:w-1/5 shadow-2xl bg-[#96fbc4] border-dotted">
//         <ul className="menu w-full md:w-64  bg-gradient-to-r from-red-400 to-green-100  md:min-h-screen fixed top-0 z-50 rounded-sm">
//         <>
//               <div className="flex justify-between place-items-center w-full sticky top-0 z-50 ">
//                 <div className="w-1/2 text-xl font-semibold text-center text-white md:mb-10">
//                   <h1 className="">Marathon Dashboard</h1>
//                 </div>
//             <div className="drawer w-full text-end block md:hidden">
//   <input id="my-drawer" type="checkbox" className="drawer-toggle" />
//   <div className="drawer-content">
//     {/* Drawer Open Button */}
//     <label htmlFor="my-drawer" className="btn btn-primary drawer-button">
//       <MdOutlineMenu size={24} />
//     </label>
//   </div>
//   <div className="drawer-side">
//     <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
//     <ul className="menu bg-base-200 text-white bg-gradient-to-r from-red-400 to-green-100 min-h-full p-4">
//       {links}
//     </ul>
//   </div>
// </div>

//               </div>

//               <div className="hidden md:block">{links}</div>
//             </>
        
//         </ul>
          
//         </div>
//         <div className="w-full md:w-2/3 lg:w-4/5 md:p-4 bg-gray-50 pl-5">
//           {location.pathname === '/Dashboard' && (
//             <h1 className="text-2xl font-semibold text-center">
//               No Data Select a page in the sidebar
//             </h1>
//           )}
//           {/* Render content based on route */}
//           <Outlet />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;



import { Link, Outlet, useLocation } from "react-router-dom";
import { MdOutlineMenu } from "react-icons/md";
import { HiHome } from "react-icons/hi";
import { BiAddToQueue } from "react-icons/bi";
import { LiaStackExchange } from "react-icons/lia";
import { VscGitStashApply } from "react-icons/vsc";

const Dashboard = () => {

  const location = useLocation();

    // Function to check if the link is active
    const isActive = (path) => {
      return location.pathname === path ? "bg-[#96fbc4] text-red-300" : "text-black";
    };
  const links = <>
   <nav>
            <ul className="space-y-4">
              <li>
                <Link
                  to={"AddMarathon"}
                  className={`w-full font-bold text-left rounded-sm md:p-2 ${isActive('/Dashboard/AddMarathon')}`}
                >
                  <BiAddToQueue></BiAddToQueue>
                  Add Marathon
                </Link>
              </li>
              <li>
                <Link
                  to={"MyMarathonList"}
                  className={`w-full font-bold text-left rounded-sm md:p-2 ${isActive('/Dashboard/MyMarathonList')}`}
                >
                  <LiaStackExchange></LiaStackExchange>
                  My Marathon List
                </Link>
              </li>
              <li>
                <Link
                  to={"MyApplyList"}
                  className={`w-full font-bold text-left rounded-sm md:p-2 ${isActive('/Dashboard/MyApplyList')}`}
                >
                  <VscGitStashApply></VscGitStashApply>
                  My Apply List
                </Link>
              </li>
              <div className="divider"></div>
              <li>
                <Link className="md:p-2 text-black" to={'/'}>
                <HiHome></HiHome>
                Back to Home</Link>
              </li>
            </ul>
          </nav>
  
  </>
 

  return (
    <div className="flex">
      <div className=" flex flex-row md:flex-col text-white  md:w-64 md:min-h-screen bg-gradient-to-r from-red-400 to-green-100">
        <ul className="menu w-full md:w-64  bg-gradient-to-r from-[#96fbc4] to-[#FFE6FA]   md:min-h-screen fixed top-0 z-50 rounded-sm ">
         
            <>
              <div className="flex justify-between place-items-center w-full sticky top-0 z-50 ">
                <div className="w-1/2  text-sm md:text-xl font-semibold text-center text-black md:mb-10">
                  <h1 className=" md:block">Marathon Dashboard</h1>
                </div>
                <div className="drawer w-1/2 text-end mr-5 block md:hidden ">
                  <input
                    id="my-drawer"
                    type="checkbox"
                    className="drawer-toggle"
                  />
                  <div className="drawer-content">
                    {/* Page content here */}
                    <label htmlFor="my-drawer" className="btn  drawer-button">
                      <MdOutlineMenu></MdOutlineMenu>
                    </label>
                  </div>
                  <div className="drawer-side">
                    <label
                      htmlFor="my-drawer"
                      aria-label="close sidebar"
                      className="drawer-overlay"
                    ></label>
                    <ul className="menu bg-base-200 text-white bg-gradient-to-t from-[#96fbc4] to-[#FFE6FA]  min-h-full  p-4">
                      {/* Sidebar content here */}
                      {links}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="hidden md:block">{links}</div>
            </>


          
        </ul>
      </div>

      <div className="flex-1 md:flex-0 w-full md:w-0">
       
        <div className="container mx-auto p-0 md:p-4 mt-20 md:mt-0 lg:p-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
