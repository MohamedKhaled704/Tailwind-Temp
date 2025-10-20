import React, { useState } from "react";
import "../assets/styles/Header.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)    
  };
  return (
    <div>
      <div className="container mx-auto flex justify-between items-center px-5">
        <div className="header-left flex gap-1">
          <svg
            width="25"
            height="17"
            viewBox="0 0 25 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.3106 9.17145L9.55812 15.5982L5.80569 9.17145H13.3106ZM14.3159 8.59705H4.79636L9.55812 16.7349L14.3159 8.59705Z"
              fill="#263238"
            />
            <path
              d="M19.8347 1.17808L23.5871 7.60481H16.0822L19.8347 1.17808ZM19.8347 0.0292969L15.0729 8.16715H24.5964L19.8347 0.0292969Z"
              fill="#263238"
            />
            <path
              d="M0.234009 0.0292969L4.2266 7.22725L8.58952 0.210039L0.234009 0.0292969Z"
              fill="#4CAF4F"
            />
            <path
              d="M9.55822 0.659912L13.7462 7.8177H5.36215L9.55822 0.659912Z"
              fill="#4CAF4F"
            />
            <path
              d="M14.8247 9.38037L19.0167 16.735H10.4332L14.6944 9.38037H14.8247Z"
              fill="#4CAF4F"
            />
            <path
              d="M15.7322 8.93445L19.8347 16.1766L23.9941 8.93445H15.7322Z"
              fill="#4CAF4F"
            />
          </svg>

          <picture>
            <img src="./src/assets/images/Nexcent.png" alt="nexcent" />
          </picture>
        </div>
        <div className="header-right flex gap-6.5">
         <div className="menu-icon md:hidden cursor-pointer py-2.5" onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="34px"
            viewBox="0 -960 960 960"
            width="34px"
            fill="#1f1f1f"
          >
            <path d="M120-200v-80h720v80H120Zm0-160v-80h720v80H120Zm0-160v-80h720v80H120Zm0-160v-80h720v80H120Z" />
          </svg>
        </div>
          <ul className={`menu list-none gap-x-6 md:py-2.5 md:flex ${isMenuOpen? "flex" : "hidden"} items-center`}>
            <li className="transition duration-500 ease-in-out scale-95 hover:scale-110">
              <a
                href=""
                className="capitalize font-normal hover:text-green-600"
              >
                home
              </a>
            </li>
            <li className="transition duration-500 ease-in-out scale-95 hover:scale-110">
              <a
                href=""
                className="capitalize font-normal hover:text-green-600"
              >
                features
              </a>
            </li>
            <li className="transition duration-500 ease-in-out scale-95 hover:scale-110">
              <a
                href=""
                className="capitalize font-normal hover:text-green-600"
              >
                community
              </a>
            </li>
            <li className="transition duration-500 ease-in-out scale-95 hover:scale-110">
              <a
                href=""
                className="capitalize font-normal hover:text-green-600"
              >
                blog
              </a>
            </li>
            <li className="transition duration-500 ease-in-out scale-95 hover:scale-110">
              <a
                href=""
                className="capitalize font-normal hover:text-green-600"
              >
                pricing
              </a>
            </li>
            <li className="header-btn-li">
              <button className="header-btn bg-green-600 text-white capitalize px-5.5 py-2.5 flex justify-center items-center rounded-[3px] cursor-pointer scale-90 hover:scale-100 transition duration-300 ease-in-out">
            register now
            <span className="inline-block ps-2">
              <svg
                width="16"
                height="16"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.52569 8.47034L10.2448 6.75123C10.4487 6.54735 10.4487 6.2168 10.2448 6.01292L8.52569 4.29381M10.0919 6.38207L2.43494 6.38207"
                  stroke="white"
                  strokeWidth="0.765676"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </button>
            </li>
          </ul>
          
        </div>
      </div>
    </div>
  );
}
