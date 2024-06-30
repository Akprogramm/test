import Image from 'next/image';
import React from 'react'
import add from "../Navbar/Assets/add.png"

const page = () => {
  return (
    <div className='Testimonials relative w-[1440px] h-[484px] p-0 top-[100px] bg-[#F7FDFF]'>
      <div className="absolute w-[1240px] h-[284px] left-[100px] top-[100px] bg-[#FFFFFF] border-[1px] border-[#CED4DA] rounded-[8px]">
        <div className="flex flex-col items-start p-0 gap-[32px] absolute w-[1160px] h-[204px] left-[40px]
         top-[40px]">
            <div className="w-[232px] h-[40px]">
                <Image className='absolute w-[40px] h-[40px] left-[0px] top-[0px]' src={add} alt="add"/>
                <div className="absolute w-[168px] h-[36px] left-[64px] top-[2px] font-semibold text-[24px] 
                leading-[36px] text-[#08090A]">Add your own</div>
            </div>
            <div className="w-[1160px] h-[60px] text-[18px] leading-[30px] font-normal order-1">Are you a teacher or expert?  Do you sell or rent out equipment, venue or event tickets?  Or, you know someone who should be on hobbycue?  Go ahead and Add your Own page</div>
            <div className="box-border flex flex-row justify-center items-center py-[12px] px-[29px] gap-[10px] w-[121px] h-[40px]
            bg-[#FFFFFF] border-[1px] border-[#8064A2] rounded-[8px] text-[14px] leading-[16px]  text-[#8064A2] font-semibold order-2">Add new</div>
        </div> 
      </div>
    </div>
  )
}

export default page;



// /* Add new */

// width: 63px;
// height: 16px;

// font-family: 'Poppins';
// font-style: normal;
// font-weight: 600;
// font-size: 14px;
// line-height: 16px;
// /* identical to box height, or 114% */

// /* Purple 1 */
// color: #8064A2;


// /* Inside auto layout */
// flex: none;
// order: 0;
// flex-grow: 0;










