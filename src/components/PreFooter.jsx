import React from "react";
import "../assets/styles/PreFooter.css"

export default function PreFooter() {
  return (
    <div>
      <div className="preFooter mt-25 sm:mt-40 py-5.5 px-2.5 bg-[#F5F7FA] flex flex-col justify-center items-center gap-5.5">
        <h2 className="text-[44.55px] text-[#263238] font-semibold text-center leading-[1.2]">
          Pellentesque suscipit <br /> fringilla libero eu.
        </h2>
        <button className="group text-white bg-[#4CAF4F] py-2.5 px-5.5 rounded-[3px] flex items-center gap-x-1.5 cursor-pointer">
          Get a Demo
          <svg className="transition-transform duration-300 transform group-hover:translate-x-1"
            width="11"
            height="7"
            viewBox="0 0 9 5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.47357 4.55936L8.19268 2.84025C8.39656 2.63637 8.39656 2.30582 8.19268 2.10194L6.47357 0.382831M8.03977 2.47109L0.382812 2.47109"
              stroke="white"
              strokeWidth="0.765676"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
