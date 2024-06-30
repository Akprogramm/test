import React from 'react'
import Image from 'next/image';
import facebooklogo from "../Navbar/Assets/facebooklogo.png"
import twitter from "../Navbar/Assets/twitter.png"
import ig from "../Navbar/Assets/ig.png"
import pintrest from "../Navbar/Assets/pintrest.png"
import googleplus from "../Navbar/Assets/googleplus.png"
import youtube from "../Navbar/Assets/youtube.png"
import telegram from "../Navbar/Assets/telegram.png"
import message from "../Navbar/Assets/message.png"


const page = () => {
  return (
    <div className='relative w-[1440px] h-[380px] left-[0px] top-[100px] bg-[#FFFFFF]'>

      <div className="absolute h-[182px] left-[102px] top-[60px] flex ">
         
        <div className="flex flex-col text-[18px] text-[#08090A] gap-y-[8px] mr-[190px]">
            <div className=" font-bold mb-[16px]">Hobbycue</div>
            <div className="leading-[18px]">About Us</div>
            <div className="leading-[18px]">Our Services</div>
            <div className="leading-[18px]">Work With Us</div>
            <div className="leading-[18px]">FAQ</div>
            <div className="leading-[18px]">Contact Us</div> 
        </div>

        <div className="flex flex-col text-[18px] text-[#08090A] gap-y-[8px] mr-[190px]">
            <div className=" font-bold mb-[16px]">How do I</div>
            <div className="leading-[18px]">Sign Up</div>
            <div className="leading-[18px]">Add a Listing</div>
            <div className="leading-[18px]">Claim Listing</div>
            <div className="leading-[18px]">Post a Query</div>
            <div className="leading-[18px]">Add a Blog Post</div>
            <div className="leading-[18px]">Other Queries</div> 
        </div>


        <div className="flex flex-col text-[18px] text-[#08090A] gap-y-[8px] mr-[190px]">
            <div className=" font-bold mb-[16px]">Quick Links</div>
            <div className="leading-[18px]">Listings</div>
            <div className="leading-[18px]">Blog Posts</div>
            <div className="leading-[18px]">Shop / Store</div>
            <div className="leading-[18px]">Community</div> 
        </div>

        <div className="w-[360px] h-[182px]">
        <div className="">
            <div className="h-[18px] w-[93px] font-bold text-[14px] leading-[18px] tracking-tighter-[0.005em] text-[#08090A]">Social Media</div>
            <div className="h-[24px] w-[360px] flex justify-between mt-[16px]">
                <Image className='w-[24px] h-[24px]' src={facebooklogo} alt="facebooklogo" />
                <Image className='w-[24px] h-[24px]' src={twitter} alt="twitter" />
                <Image className='w-[24px] h-[24px]' src={ig} alt="ig" />
                <Image className='w-[24px] h-[24px]' src={pintrest} alt="pintrest" />
                <Image className='w-[24px] h-[24px]' src={googleplus} alt="googleplus" />
                <Image className='w-[24px] h-[24px]' src={youtube} alt="youtube" /> 
                <Image className='w-[24px] h-[24px]' src={telegram} alt="telegram" />
                <Image className='w-[24px] h-[24px]' src={message} alt="message" /> 
            </div>
             
             <div className="mt-[50px]"></div>
        </div>
        <div className="w-[360px] h-[74px]">
         <div className="text-[14px] font-bold leading-[18px] text-[#08090A] tracking-tighter-[0.050em]">Invite Friends</div>
         
         <div className="mt-[16px] flex justify-center">
         <input 
            type="text"
            className="w-[301px] h-[40px] border-1 border-[#8064A2] rounded-tl-[8px] rounded-bl-[8px] text-[12px] p-[12px]" 
            placeholder="Email ID"
          />
          <button
            style={{ backgroundColor: "#8064A2" }}
            className="text-white w-[59px] text-[12px] h-[40px] border-1 border-[#8064A2] rounded-tr-[8px] rounded-br-[8px]"
            type="button"
          >

            Invite
          </button>
          </div>

        </div> 
       </div>


      </div>

      <div className="absolute w-[1440px] h-[78px] left-[0px] top-[302px] bg-[#F7F5F9]">
        <div className="absolute w-[209px] h-[18px] top-[30px] left-[615px] 
         font-medium text-[14px] leading-[18px] tracking-tighter-[0.005em] text-[#08090A]">
         © Purple Cues Private Limited 
        </div>
      </div>


    </div>
  )
}

export default page;
