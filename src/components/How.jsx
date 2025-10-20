import React from 'react'

export default function How() {
  return (
    <div>
        <div className="how mt-10 px-5 sm:px-25 lg:pe-40 flex lg:flex-row lg:justify-between flex-col items-center">
            <div className="how-left">
                <picture><img src="./src/assets/images/pana.png" alt="Pana" /></picture>
            </div>
            <div className="how-right py-10">
                <div className="how-right-text flex flex-col gap-y-3">
                    <h3 className='text-[25px] font-semibold text-[#4D4D4D] leading-[1.2]'>How to design your site footer like <br /> we did</h3>
                    <p className='text-[13px] sm:text-[10px] 2xl:text-[18px] xl:text-[13.5px] text-[#717171]'>Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt <br /> molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at <br /> libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta <br /> nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer <br /> in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi <br /> ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>
                </div>
                <button className='capitalize bg-[#4CAF4F] text-white font-medium text-[11.14px] px-5.5 py-2.5 rounded-[3px] cursor-pointer mt-7'>learn more</button>
            </div>
        </div>
    </div>
  )
}
