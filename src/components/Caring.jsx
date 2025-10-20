import React from "react";
import image1 from "../assets/images/image 18.png"
import image2 from "../assets/images/image 19.png"
import image3 from "../assets/images/image 20.png"

export default function Caring() {
  return (
    <div>
      <div className="caring mt-10 md:px-25">
        <div className="caring-text sm:text-center sm:px-2 px-5">
          <h2 className="font-semibold text-[25px] text-[#4D4D4D] leading-[1.2]">
            Caring is the new marketing
          </h2>
          <p className="text-[13px] sm:text-[11.14px] text-[#717171] pt-3">
            The Nextcent blog is the best place to read about the latest
            membership insights, <br /> trends and more. See who's joining the
            community, read about how our community <br /> are increasing their
            membership income and lot's more.​
          </p>
        </div>
        <div className="caring-list grid gap-x-8 gap-y-25 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center mt-5">
          <div className="caring-list-item relative scale-100 hover:scale-110 transition duration-400">
            <picture className="">
              <img src={image1} alt="image1" />
            </picture>
            <div className="absolute text-center bg-[#F5F7FA] p-3 rounded-[5.5px] bottom-[-30%] left-[8.5%]" style={{boxShadow: "0px 5.57px 11.14px rgba(171, 190, 209, 0.4)"}}>
              <h4 className="text-[14px] text-[#717171] font-semibold">
                Creating Streamlined <br /> Safeguarding Processes with <br />{" "}
                OneRen
              </h4>
              <a href="" className="mt-3 py-1.5 text-[#4CAF4F] flex justify-center items-center gap-x-2 cursor-pointer">
                Readmore{" "}
                <span className="inline pt-1">
                  <svg
                    width="12"
                    height="7"
                    viewBox="0 0 12 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.17883 6.09059L10.4709 3.79851C10.7427 3.52667 10.7427 3.08595 10.4709 2.81412L8.17883 0.522034M10.267 3.30631L0.522064 3.30631"
                      stroke="#4CAF4F"
                      strokeWidth="1.0441"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </a>
            </div>
          </div>
          <div className="caring-list-item relative scale-100 hover:scale-110 transition duration-400">
            <picture className="">
              <img src={image2} alt="image2" />
            </picture>
            <div className="absolute text-center bg-[#F5F7FA] p-3 rounded-[5.5px] bottom-[-30%] left-[8.5%]" style={{boxShadow: "0px 5.57px 11.14px rgba(171, 190, 209, 0.4)"}}>
              <h4 className="text-[14px] text-[#717171] font-semibold">
                What are your safeguarding  <br /> responsibilities and how can <br />{" "}
                you manage them?
              </h4>
              <a href="" className="mt-3 py-1.5 text-[#4CAF4F] flex justify-center items-center gap-x-2 cursor-pointer">
                Readmore{" "}
                <span className="inline pt-1">
                  <svg
                    width="12"
                    height="7"
                    viewBox="0 0 12 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.17883 6.09059L10.4709 3.79851C10.7427 3.52667 10.7427 3.08595 10.4709 2.81412L8.17883 0.522034M10.267 3.30631L0.522064 3.30631"
                      stroke="#4CAF4F"
                      strokeWidth="1.0441"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </a>
            </div>
          </div>
          <div className="caring-list-item relative lg:col-span-1 sm:col-span-2 sm:justify-self-center scale-100 hover:scale-110 transition duration-400">
            <picture className="">
              <img src={image3} alt="image3" />
            </picture>
            <div className="absolute text-center bg-[#F5F7FA] p-3 rounded-[5.5px] bottom-[-30%] left-[8.5%]" style={{boxShadow: "0px 5.57px 11.14px rgba(171, 190, 209, 0.4)"}}>
              <h4 className="text-[14px] text-[#717171] font-semibold">
                Revamping the Membership <br /> Model with Triathlon  <br />{" "}
                Australia
              </h4>
              <a href="" className="mt-3 py-1.5 text-[#4CAF4F] flex justify-center items-center gap-x-2 cursor-pointer">
                Readmore{" "}
                <span className="inline pt-1">
                  <svg
                    width="12"
                    height="7"
                    viewBox="0 0 12 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.17883 6.09059L10.4709 3.79851C10.7427 3.52667 10.7427 3.08595 10.4709 2.81412L8.17883 0.522034M10.267 3.30631L0.522064 3.30631"
                      stroke="#4CAF4F"
                      strokeWidth="1.0441"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </a>
            </div>
          </div>
       
        </div>
      </div>
    </div>
  );
}
