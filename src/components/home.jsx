import React, { useState } from "react";
import wave from "../assests/wave.png";
import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaPhoneAlt,
  FaVuejs,
} from "react-icons/fa";
import { AiOutlineMenuUnfold, AiOutlineClose } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import dp from "../assests/dp1.jpeg";

function Home() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <>
      {/* Navbar */}

      <div className="h-[700px] flex flex-col relative overflow-hidden bg-blue">
        <div className="w-[650px] h-[700px] absolute -top-44 left-[77%] rotate-[-55deg] rounded-[100px] bg-blue-600 z-[-1] overflow-hidden">
          <div className="w-[20px] h-[20px] rotate-60 absolute left-[25%] top-[30%] border-4 border-white"></div>
          <div className="w-[20px] h-[20px] rounded-full absolute left-[41%] top-[30%] border-4 border-white"></div>
          <div className="w-[20px] h-[20px] rounded-full absolute left-[20%] top-[45%] border-4 border-white"></div>
          <div className="w-[200px] h-[300px] rotate-[55deg] absolute top-72 -left-[150px] rounded-r-[100px] rounded-l-[45px] overflow-hidden">
            <img src={wave} alt="" />
          </div>
        </div>

        <div className="flex items-center justify-between mx-auto  px-4  w-full top-0  z-20">
          <div className="w-1/2 flex">
            <div className="w-4/5 p-0 md:px-14 uppercase flex md:justify-evenly text-md font-['Montserrat']">
              <div className="m-2 md:ml-20 px-2 py-1 rounded-full w-[45px] h-[45px] bg-blue-600 text-white flex justify-center items-center text-3xl">
                <FaVuejs />
              </div>
              <a
                href="https://github.com/Vishwa3025"
                className="p-2 text-lg mt-2 md:m-1 md:px-3 md:mx-1 lg:px-2 lg:mx-4 rounded-full flex justify-center items-center w-[45px] h-[45px] md:hidden">
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/vishwa-r-69b1b3204/"
                className="p-2 text-lg mt-2 md:m-1 md:px-3 md:mx-1 lg:px-2 lg:mx-4 rounded-full flex justify-center items-center  w-[45px] h-[45px] md:hidden ">
                <FaLinkedinIn />
              </a>
              <a
                href="https://www.instagram.com/vishwa._.32/"
                className="p-2 text-lg mt-2 md:m-1 md:px-3 md:mx-1 lg:px-2 lg:mx-4 rounded-full flex justify-center items-center  w-[45px] h-[45px] md:hidden ">
                <FaInstagram />
              </a>

              <div className="hidden md:flex">
                <a
                  href="#skill"
                  className="mt-2 hover:font-bold px-3 py-[10px]">
                  Skills
                </a>
                <a href="#edu" className="mt-2 hover:font-bold px-3 py-[10px]">
                  Education
                </a>
                <a href="#prjs" className="mt-2 hover:font-bold px-3 py-[10px]">
                  Projects
                </a>
              </div>
            </div>
          </div>
          <div className="w-1/2 flex justify-end">
            <div className="flex-col md:flex md:px-2 lg:w-2/4 lg:flex-row justify-center lg:text-2xl md:text-3xl text-center text-white  hidden md:block">
              <div className="w-auto flex md:px-2">
                <a
                  href="https://github.com/Vishwa3025"
                  className="md:m-1 md:px-3 md:mx-1 lg:px-2 lg:mx-4 rounded-full flex justify-center items-center w-[45px] h-[45px]">
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/vishwa-r-69b1b3204/"
                  className="md:m-1 md:px-3 md:mx-1 lg:px-2 lg:mx-4 rounded-full flex justify-center items-center  w-[45px] h-[45px] ">
                  <FaLinkedinIn />
                </a>
                <a
                  href="https://www.instagram.com/vishwa._.32/"
                  className="md:m-1 md:px-3 md:mx-1 lg:px-2 lg:mx-4 rounded-full flex justify-center items-center  w-[45px] h-[45px] ">
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>

          <div onClick={handleNav} className="block md:hidden">
            {!nav ? <AiOutlineMenuUnfold color="white" size={20} /> : ""}
          </div>

          <div
            className={
              nav
                ? "fixed left-0 text-black md:hidden top-0 w-[100%] text-left ml-0 p-2 h-[55%] bg-white opacity-70 ease-in-out duration-500"
                : " fixed left-[-100%]"
            }>
            <div className="flex items-center justify-between">
              <div className="pl-5 z-20 text-4xl md:hidden text-white">
                <FaVuejs />
              </div>
              <div onClick={handleNav} className="block md:hidden">
                {!nav ? (
                  <AiOutlineMenuUnfold color="black" size={20} />
                ) : (
                  <AiOutlineClose color="black" size={20} />
                )}
              </div>
            </div>

            <div className="uppercase font-bold flex flex-col  ">
              <a href="#home" className="p-4">
                Home
              </a>
              <a href="#skill" className="p-4">
                Skills
              </a>
              <a href="#edu" className="p-4">
                Education
              </a>
              <a href="#prjs" className="p-4">
                Projects
              </a>
            </div>
          </div>
        </div>

        {/* Intro */}

        <div className="w-[250px] h-[250px] md:w-[220px] md:h-[220px] lg:w-[300px] lg:h-[300px] rounded-full absolute left-[25%] top-[14%] md:left-[55%] md:top-[25%] lg:top-[20%] shadow-xl overflow-hidden">
          <img src={dp} alt="" />
        </div>
        <div className="flex justify-center md:justify-start">
          <div className="md:w-1/2 absolute top-[55%] md:top-[30%] flex justify-center ">
            <div className="pl-10 w-[380px] h-auto text-black px-1 shadow-md rounded-xl font-['Montserrat']">
              <div className="text-lg font-semibold py-2">Hello</div>
              <div className="font-bold text-4xl md:text-6xl py-1 md:py-3 ">
                I'm Vishwa,
              </div>
              <div className="text-md font-normal py-1 md:py-3">
                A Full-time Student and a Frontend Developer with focus on
                React, but still exploring other technologies and frameworks
                that catch my interest! If you are looking for a developer to
                add to your team,I'd love to hear from you.
              </div>
              <div className="bg-blue-600 text-white rounded-[35px] max-w-fit m-2 p-3">
                <div className="flex">
                  <div className="p-1">
                    <FaPhoneAlt />
                  </div>
                  <p className="px-2">7904654890</p>
                </div>
                <div className="flex">
                  <div className="p-1">
                    <SiGmail />
                  </div>
                  <a href="mailto:vishwaraghu3025@gmail.com" className="px-2">
                    vishwaraghu3025@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
