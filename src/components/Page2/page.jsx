import Image from 'next/image';
import React from 'react'
import people from "../Navbar/Assets/people.png"
import place from "../Navbar/Assets/place.png"
import product from "../Navbar/Assets/product.png"
import program from "../Navbar/Assets/program.png"


const page = () => { 
  return ( 
      <div className="relative w-[1440px] h-[818px] left-[0px] top-[100px]">
      <div className="absolute w-[1240px] h-[618px] left-[100px] ">
      <div className="absolute w-[608px] h-[297px] top-[100px] box-border bg-[#FFFFFF] border-1 border-[#CED4DA] rounded-[8px]">
        <div className="absolute w-[147px] h-[40px] left-[44px] top-[40px]">
          <Image className='absolute w-[40px] h-[40px]' src={people} alt="people"/>
          <div className="absolute w-[83px] h-[36px] text-[24px] font-semibold leading-[36px] text-[#000000] left-[64px]">People</div>
        </div>
        <div className="box-border absolute w-[520px] h-[81px] top-[104px] left-[44px] bg-[#FFFFFF] text-[18px] leading-[27px] font-normal text-[#000000]">
        Find a teacher, coach, or expert for your hobby interest in your locality.  Find a partner, teammate, accompanist or collaborator.
        </div>
        <button className='box-border absolute w-[122px] h-[40px] top-[217px] left-[44px] font-semibold leading-[27px] border-[2px] border-[#8064A2] rounded-[8px] text-[14px] text-[#8064A2]'>Connect</button>
      </div>

      <div className="absolute w-[608px] h-[297px] left-[632px] top-[100px] box-border bg-[#FFFFFF] border-1 border-[#CED4DA] rounded-[8px]">
      <div className="absolute w-[147px] h-[40px] left-[44px] top-[40px]">
          <Image className='absolute w-[40px] h-[40px]' src={place} alt="place"/>
          <div className="absolute w-[83px] h-[36px] text-[24px] font-semibold leading-[36px] text-[#000000] left-[64px]">Place</div>
        </div>
        <div className="box-border absolute w-[520px] h-[81px] top-[104px] left-[44px] bg-[#FFFFFF] text-[18px] leading-[27px] font-normal text-[#000000]">
        Find a class, school, playground, auditorium, studio, shop or an event venue.  Book a slot at venues that allow booking through hobbycue.
        </div>
        <button className='box-border absolute w-[122px] h-[40px] top-[217px] left-[44px] font-semibold leading-[27px] border-[2px] border-[#8064A2] rounded-[8px] text-[14px] text-[#8064A2]'>Meet up</button>
      </div> 


      <div className="absolute w-[608px] h-[297px] top-[421px] box-border bg-[#FFFFFF] border-1 border-[#CED4DA] rounded-[8px]">
      <div className="absolute w-[147px] h-[40px] left-[44px] top-[40px]">
          <Image className='absolute w-[40px] h-[40px]' src={product} alt="product"/>
          <div className="absolute w-[83px] h-[36px] text-[24px] font-semibold leading-[36px] text-[#000000] left-[64px]">Product</div>
        </div>
        <div className="box-border absolute w-[520px] h-[81px] top-[104px] left-[44px] bg-[#FFFFFF] text-[18px] leading-[27px] font-normal text-[#000000]">
        Find equipment or supplies required for your hobby.  Buy, rent or borrow from shops, online stores or from community members.
        </div>
        <button className='box-border absolute w-[122px] h-[40px] top-[217px] left-[44px] font-semibold leading-[27px] border-[2px] border-[#8064A2] rounded-[8px] text-[14px] text-[#8064A2]'>Get it</button>  
      </div> 


      <div className="absolute w-[608px] h-[297px] left-[632px] top-[421px] box-border bg-[#FFFFFF] border-1 border-[#CED4DA] rounded-[8px]">
      <div className="absolute w-[147px] h-[40px] left-[44px] top-[40px]">
          <Image className='absolute w-[40px] h-[40px]' src={program} alt="program"/>
          <div className="absolute w-[83px] h-[36px] text-[24px] font-semibold leading-[36px] text-[#000000] left-[64px]">Program</div>
        </div>
        <div className="box-border absolute w-[520px] h-[81px] top-[104px] left-[44px] bg-[#FFFFFF] text-[18px] leading-[27px] font-normal text-[#000000]">
        Find events, meetups and workshops related to your hobby.  Register or buy tickets online.
        </div>
        <button className='box-border absolute w-[122px] h-[40px] top-[217px] left-[44px] font-semibold leading-[27px] border-[2px] border-[#8064A2] rounded-[8px] text-[14px] text-[#8064A2]'>Attend</button>
      </div>
     </div>
     </div> 
  )  
}

export default page;






