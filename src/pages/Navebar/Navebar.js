import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./Navbar.css";
import { useState } from "react";

const Navebar = () => {
     const [open , setOpen]= useState(false);
     return (
          <>
               <div className="w-full sm:px-5  sm:min-h-[90px] sm:flex sm:items-center sm:justify-between bg-blue-500 sticky top-0 z-10">
                    <div>
                         <img src="../images/sslwebstories-logoo.png" alt="Logo" className="h-20 sm:h-24 p-4 sm:p-3 sm:pl-5 md:pl-7" />
                    </div>
                    <div className="md:mr-16 sm:mr-12">
                         <ul className={`absolute sm:static  bg-blue-500 min-h-[25vh] left-0 w-full sm:min-h-fit  sm:w-auto flex sm:flex-row flex-col items-center  justify-center sm:items-center sm:gap-16 md:gap-24 gap-6 ${open ? " top-[94%]" : "top-[-300%]"}`}>
                              <li>
                                   <NavLink to="/" className="text-white md:text-xl sm:text-lg" activeClassName="active">HOME</NavLink>
                              </li>
                              <li>
                                   <NavLink to="/stories" className="text-white md:text-xl sm:text-lg" activeClassName="active">STORIES</NavLink>
                              </li>
                              <li>
                                   <NavLink to="/about" className="text-white md:text-xl sm:text-lg" activeClassName="active">About Us</NavLink>
                              </li>
                         </ul>
                    </div>
                    <div className="absolute right-[9%] top-6 text-3xl sm:hidden" onClick={()=>setOpen(!open)}>
                    <ion-icon name={open ? "close" : "menu"}></ion-icon>
                    </div>
               </div>
               <Outlet />
          </>
     );
}
export default Navebar;