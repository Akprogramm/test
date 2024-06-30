import React from "react";
import Image from "next/image";
import hobbycueLogo from "./Assets/hobbycueLogo.png";
import searchLogo from "./Assets/searchLogo.png";
import compass from "./Assets/compass.png";
import arrowdown from "./Assets/arrowdown.png";
import star from "./Assets/star.png";
import save from "./Assets/save.png";
import bell from "./Assets/bell.png";
import shopping from "./Assets/shopping.png"; 

const page = () => { 
  return (
    <div className="flex justify-evenly w-[1440px] h-[80px] absolute top-[0px] teft-[0px] boxShadow">
      <link 
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
        crossOrigin="anonymous"
      /> 
  
      <div className="left flex items-center">
        <Image
          className="w-[294px] h-[60px] absolute left-[97px] top-[10px]"
          src={hobbycueLogo}
          alt="hobbycueLogo"
        />
        <div
          style={{
            width: "300px",
            position: "absolute",
            height: "40px",
            left: "425px",
            top: "20px",
          }}
          className="input-group"
        >
          <input
            type="text"
            className="form-control"
            placeholder="Search here..."
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          />
          <button
            style={{ backgroundColor: "#8064A2" }}
            className="btn btn-outline-secondary text-white"
            type="button"
            id="button-addon2"
          >

            <Image className="w-[12.01px] h-[12.01px]" src={searchLogo} alt="searchLogo" />
          </button>
        </div>
      </div>

      <div className="right absolute flex items-center w-[525px] h-[40px] justify-between left-[815px] top-[20px]">
        <div className="flex items-center w-[107px] h-[24px] space-x-1">
          <div className="h-[24px] w-[24px]">
            <Image className="" src={compass} alt="compass" />
          </div>
          <div className="h-[22px] w-[51px] text-[14px] font-medium">
            {" "}
            Explore{" "}
          </div>
          <div className="h-[24px] w-[24px] flex items-center justify-center">
            <Image
              className="h-[6.72px] w-[11.26px]"
              src={arrowdown}
              alt="arrowdown"
            />
          </div>
        </div>
        <div className="flex items-center w-[114px] h-[24px] space-x-1">
          <div className="h-[24px] w-[24px]">
            <Image className="" src={star} alt="star" />
          </div>
          <div className="h-[22px] w-[51px] text-[14px] font-medium">
            {" "}
            Hobbies{" "}
          </div>
          <div className="h-[24px] w-[24px] flex items-center justify-center">
            <Image
              className="h-[6.72px] w-[11.26px]"
              src={arrowdown}
              alt="arrowdown"
            />
          </div>
        </div>
        <div className="h-[24px] w-[24px]">
          <Image className="" src={save} alt="save" />
        </div>
        <div className="h-[24px] w-[24px]">
          <Image src={bell} alt="bell" />
        </div>
        <div className="h-[24px] w-[24px]">
          <Image src={shopping} alt="shopping" />
        </div>
        <button className="border-[1px] border-[#8064A2] text-[#8064A2] rounded-[8px] w-[112px] h-[40px] font-semibold">
          Sign In
        </button>
      </div>

      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
        crossOrigin="anonymous"
      ></script>
    </div>
  );
};

export default page;


