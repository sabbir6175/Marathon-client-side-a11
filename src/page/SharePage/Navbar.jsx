import React, { useContext } from "react";
import { Link,} from "react-router-dom";
import { motion } from 'framer-motion';
import AuthContext from "../../Context/AuthContext/AuthContext";
import { toast } from "react-toastify";


const Navbar = () => {
 
  const {user , singOutUser}  = useContext(AuthContext)
  const handleSingOut =()=>{
    singOutUser()
      .then(()=>{
        toast.success("User logout successfully", {
          position: "top-center",
        });
      })
      .catch(error=> {
        alert('failed to sing out', error)
      })
  }

    const links = (
    <>
        <li><Link to={"/"}>Home</Link></li>
        <li><Link to={"/Marathon"}>Marathon</Link></li>
           {
            user && (
              <>
                 <li><Link to={"/Dashboard/AddMarathon"}>Dashboard</Link></li>
              </>
            )
           }
    </>
    )
  
    

  return (
    <div className="fixed z-50 w-full  backdrop-blur-md shadow-md  bg-gradient-to-r from-[#96fbc4] to-[#FFE6FA]  md:px-10">
      <div class="navbar">
        <div class="navbar-start">
          <div class="dropdown">
            <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabindex="0"
              class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
             {links}
            </ul>
          </div>
         <div className="flex gap-2 items-center">
         <img className="w-12 hidden lg:block h-12 rounded-full border-2" src="https://i.ibb.co.com/M1RpLHr/download-1.png" alt="" />
         <motion.h1 whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }} 
                transition={{ type: 'spring', stiffness: 300 }} className="text-red-400 uppercase font-bold" >Marathon</motion.h1>
         </div>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal px-1">
           {links}
            
          </ul>
        </div>
        <div class="navbar-end">
        {
            user ? <>
                <Link>
                  <div className='flex items-center gap-2'>
                    
                    <img src={user?.photoURL} className='w-10 h-10 rounded-full' alt="" />
                    <button  onClick={handleSingOut} className='btn btn-sm lg:btn-md text-black bg-white  '>Log Out</button>
                  </div>
                </Link>
              </> : <>
              <Link to={"/login"} className="btn btn-sm lg:btn-md text-white bg-gray-600  mr-2">Login</Link>
              <Link to={"/Register"} className="btn  btn-sm lg:btn-md text-white  bg-cyan-400 ">Register</Link>
            </>
          }


          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
