import React from "react";
import {ImFacebook} from "react-icons/im";
import {BsInstagram} from "react-icons/bs";
import {FaLinkedinIn} from "react-icons/fa";
const About = () => {
     return (
          <>
               <div className="py-10 rounded bg-[#f5f5f5]">
                    <h1 className="text-2xl font-bold mb-2.5 text-center mt-10">About Us</h1>
                    <p className="text-center text-base sm:text-lg font-normal font-sans leading-6 px-7 my-6">
                         Welcome to <samp className="font-bold text-cyan-700">SSL Webstories</samp>, where the world of imagination and storytelling comes alive! We are passionate about bringing you captivating web stories that transport you to new realms, ignite your creativity, and touch your heart.
                    </p>
                    <p className="text-center text-base sm:text-lg font-normal font-sans leading-6">
                         This stories are written by SHUBHRANSHU SEKHAR LENKA.Read the stories and enjoy it.
                         <br />This stories based on dreamy & fictionial fact.
                    </p>
                    <div className="flex justify-center my-20">
                         <a className="flex bg-blue-600 items-center justify-center w-10 h-10 rounded-full m-3 text-white text-xl hover:scale-125 duration-150" rel="noreferrer" href="https://www.facebook.com/shubhransusekhar.lenka/" target={"_blank"}><ImFacebook /></a>
                         <a className="flex bg-pink-700 items-center justify-center w-10 h-10 rounded-full m-3 text-white text-xl hover:scale-125 duration-150" rel="noreferrer" href="https://www.instagram.com/mr._hacker_014/" target={"_blank"}><BsInstagram /></a>
                         <a className="flex bg-blue-800 items-center justify-center w-10 h-10 rounded-full m-3 text-white text-xl hover:scale-125 duration-150" rel="noreferrer" href="https://www.linkedin.com/in/shubhranshu-sekhar-lenka-b64841231/" target={"_blank"}><FaLinkedinIn /></a>
                    </div>
               </div>
          </>
     );
}
export default About;
