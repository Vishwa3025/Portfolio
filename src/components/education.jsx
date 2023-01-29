import React from "react";

function Education() {
  return (
    // rounded-tl-[95px] rounded-br-[95px]
    <div
      id="edu"
      className="flex-col text-white font-['Montserrat'] bg-blue-600">
      <div className="flex justify-center p-3 lg:p-5 w-screen text-3xl md:text-5xl uppercase font-bold tracking-wider ">
        Education
      </div>

      <div className="tracking-wider w-screen ">
        <div className="text-md lg:text-xl font-normal p-3 lg:p-5 flex flex-col items-center">
          <div className="p-3 md:p-2">
            Bachelor of Engineering,Computer Science(2020-2024), Panimalar
            Engineering College.
          </div>

          <div className="p-3">
            HSC 2019 — 2020, Shree Niketan Matriculation Higher Secondary
            School.
          </div>
        </div>

        <div className="flex flex-col items-center p-3">
          <div className="text-2xl lg:text-4xl font-semibold p-2">
            Courses Completed
          </div>
          <div className="text-md lg:text-xl font-normal ">
            <div className="p-2">
              <strong>1.</strong> Javascript for Beginners (Code with Mosh),(Apr
              2022)
            </div>
            <div className="p-2">
              <strong>2.</strong> React JS (Code with Mosh),(July 2022 -
              December 2022)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
