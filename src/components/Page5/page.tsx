import React from 'react'
import Image from 'next/image';
import hobby from "../Navbar/Assets/hobby.png"
import stop from "..//Navbar/Assets/stop.png"
import img3 from "../Navbar/Assets/img3.png"
import img4 from "../Navbar/Assets/img4.png"

const page = () => {
  return (
    <div className='relative w-[1440px] h-[662px] left-[0px] top-[100px] bg-[#F7FDFF]'>
      <div className="absolute w-[565px] h-[130px] left-[130px] top-[100px]">
        <Image className='absolute w-[565px] h-[44px] text-[36px] leading-[54px]' src={hobby} alt="hobby" />
        <button className="flex flex-row justify-center items-center py-[8px] px-[16px] gap-[10px] absolute w-[147px] h-[46px] top-[84px] bg-[#8064A2] rounded-[8px] font-semibold text-[20px] leading-[30px] text-[#FFFFFF]">Get started</button>
      </div>

      <Image className='absolute w-[50px] h-[50px] top-[194px] left-[1340px]' src={stop} alt="stop"/>
      <div className="flex flex-row justify-center items-center py-[3px] px-[4px] gap-[10px] absolute w-[130px] h-[18px] left-[1296px] top-[241px] bg-[#FFFFFF] rounded-[2px] text-[10px] text-[#8064A2] font-medium tracking-tighter-[0.04em] leading-[12px]">Go to top (Ctrl+Home)</div>

        <Image className='absolute w-[531px] h-[280px] left-[100px] top-[351px]' src={img3} alt="img3"/>
        <Image className='absolute w-[638px] h-[304px] left-[702px] top-[330px]' src={img4} alt="img4"/>
    </div> 
  ) 
}

export default page;








