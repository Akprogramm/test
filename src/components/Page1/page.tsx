"use client"
import React, { useState } from 'react';
import explore from "../Navbar/Assets/explore.png";
import Image from 'next/image';
import img1 from "../Navbar/Assets/img1.png";
import img2 from "../Navbar/Assets/img2.png";
import google from "../Navbar/Assets/google.png";
import facebook from "../Navbar/Assets/facebook.png";
import hidden from "../Navbar/Assets/hidden.png";
import lock from "../Navbar/Assets/lock.png";

const page = () => {
  
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);

  const [show,setShow] = useState(true);

  function togglePasswordVisibility() {
      setIsPasswordVisible((prevState) => !prevState);
  }

  const handleShow = () => { 
    setShow(!show);
  } 

  return (
    <div className='relative w-[1440px] h-[678px] bg-[#F7F5F9] top-[86px] left-[0px] '>

     <div className='group absolute w-[707px] h-[578px] left-[100px] top-[100px]'>

       <div className='Explore-your-hobby-or-passion absolute w-[580px] h-[54px]
       italic  text-[#000000]'><Image src={explore} alt="explore"/></div>

   <div className='absolute w-[706px] h-[120px] top-[86px] text-[14px]
   leading-[30px]  tracking-tighter-[0.02em]'>  
   Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers, suppliers, classes, workshops, and places to practice, participate or perform. Your hobby may be about visual or performing arts, sports, games, gardening, model making, cooking, indoor or outdoor activities…
   </div>
 
   <div className='absolute w-[706px] h-[60px] top-[222px] text-[14px] leading-[30px] tracking-tighter-[0.02em]'>
   If you are an expert or a seller, you can Add your Listing and promote yourself, your students, products, services or events. Hop on your hobbyhorse and enjoy the ride.
   </div>

      <Image src={img1} className='img1 absolute w-[336.96px] h-[216px] top-[362px]'  alt="img1"/>
      <Image src={img2} className='img2 absolute w-[345.71px] h-[216px] left-[351.36px] top-[362px]'  alt="img2"/>

     </div> 

     <div className="signin flex flex-col items-start p-0 gap-[32px] absolute w-[410px] h-[434px] left-[930px] top-[103px]"> 

      <button className="flex flex-row items-start justify-center p-0 gap-[32px] w-[169px] h-[34px]">
       <div className={`w-[70px] h-[34px] text-[20px] leading-[30px] font-semibold ${show ? "border-b-[3px] border-[#8064A2] text-[#8064A2]" : "text-[#939CA3]"} `} onClick={handleShow}>Sign In</div>
       <div className={`w-[67px] h-[30px] order-1 text-[20px] leading-[30px] font-semibold text-[#8064A2] ${!show ? "border-b-[3px] border-[#8064A2] text-[#8064A2]" : "text-[#939CA3]"} `} onClick={handleShow}>Join In</div> 
       </button>

       <div className="flex flex-col items-start p-0 gap-[28px] w-[410px] h-[368px] order-1">


         <div className="flex flex-col items-start p-0 gap-[16px] w-[410px] h-[96px]">
        <div className="flex flex-row items-start py-[12px] pt-[12px] pr-[128px] pb-[12px] pl-[24px] gap-[88px] 
        w-[410px] h-[40px] bg-[#F7F5F9] border-1 border-[#8064A2] rounded-[8px]">
          <Image src={google} className='w-[16px] h-[16px]' alt="google"/>
          <div className="flex w-[154px] h-[16px] text-[14px] leading-[16px] font-bold text-[#08090A] order-1">Continue with Google</div>
        </div>


        <div className="flex flex-row items-start py-[12px] pt-[12px] pr-[119px] pb-[12px] pl-[24px] gap-[79px] 
        w-[410px] h-[40px] bg-[#F7F5F9] border-1 border-[#8064A2] rounded-[8px] order-1">
          <Image src={facebook} className='w-[16px] h-[16px]' alt="facebook"/>
          <div className="text-[14px] leading-[16px] text-[#08090A] font-bold w-[172px] h-[16px]">Continue with Facebook</div>
        </div>

        </div>
        

        <div className="w-[410px] h-[16px] order-1 relative">
          <div className="absolute top-[8px] w-[149px] bg-[#CED4DA] h-[2px]"></div>
          <div className="absolute left-[38.29%] right-[38.05%] top-[0%] bottom-[0%] font-bold text-[12px] leading-[16px] text-[#000000]">Or connect with</div>
          <div className="absolute top-[8px] w-[148px] left-[262px] bg-[#CED4DA] h-[2px]"></div>
        </div>


        <div className="flex flex-col items-start p-0 gap-[16px] w-[410px] h-[200px] order-2">

        <div className="flex flex-col items-start p-0 gap-[16px] w-[410px] h-[96px] order-0">
        <input placeholder='Email' className='w-[410px] h-[40px] flex flex-row justify-center items-center pt-[12px] pr-[365px] pb-[12px] pl-[12px] gap-[10px] bg-[#FFFFFF] border-[1px] border-[#EBEDF0] rounded-[8px] text-[#939CA3] text-[12px]
        leading-[16px]' type="text" />

        {/* <input className='w-[410px] h-[40px] flex flex-row justify-center items-center p-[12px] gap-[312px] text-[12px] text-[#FFFFFF] order-1 box-border border-[1px] border-[#EBEDF0] rounded-[8px]' type="password" placeholder='Password'/>  */}

        <input
                type={isPasswordVisible ? "text" : "password"}
                placeholder="Password"
                className="w-[410px] h-[40px] flex flex-row justify-center items-center p-[12px] gap-[312px] text-[12px] text-[#FFFFFF] order-1 box-border border-[1px] border-[#EBEDF0] rounded-[8px]"
            />
            <button
                className="absolute top-[300px] right-[10px] text-gray-600"
                onClick={togglePasswordVisibility}
            >
                {isPasswordVisible ? 
                (
                  <Image className='h-4 w-4' src={hidden} alt="hidden" />
              ) : (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                        />
                    </svg>
                ) }
            </button> 


            <div className={` ${show ? "hidden" : "" } absolute w-[410px] top-[78.33%] left-[calc(50% - 410px/2)] mb-[12px]`}>
              <div className="absolute left-[0%] right-[85.37%] top-[83.33%] bottom-[10%] bg-[#FFFFFF] border-2 border-[#FFFFFF] w-[60px] h-[4px]"></div>
              <div className="absolute left-[15.12%] right-[70.24%] top-[83.33%] bottom-[10%] bg-[#FFFFFF] border-[#FFFFFF] border-2 w-[60px] h-[4px]"></div>
              <div className="absolute left-[30.24%] right-[55.12%] top-[83.33%] bottom-[10%] bg-[#FFFFFF] border-2 border-[#FFFFFF] w-[60px] h-[4px]"></div> 
             
             <div className='absolute left-[76.59%] right-[0%] top-[73.33%] font-semibold text-[10px] leading-[16px] text-[#939CA3] text-start'>Password strength</div>
            </div> 
            </div> 

            {show ? 
             <div className='relative flex flex-col items-start p-[0px] gap-[24px] w-[410px] h-[80px] order-1'>

              <div className="w-[410px] h-[16px] order-0">
                <div className="absolute left-[0%] top-[0%] w-[116px] h-[16px] ">
                  <input type="checkbox" className='absolute w-[16px] h-[16px]' name="" id="" />
                  <div className='absolute text-[12px] w-[92px] font-medium h-[16px] left-[24px] text-[#000000]
                  leading-[16px]'>Remember me</div></div> 
                <div className="relative left-[279px] w-[131px] h-[16px] top-[0px] font-normal">
                 <Image className='absolute w-[15.76px] h-[16px]' src={lock} alt="lock"/> 
                 <div className="absolute left-[23.64px] w-[107.36px] h-[16px] font-medium text-[12px] leading-[16px] text-[#000000]">Forgot password?</div>
                  </div> 
              </div>


              <button className="flex flex-row justify-center items-center box-border py-[12px] px-[172px] gap-[10px] w-[410px] h-[40px] border-1 border-[#000000] rounded-[8px] order-1 font-semibold">Continue</button>
            
              
            </div>    
            : 
            <div className='flex flex-col justify-center items-center gap-[12px] p-0 w-[410px] h-[70px] order-1'>
              <div className="w-[402px] h-[18px] font-medium text-[12px] leading-[18px] text-[#6D747A] flex flex-nowrap order-0 mt-[12px]">
              By continuing, you agree to our <div className="text-black px-1">Terms of Service</div> and <div className="text-black px-1">Privacy Policy.</div>
              </div>
              <button className='flex flex-row justify-center items-center py-[12px] px-[133.5px] gap-[10px] w-[410px] h-[40px] bg-[#8064A2] rounded-[8px] text-[14px] leading-[12px] font-semibold text-[#FFFFFF] order-1'>Agree and Continue</button> 
            </div> 
             }   

        </div>

       </div>
  
     </div> 

    </div>  
  )
}

export default page;






