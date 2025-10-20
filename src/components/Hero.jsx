import React, { useState } from "react";
import image1 from "../assets/images/Illustration.png"
import image2 from "../assets/images/Illustration 1.jpg"
import image3 from "../assets/images/Illustration 2.png"
import "../assets/styles/Hero.css"

export default function Hero() {

    const slideData = [
        {
            header: "Lessons and insights",
      imgSrc: image1
        },
        {
            header: "Choices and chances",
      imgSrc: image2
        },
        {
            header: "Moments and visions",
      imgSrc: image3
        }
    ]
    
    const [currentSlide, setCurrentSlide] = useState(0)    

  return (
    <div>
      <div className="hero bg-[#F5F7FA] flex flex-col pt-17">
        <div className="hero-main flex flex-col items-center md:flex-row justify-around gap-x-18 pb-12 px-2">
          <div className="hero-left flex flex-col my-11">
            <h2 className="text-[#4D4D4D] font-semibold text-[44.55px]">
              {slideData[currentSlide].header}{" "}
              <span className="text-[#4CAF4F] block leading-10">
                from 8 years
              </span>
            </h2>
            <p className="text-[#717171] text-[11.14px] pt-3">
              Where to grow your business as a photographer: site or social media?
            </p>
            <button className="capitalize bg-[#4CAF4F] self-start text-white text-[11.14px] py-2.5 px-5.5 rounded-sm mt-5.5 cursor-pointer">
              register
            </button>
          </div>
          <div className="hero-right">
            <picture>
              <img
                src={slideData[currentSlide].imgSrc}
                alt="illustration"
              />
            </picture>
          </div>
        </div>
        <div className="hero-slider flex justify-center items-center gap-x-1.5 pb-2.5">
            {slideData.map((_, index) => (
            <svg key={index} onClick={() => setCurrentSlide(index)} className="cursor-pointer scale-95 hover:scale-140"
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              opacity="0.3"
              cx="4.17004"
              cy="3.79797"
              r="3.48035"
              fill= {index === currentSlide? "#006400" : "#4CAF4F"}
            />
          </svg>
            ))}
        </div>
      </div>
    </div>
  );
}
