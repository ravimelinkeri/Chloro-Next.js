// import Image from 'next/image';
import Link from "next/link";
import React from "react";
import {
  FiSearch,
  FiMenu,
  FiArrowRight,
  FiInstagram,
  FiYoutube,
  FiFacebook,
} from "react-icons/fi";
import { MdOutlineCopyright, MdWhatsapp } from "react-icons/md";

// import SwiperComponent from "@/components/swiper";

const Header = () => {
  return (
    <>
      <div className="h-20 bg-green-800 max-w-[1400px] px-[10px] md:px-[80px] sm:px-[60px] lg:px-[100px] text-white flex justify-between items-center">
        <div className="w-[20%] hidden md:flex lg:flex xl:flex justify-start items-center">
          <img className="h-[30px] w-[150px]" src="/logo.png" alt="logo" />
        </div>
        <div className="w-[100%] pl-8 md:w-[80%] lg:w-[60%] xl:w-[60%] flex justify-between items-center ">
          <Link href="/" className="hover:font-bold focus:font-bold">
            Home
          </Link>
          <Link href="about" className="hover:font-bold focus:font-bold">
            About
          </Link>
          <Link href="servicess" className="hover:font-bold focus:font-bold">
            Services
          </Link>
          <Link href="team" className="hover:font-bold focus:font-bold">
            Our Team
          </Link>
          <Link href="Contact" className="hover:font-bold focus:font-bold">
            Contact
          </Link>
        </div>
        <div className="w-[20%] hidden justify-evenly ml-[20px] items-center xl:flex lg:flex">
          <FiSearch />
          <FiMenu />
        </div>
      </div>
    </>
  );
};

export default Header;

export const Footer = () => {
  return (
    <>
      <div className="w-[100%] bg-green-700 h-[300px] items-center gap-y-10 flex flex-col text-center pt-[60px] pb-[30px]">
        <p className="text-[30px] md:px-[100px] lg:px-[300px] text-white px-[20px] cormorant">
          Get the latest update about our products and services
        </p>
        <img
          className="z-1 h-[35px] w-[150px] mx-auto mt-[-80px]"
          src="img03.png"
          alt=""
        />
        <div className="flex items-center max-w-[600px] h-[42px] border-[2px] border-solid border-white rounded-l-[40px] rounded-r-[40px] ">
          <input
            className="bg-inherit text-white outline-none  pl-[15px] rounded-l-[40px] rounded-r-[40px] flex "
            type="email"
            placeholder="Your Email"
          />
          <button className="flex justify-center items-center mr-1 gap-x-2 h-[34px] bg-white rounded-l-[40px] rounded-r-[40px] w-[150px] ">
            SUBSCRIBE <FiArrowRight />
          </button>
        </div>
      </div>

      <div className="bg-green-900 w-[100%] h-auto pt-[40px]">
        <img className="mx-auto h-[50px] w-[200px]" src="logo.png" alt="" />

        <div className="w-[100%] flex flex-col px-[40px] py-10 md:justify-around md:flex-row lg:justify-around xl:justify-around mx-auto lg:flex-row xl:flex-row">
          <div className="w-[100%] px-[30px] md:w-[40%] lg:w-[40%] xl:w-[40%]  ">
            <p className="text-white ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
              provident corrupti ad neque, eius,{" "}
            </p>
            <div className="flex justify-center md:justify-start lg:justify-start xl:justify-start gap-x-2 cursor-pointer py-[20px] text-[20px] text-white">
              <FiInstagram />
              <FiYoutube />
              <FiFacebook />
              <MdWhatsapp />
            </div>
          </div>

          <div className="w-[100%] pb-5 flex flex-col items-center lg:items-start xl:items-start md:w-[20%] md:items-start lg:w-[20%] xl:w-[20%]">
            <p className="text-white text-[25px] cormorant">Products</p>
            <p className="text-white">Skincare</p>
            <p className="text-white">Make Up</p>
            <p className="text-white">Shampoo</p>
          </div>

          <div className="w-[100%] pb-5 flex flex-col items-center lg:items-start xl:items-start md:w-[20%] md:items-start lg:w-[20%] xl:w-[20%]">
            <p className="text-white text-[25px] cormorant">About Us</p>
            <p className="text-white">Our Shop</p>
            <p className="text-white">Career</p>
            <p className="text-white">Specialist</p>
          </div>

          <div className="w-[100%] pb-5 flex flex-col items-center lg:items-start xl:items-start md:w-[20%] md:items-start lg:w-[20%] xl:w-[20%]">
            <p className="text-white text-[25px] cormorant">Supports</p>
            <p className="text-white">Blog</p>
            <p className="text-white">Help</p>
            <p className="text-white">FAQs</p>
          </div>
        </div>

        <hr className="w-[90%] h-1 mx-auto my-5" />

        <div className="flex justify-center items-center ">
          <p className="text-white flex gap-x-2 pb-[20px]">
            {" "}
            Copyright <MdOutlineCopyright /> 2024 RAVI Project{" "}
          </p>
        </div>
      </div>
    </>
  );
};
