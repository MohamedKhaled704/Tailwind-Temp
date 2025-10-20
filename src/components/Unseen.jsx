import React from 'react'
import image1 from "../assets/images/rafiki.png"

export default function Unseen() {
  return (
    <div>
        <div className="unseen mt-20 lg:mt-10 md:px-25 flex md:flex-row items-center justify-between flex-col px-5">
            <div className="left-unseen py-9 flex flex-1">
                <picture><img src={image1} alt="rafiki" /></picture>
            </div>
            <div className="right-unseen flex-1">
                <div className="right-unseen-text flex flex-col gap-y-3">
                    <h3 className='font-semibold text-[25px] xl:text-[35px] text-[#4D4D4D] leading-[1.2]'>The unseen of spending three <br /> years at Pixelgrade</h3>
                    <p className='text-[13px] sm:text-[10px] xl:text-[14px] text-[#717171]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed <br /> accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed <br /> porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam <br /> quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
                </div>
                <button className='capitalize bg-[#4CAF4F] text-white font-medium text-[11.14px] px-5.5 py-2.5 rounded-[3px] cursor-pointer mt-7'>learn more</button>
            </div>
        </div>
    </div>
  )
}
