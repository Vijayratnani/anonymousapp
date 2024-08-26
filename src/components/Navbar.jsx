import logo from "../assets/logo.png"
import notification from "../assets/notification.png"
import announcement from "../assets/announcement.png"
import vijay from "../assets/vijay.png"
// import { students } from "../constants/index"
import uit from "../assets/uit.png"

import {sidebarInfo} from "../constants/index.jsx"
import MenuIcon from '@mui/icons-material/Menu';
import X from '@mui/icons-material/Clear';
import { useState } from "react"

const Navbar = () =>{
    const [mobileDrawerOpen,SetmobileDrawerOpen]= useState(false);

    const toggleNavbar=()=>{
        SetmobileDrawerOpen(!mobileDrawerOpen);
    }
    return (
        <>
        <nav className="sticky w-full top-0 z-40 py-2 sm:py-3 backdrop-blur-lg border-b border-neutral-700/80 shadow-lg">
        <div className="container px-4 mx-auto relative text-sm">
            <div className="flex justify-between items-center">
                <div className="flex items-center flex-shrink-0">
                    <div className="flex items-center flex-shrink-0">
                        <img className="w-9 h-9 sm:h-14 sm:w-14 sm:mr-1 md:w-16 md:h-16 lg:h-20 lg:w-20 lg:mr-2 " src={logo} alt="" srcSet="" />
                        <span className="tracking-tight font-medium sm:text-xl lg:text-4xl">
                            ANONYMOUS <div>APP</div>
                        </span>
                    </div>
                    <img className="rounded-full mx-1 sm:m-2 w-9 h-9 sm:h-14 sm:w-14 sm:ml-5 lg:h-20 lg:w-20 lg:ml-10" src={uit} alt="" srcSet="" />
                </div>
                <div className="2xl:hidden md:flex flex-col flex-end">
                        <button onClick={toggleNavbar} className="p-2">
                            {mobileDrawerOpen ?<X/>:<MenuIcon/>}
                        </button>
                </div>
                <div className="flex items-center flex-shrink-0">
                    <div className="flex mx-3 ml-0 sm:ml-3 sm:mr-1">
                        <img className="h-4 w-4 sm:h-8 sm:w-8 sm:mr-1 lg:h-12 lg:w-12 lg:mr-2" src={notification} alt="" srcSet="" />
                        <img className="h-4 w-4 sm:h-8 sm:w-8 sm:mr-1 lg:h-12 lg:w-12 lg:mr-2" src={announcement} alt="" srcSet="" />
                    </div>
                    <div className="mx-0 sm:mx-1 lg:mx-2 text-xs sm:text-sm lg:text-xl">
                        <div>Vijay Kumar</div>
                        <div>21F-BSCS-30</div>
                    </div>
                    <img className="rounded-full w-9 h-9 m-2 lg:ml-10 sm:h-14 sm:w-14 sm:ml-5 lg:h-20 lg:w-20 " src={vijay} alt="" srcSet="" />
                </div>
            </div>
         </div>
        {mobileDrawerOpen && (
            <div className="fixed z-20 bg-neutral-100 w-full flex flex-col justify-center items-center 2xl:hidden">
                <div>
                    {sidebarInfo.map((info,index)=>(
                        <div key={index} className="flex items-center border-b border-neutral-400/80 hover:border-neutral-700 p-4">
                            <img src={info.icon} type="img/png" className="w-9 h-9 sm:h-14 sm:w-14 sm:mr-1 md:w-16 md:h-16"/>
                            <div className="ml-2">
                                <h2 className="text-sm text-customBlue">{info.title}</h2>
                                <p className="text-xs">{info.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )}
        </nav>
        </>
    );
};

export default Navbar;