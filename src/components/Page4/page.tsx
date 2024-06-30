import React from 'react'
import invertedcomma from "../Navbar/Assets/invertedcomma.png"
import circle from "../Navbar/Assets/circle.png"
import play from "../Navbar/Assets/play.png"
import face from "../Navbar/Assets/face.png"
import microphone from "../Navbar/Assets/microphone.png"
import Image from 'next/image';

const page = () => {
  return (
    <div className='relative w-[1440px] h-[672px] left-[0px] top-[100px] bg-[#FFFFFF]'>
      <div className="absolute w-[1240px] h-[472px] left-[100px] top-[100px] bg-[#F7F5F9]">
        <div className="absolute flex justify-between w-[221px] h-[40px] left-[40px] top-[40px] ">
            <Image className='w-[40px] h-[40px]' src={invertedcomma} alt="invertedcomma" />
            <div className=" w-[157px] h-[36px] font-semibold text-[24px] leading-[36px] text-[#08090A]">Testimonials</div>     
        </div>

        <div className="absolute w-[1160px] h-[180px] left-[40px] top-[112px] text-[18px] leading-[30px] font-light tracking-tighter-[0.02em] text-[#6D747A]">
        In a fast growing and ever changing city like Bangalore, it sometimes becomes very difficult to find or connect with like minded people. Websites like hobbycue.com is a great service which helps me get in touch with, communicate, connect, and exchange ideas with other dancers. It also provides the extra benefit of finding products and services that I can avail, which I can be assured is going to be of great quality as it comes recommended by people of the hobbycue community. To have discussions, to get visibility, and to be able to safely explore various hobbies and activities in my city, all under one roof, is an excellent idea and I highly recommend it.
        </div>


        <div className="absolute w-[776px] h-[100px] left-[40px] top-[332px] rounded-[8px] bg-[#CCC1DA]">
            <Image className='absolute w-[40px] h-[40px] left-[30px] top-[30px]' src={circle} alt="circle"/>
            <Image className='absolute top-[38px] left-[40px] w-[24px] h-[24px]' src={play} alt="play"/>
        </div>
        
        <div className="absolute w-[12px] h-[12px] left-[152px] top-[376px] bg-[#8064A2] rounded-full z-10">
        </div>
        <div className="absolute w-[468px] h-[2px] left-[158px] top-[380px] bg-[#FFFFFF] rounded-[2px]"></div>
        <div className="absolute w-[26px] h-[16px] left-[638px] top-[374px] font-normal text-[12px] leading-[16px] text-[#8064A2]">0:00</div>
        <Image className='absolute w-[60px] h-[60px] left-[724px] top-[351px]' src={face} alt="face" />
        <Image className='absolute w-[32px] h-[32px] left-[712px] top-[379px]' src={microphone} alt="microphone" />
        
        <div className="absolute w-[304px] h-[100px] left-[896px] top-[332px]">
        <Image className='w-[100px] h-[100px]' src={face} alt="face" />
        <div className="absolute top-[24px] right-[0px] w-[180px] h-[52px]">
          <div className=" w-[180px] h-[27px] font-semibold text-[18px] leading-[27px] text-[#8064A2] tracking-tighter-[0.02em]">Shubha Nagarajan</div> 
          <div className=" w-[122px] h-[21px] font-normal text-[14px] leading-[21px] text-[#0096C8] tracking-tighter-[0.02em]">Classical Dancer</div> 
          </div>
          </div> 
 

      </div>
    </div>
  )
}

export default page;
