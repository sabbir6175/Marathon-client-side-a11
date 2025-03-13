
import React from "react";

// react icons
import {CgFacebook} from "react-icons/cg";
import {BsInstagram, BsLinkedin, BsTwitter} from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-[#FFE6FA] to-[#96fbc4] boxShadow rounded-xl w-full p-6 md:p-9">
            <div className="flex justify-center gap-[30px] flex-wrap w-full sm:px-32">
                <div
                    className="flex justify-center sm:justify-between gap-[30px] w-full flex-wrap">
                    <Link to={'/'} className="text-[0.9rem] text-[#424242] hover:text-red-400 cursor-pointer transition-all duration-200">Home</Link>
                    <Link to={'/Marathon'} className="text-[0.9rem] text-[#424242] hover:text-red-400 cursor-pointer transition-all duration-200">Marathon</Link>
                    <Link to={'/Dashboard'} className="text-[0.9rem] text-[#424242] hover:text-red-400 cursor-pointer transition-all duration-200">Dashboard</Link>
                    <Link to={'/AddMarathon'} className="text-[0.9rem] text-[#424242] hover:text-red-400 cursor-pointer transition-all duration-200">Add Marathon</Link>
                    <Link to={'MyMarathonList'} className="text-[0.9rem] text-[#424242] hover:text-red-400 cursor-pointer transition-all duration-200">My Marathon</Link>
                    <Link to={'MyApplyList'} className="text-[0.9rem] text-[#424242] hover:text-red-400 cursor-pointer transition-all duration-200">My Apply List</Link>
                </div>

                <div className="flex items-center flex-wrap gap-[10px] text-[#424242]">
                    <a className="text-[1.3rem] p-1.5 cursor-pointer rounded-full hover:text-white hover:bg-red-400 transition-all duration-300">
                        <CgFacebook/>
                    </a>
                    <a className="text-[1.2rem] p-1.5 cursor-pointer rounded-full hover:text-white hover:bg-red-400  transition-all duration-300">
                        <BsTwitter/>
                    </a>
                    <a className="text-[1.2rem] p-1.5 cursor-pointer rounded-full hover:text-white hover:bg-red-400  transition-all duration-300">
                        <BsInstagram/>
                    </a>
                    <a className="text-[1.2rem] p-1.5 cursor-pointer rounded-full hover:text-white hover:bg-red-400  transition-all duration-300">
                        <BsLinkedin/>
                    </a>
                </div>


                <div
                    className="border-t border-gray-200 pt-[20px] flex items-center w-full flex-wrap gap-[20px] justify-center">
                    <p className="text-[0.8rem] sm:text-[0.9rem] text-gray-600">© 2025 Marathon Management. All Rights
                        Reserved.Design by Sabbir hasan </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
                    