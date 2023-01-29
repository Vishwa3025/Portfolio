import React, { Component } from "react";

import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaPython,
  FaJava,
  FaCuttlefish,
} from "react-icons/fa";

import { SiTailwindcss, SiBootstrap } from "react-icons/si";
import { DiJavascript1 } from "react-icons/di";
import { ImStarHalf, ImStarFull } from "react-icons/im";

class Skills extends Component {
  state = {
    icons: [
      { icn: <FaHtml5 /> },
      { icn: <FaCss3Alt /> },
      { icn: <SiTailwindcss /> },
    ],

    icons2: [{ icn: <FaReact /> }, { icn: <FaPython /> }, { icn: <FaJava /> }],

    icons3: [
      { icn: <SiBootstrap /> },
      { icn: <DiJavascript1 /> },
      { icn: <FaCuttlefish /> },
    ],
  };
  render() {
    return (
      <div id="skill" className="p-3 mt-3">
        <div className="flex uppercase text-4xl md:text-5xl justify-center w-screen text-black font-bold font-['Montserrat'] tracking-wider">
          skills
        </div>
        <div className="flex lg:justify-center p-3">
          <div className="w-1/2 lg:w-1/5 text-white p-5">
            {this.state.icons.map((i) => (
              <div className="md:flex md:justify-center">
                <div className="flex-col m-2 h-[120px] w-[120px] border rounded-full bg-blue-600 drop-shadow-lg">
                  <div className="flex justify-center text-5xl p-2">
                    {i.icn}
                  </div>
                  <div className="flex justify-around md:justify-center p-2">
                    <div className="px-1">
                      <ImStarFull />
                    </div>
                    <div className="px-1">
                      <ImStarFull />
                    </div>
                    <div className="px-1">
                      <ImStarFull />
                    </div>
                    <div className="px-1">
                      <ImStarFull />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="w-1/2 lg:w-1/5 text-white p-5">
            {this.state.icons2.map((i) => (
              <div className="md:flex md:justify-center">
                <div className="flex-col m-2 h-[120px] w-[120px] border rounded-full bg-blue-600 drop-shadow-lg">
                  <div className="flex justify-center text-5xl p-2">
                    {i.icn}
                  </div>
                  <div className="flex justify-around md:justify-center py-2">
                    <div className="px-1">
                      <ImStarFull />
                    </div>
                    <div className="px-1">
                      <ImStarFull />
                    </div>
                    <div className="px-1">
                      <ImStarFull />
                    </div>
                    <div className="px-1">
                      <ImStarHalf />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="w-1/2 lg:w-1/5 text-white p-5 hidden sm:block">
            {this.state.icons3.map((i) => (
              <div className="flex justify-center">
                <div className="flex-col m-2 h-[120px] w-[120px] border rounded-full bg-blue-600 drop-shadow-lg">
                  <div className="flex justify-center text-5xl p-2">
                    {i.icn}
                  </div>
                  <div className="flex justify-around md:justify-center py-2">
                    <div className="px-1">
                      <ImStarFull />
                    </div>
                    <div className="px-1">
                      <ImStarFull />
                    </div>
                    <div className="px-1">
                      <ImStarFull />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center md:hidden">
          <div className="w-1/2  text-white p-5">
            {this.state.icons3.map((i) => (
              <div className="flex-col m-2 h-[120px] w-[120px] border rounded-full bg-blue-600 drop-shadow-lg">
                <div className="flex justify-center text-5xl p-2">{i.icn}</div>
                <div className="flex justify-around py-2">
                  <ImStarFull />
                  <ImStarFull />
                  <ImStarFull />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
