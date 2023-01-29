import React from "react";

function Projects() {
  return (
    <>
      <div id="prjs" className="font-['Montserrat']">
        <div className="flex justify-center p-3 lg:p-5  text-3xl md:text-5xl uppercase font-bold font-['Montserrat'] tracking-wider ">
          projects
        </div>
        <div className=" flex lg:justify-center"></div>
        <div className="flex-col p-5">
          <div className="px-5 text-lg md:text-xl lg:text-2xl font-bold underline">
            <strong>1.</strong> WEATHER APP
          </div>
          <p className="px-8 text-md md:text-xl font-normal">
            It is a user friendly weather app that is designed with the help of
            OpenWeatherApi using Tailwind CSS and React JS.
          </p>
          <div className="px-5 flex">
            <h3 className="font-bold text-lg md:text-xl">Video demo:</h3>
            <a
              className="p-1 text-blue-600"
              href="https://drive.google.com/file/d/1QV797TjReMKU0_UqqGvu8kEYxZqp7AoW/view?usp=share_link">
              Google Drive
            </a>
          </div>
        </div>

        <div className="flex-col p-5">
          <div className="px-5 text-lg md:text-xl font-bold underline">
            <strong>2.</strong> QUIZ APP
          </div>
          <p className="px-8 text-md md:text-xl font-normal">
            Quiz App is designed basically with focus on React JS.
          </p>
          <div className="px-5 flex">
            <h3 className="font-bold text-lg md:text-xl">Video demo:</h3>
            <a
              className="p-1 text-blue-600 md:text-xl"
              href="https://drive.google.com/file/d/10RMoGs_XFP-vM3MuVqw0FApgdFIRs_l2/view?usp=share_link">
              Google Drive
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
