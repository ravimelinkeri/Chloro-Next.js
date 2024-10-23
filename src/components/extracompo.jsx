import React from "react";
import {
  FiArrowDown,
  FiArrowUp,
  FiFacebook,
  FiInstagram,
  FiPhoneCall,
} from "react-icons/fi";
import { GoArrowRight, GoLocation } from "react-icons/go";
import { MdEmail, MdWhatsapp } from "react-icons/md";

export const About01 = () => {
  return (
    <div className="w-[100%] flex flex-col justify-center items-center md:flex-row md:justify-evenly lg:flex-row lg:justify-evenly xl:flex-row xl:justify-evenly px-10 md:px-[80px] lg:px-[100px] xl:px-[200px] bg-[#fdf5f3]">
      <div className="w-[100%] md:w-[30%] lg:w-[30%] xl:w-[30%] py-7 ">
        <p className="text-green-800 text-[40px] cormorant">
          Meet Our Specialist
        </p>
        <img className="w-[200px] z-1 mx-auto " src="img02.png" alt="" />
        <p className="text-green-800 ">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet in,
          magni modi laboriosam eum inventore ab nostrum ullam maxime officia,
          porro alias dolore quo doloremque.
        </p>
        <a
          className="text-white mt-[10px] hover:border-2px hover:border-solid hover:border-green-800 bg-green-700 hover:bg-white hover:text-green-600 transition-all duration-200 delay-150 h-[40px] w-[150px] rounded-[40px] flex justify-center items-center gap-x-2  "
          href="#"
        >
          {" "}
          LEARN MORE <GoArrowRight />{" "}
        </a>
      </div>

      <div className="w-[100%] flex flex-col items-center mx-auto md:w-[70%] md:flex-row  md:justify-around md:pl-[20px] lg:w-[70%] lg:flex-row  lg:justify-around lg:pl-[40px]  xl:w-[70%] xl:flex-row  xl:justify-around ">
        <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row gap-x-3">
          <div className="flex flex-col">
            <img
              className="h-[300px] w-[300px] rounded-t-[200px] pt-[50px] "
              src="About11.jpg"
              alt="logo"
            />
            <div className="bg-white h-[160px] w-[260px] mb-7 ml-[20px] mt-[-30px] flex flex-col items-center text-green-900 rounded-[8px] px-5 py-5">
              <p className="text-[30px] cormorant">Melisa Lauren</p>
              <p>Specialist</p>
              <div className="flex flex-row cursor-pointer pt-[20px] gap-x-5">
                <MdWhatsapp />
                <FiInstagram />
                <FiFacebook />
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <img
              className="h-[300px] w-[300px] rounded-t-[200px] pt-[50px] "
              src="About12.jpg"
              alt="logo"
            />
            <div className="bg-white h-[160px] w-[260px] mb-7 ml-[20px] mt-[-30px] flex flex-col items-center text-green-900 rounded-[8px] px-5 py-5">
              <p className="text-[30px] cormorant">Kate Amanda</p>
              <p>Specialist</p>
              <div className="flex cursor-pointer flex-row pt-[20px] gap-x-5">
                <MdWhatsapp />
                <FiInstagram />
                <FiFacebook />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const About12 = () => {
  return (
    <div className="flex flex-col md:justify-center mx-auto lg:justify-center items-center md:flex-row lg:flex-row xl:flex-row w-[100%] pt-[50px] bg-[#fdf5f3] pb-[80px]">
      <div className="flex w-[100%] md:w-[50%] lg:w-[50%] xl:w-[50%]">
        <img
          className="w-[600px] mx-auto h-[400px] rounded-tl-[50%] rounded-tr-[50%] lg:rounded-tl-[50%] lg:rounded-tr-[38%] xl:rounded-tl-[50%] xl:rounded-tr-[38%] px-[20px] md:pl-[80px] lg:pl-[100px] xl:pl-[100px]  "
          src="/hero49.jpg"
          alt="logo"
        />
      </div>

      <div className="w-[100%] md:w-[50%] lg:w-[50%] xl:w-[50%] ">
        <div className="bg-green-800 md:ml-[-50px] lg:ml-[-100px] my-7 px-7 mx-auto  py-7 h-auto w-[350px] ">
          <p className="text-[35px] text-white cormorant">Our Story</p>
          <img
            className="max-w-[120px] mt-[-10px] ml-[70px] z-1"
            src="/img02.png"
            alt="style-img"
          />
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <button className="max-w-[250px] text-[12px] mt-7 gap-3 px-4 py-1 text-green-800 bg-white hover:text-white hover:bg-green-700 transition-all duration-200 delay-150 rounded-[20px] flex  justify-evenly items-center">
            READ MORE <GoArrowRight />
          </button>
        </div>

        <div className="flex justify-center md:ml-[-200px] lg:ml-[-350px] items-center gap-x-7">
          <div className="flex flex-col justify-center ">
            <p className="text-[35px] cormorant">955+</p>
            <p className="text-green-600 text-[12px] cormorant">
              Happy Customers
            </p>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-[35px] cormorant">240+</p>
            <p className="text-green-600 text-[12px] cormorant">
              Happy Customers
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const About13 = () => {
  return (
    <div className=" max-w-[1400px] py-[40px] bg-green-900  md:py-[80px] lg:py-[100px] xl:py-[100px]">
      <div className="flex flex-col justify-around items-cente my-5  lg:flex-row lg:gap-x-3 lg:flex-wrap xl:flex-row xl:gap-x-3 xl:flex-wrap ">
        <div className="flex flex-col">
          <div className="flex flex-col my-6 ">
            <img
              className="max-h-[500px] hover:-translate-y-5 transition-all duration-200 delay-150 max-w-[370px] md:max-h-[515px] md:max-w-[500px] rounded-t-[200px] mx-auto lg:max-h-[350px] lg:rounded-t-[150px] xl:rounded-t-[150px] lg:max-w-[330px] xl:max-h-[350px] xl:max-w-[330px]"
              src="/hero31.jpg"
              alt="logo"
            />
          </div>

          <div className=" bg-white rounded-[15px] h-auto max-w-[340px] md:max-w-[450px]  mt-[-40px]  py-3 px-3 justify-center text-center  text-black mx-auto  lg:max-h-[250px] lg:max-w-[290px]">
            <p className="text-green-800 text-[25px] cormorant"> Face Scrub </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              vel, eius, earum fugit at omnis dolorumaliquid .
            </p>
            <a
              className="text-green-400 underline underline-offset-8 flex justify-center items-center gap-x-2  "
              href="#"
            >
              {" "}
              LEARN MORE <GoArrowRight />{" "}
            </a>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex flex-col my-6 ">
            <img
              className="max-h-[500px] max-w-[370px] hover:-translate-y-5 transition-all duration-200 delay-150 md:max-h-[515px] md:max-w-[500px] rounded-t-[200px] mx-auto lg:max-h-[350px] lg:rounded-t-[150px] xl:rounded-t-[150px] lg:max-w-[330px] xl:max-h-[350px] xl:max-w-[330px]"
              src="/hero32.jpg"
              alt="logo"
            />
          </div>

          <div className=" bg-white rounded-[15px] h-auto max-w-[340px] md:max-w-[450px]  mt-[-40px]  py-3 px-3 gap-y-3 justify-center text-center  text-black mx-auto  lg:max-h-[250px] lg:max-w-[290px]">
            <p className="text-green-800 text-[25px] cormorant">
              {" "}
              Face Massage{" "}
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              vel, eius, earum fugit at omnis dolorumaliquid .
            </p>
            <a
              className="text-green-400 underline underline-offset-8 flex justify-center items-center gap-x-2  "
              href="#"
            >
              {" "}
              LEARN MORE <GoArrowRight />{" "}
            </a>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex flex-col my-6 ">
            <img
              className="max-h-[500px] max-w-[370px] hover:-translate-y-5 transition-all duration-200 delay-150 md:max-h-[515px] md:max-w-[500px] rounded-t-[200px] mx-auto lg:max-h-[350px] lg:rounded-t-[150px] xl:rounded-t-[150px] lg:max-w-[330px] xl:max-h-[350px] xl:max-w-[330px]"
              src="/hero33.jpg"
              alt="logo"
            />
          </div>

          <div className=" bg-white rounded-[15px] h-auto max-w-[340px] md:max-w-[450px]  mt-[-40px]  py-3 px-3 justify-center text-center  text-black mx-auto  lg:max-h-[250px] lg:max-w-[290px]">
            <p className="text-green-800 text-[25px] cormorant">Botox Filler</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              vel, eius, earum fugit at omnis dolorumaliquid .
            </p>
            <a
              className="text-green-400 underline underline-offset-8 flex justify-center items-center gap-x-2  "
              href="#"
            >
              {" "}
              LEARN MORE <GoArrowRight />{" "}
            </a>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex flex-col my-6 ">
            <img
              className="max-h-[500px] max-w-[370px] hover:-translate-y-5 transition-all duration-200 delay-150 md:max-h-[515px] md:max-w-[500px] rounded-t-[200px] mx-auto lg:max-h-[350px] lg:rounded-t-[150px] xl:rounded-t-[150px] lg:max-w-[330px] xl:max-h-[350px] xl:max-w-[330px]"
              src="/hero34.jpg"
              alt="logo"
            />
          </div>

          <div className=" bg-white rounded-[15px]  h-auto max-w-[340px] md:max-w-[450px]  mt-[-40px]  py-3 px-3 justify-center text-center  text-black mx-auto  lg:max-h-[250px] lg:max-w-[290px]">
            <p className="text-green-800 text-[25px] cormorant">Pedicure</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              vel, eius, earum fugit at omnis dolorumaliquid .
            </p>
            <a
              className="text-green-400 underline underline-offset-8 flex justify-center items-center gap-x-2  "
              href="#"
            >
              {" "}
              LEARN MORE <GoArrowRight />{" "}
            </a>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex flex-col my-6 ">
            <img
              className="max-h-[500px] max-w-[370px] hover:-translate-y-5 transition-all duration-200 delay-150 md:max-h-[515px] md:max-w-[500px] rounded-t-[200px] mx-auto lg:max-h-[350px] lg:rounded-t-[150px] xl:rounded-t-[150px] lg:max-w-[330px] xl:max-h-[350px] xl:max-w-[330px]"
              src="/hero35.jpg"
              alt="logo"
            />
          </div>

          <div className=" bg-white rounded-[15px]  h-auto max-w-[340px] md:max-w-[450px]  mt-[-40px]  py-3 px-3 justify-center text-center  text-black mx-auto  lg:max-h-[250px] lg:max-w-[290px]">
            <p className="text-green-800 text-[25px] cormorant">
              Face Cleanser
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              vel, eius, earum fugit at omnis dolorumaliquid .
            </p>
            <a
              className="text-green-400 underline underline-offset-8 flex justify-center items-center gap-x-2  "
              href="#"
            >
              {" "}
              LEARN MORE <GoArrowRight />{" "}
            </a>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex flex-col my-6 ">
            <img
              className="max-h-[500px] max-w-[370px] hover:-translate-y-5 transition-all duration-200 delay-150 md:max-h-[515px] md:max-w-[500px] rounded-t-[200px] mx-auto lg:max-h-[350px] lg:rounded-t-[150px] xl:rounded-t-[150px] lg:max-w-[330px] xl:max-h-[350px] xl:max-w-[330px]"
              src="/hero36.jpg"
              alt="logo"
            />
          </div>

          <div className=" bg-white rounded-[15px] h-auto max-w-[340px] md:max-w-[450px]  mt-[-40px]  py-3 px-3 justify-center text-center  text-black mx-auto  lg:max-h-[250px] lg:max-w-[290px]">
            <p className="text-green-800 text-[25px] cormorant">
              {" "}
              Body Massage{" "}
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              vel, eius, earum fugit at omnis dolorumaliquid .
            </p>
            <a
              className="text-green-400 underline underline-offset-8 flex justify-center items-center gap-x-2  "
              href="#"
            >
              {" "}
              LEARN MORE <GoArrowRight />{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export const About14 = () => {
  return (
    <div className=" max-w-[1400px] py-[40px] bg-[#fdf5f3]  md:py-[80px] lg:py-[100px] xl:py-[100px]">
      <div className="flex flex-col justify-around items-cente my-5  lg:flex-row lg:gap-x-3 lg:flex-wrap xl:flex-row xl:gap-x-3 xl:flex-wrap ">
        <div className="flex flex-col">
          <div className="flex flex-col my-6 ">
            <img
              className="max-h-[500px] hover:-translate-y-5 transition-all duration-200 delay-150 max-w-[370px] md:max-h-[515px] md:max-w-[500px] rounded-t-[200px] mx-auto lg:max-h-[350px] lg:rounded-t-[150px] xl:rounded-t-[150px] lg:max-w-[330px] xl:max-h-[350px] xl:max-w-[330px]"
              src="/hero31.jpg"
              alt="logo"
            />
          </div>

          <div className=" bg-white rounded-[15px] h-auto max-w-[340px] md:max-w-[450px]  mt-[-40px]  py-3 px-3 justify-center text-center  text-black mx-auto  lg:max-h-[250px] lg:max-w-[290px]">
            <p className="text-green-800 text-[25px] cormorant"> Face Scrub </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              vel, eius, earum fugit at omnis dolorumaliquid .
            </p>
            <a
              className="text-green-400 underline underline-offset-8 flex justify-center items-center gap-x-2  "
              href="#"
            >
              {" "}
              LEARN MORE <GoArrowRight />{" "}
            </a>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex flex-col my-6 ">
            <img
              className="max-h-[500px] max-w-[370px] hover:-translate-y-5 transition-all duration-200 delay-150 md:max-h-[515px] md:max-w-[500px] rounded-t-[200px] mx-auto lg:max-h-[350px] lg:rounded-t-[150px] xl:rounded-t-[150px] lg:max-w-[330px] xl:max-h-[350px] xl:max-w-[330px]"
              src="/hero32.jpg"
              alt="logo"
            />
          </div>

          <div className=" bg-white rounded-[15px] h-auto max-w-[340px] md:max-w-[450px]  mt-[-40px]  py-3 px-3 gap-y-3 justify-center text-center  text-black mx-auto  lg:max-h-[250px] lg:max-w-[290px]">
            <p className="text-green-800 text-[25px] cormorant">
              {" "}
              Face Massage{" "}
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              vel, eius, earum fugit at omnis dolorumaliquid .
            </p>
            <a
              className="text-green-400 underline underline-offset-8 flex justify-center items-center gap-x-2  "
              href="#"
            >
              {" "}
              LEARN MORE <GoArrowRight />{" "}
            </a>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex flex-col my-6 ">
            <img
              className="max-h-[500px] max-w-[370px] hover:-translate-y-5 transition-all duration-200 delay-150 md:max-h-[515px] md:max-w-[500px] rounded-t-[200px] mx-auto lg:max-h-[350px] lg:rounded-t-[150px] xl:rounded-t-[150px] lg:max-w-[330px] xl:max-h-[350px] xl:max-w-[330px]"
              src="/hero33.jpg"
              alt="logo"
            />
          </div>

          <div className=" bg-white rounded-[15px] h-auto max-w-[340px] md:max-w-[450px]  mt-[-40px]  py-3 px-3 justify-center text-center  text-black mx-auto  lg:max-h-[250px] lg:max-w-[290px]">
            <p className="text-green-800 text-[25px] cormorant">Botox Filler</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              vel, eius, earum fugit at omnis dolorumaliquid .
            </p>
            <a
              className="text-green-400 underline underline-offset-8 flex justify-center items-center gap-x-2  "
              href="#"
            >
              {" "}
              LEARN MORE <GoArrowRight />{" "}
            </a>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex flex-col my-6 ">
            <img
              className="max-h-[500px] max-w-[370px] hover:-translate-y-5 transition-all duration-200 delay-150 md:max-h-[515px] md:max-w-[500px] rounded-t-[200px] mx-auto lg:max-h-[350px] lg:rounded-t-[150px] xl:rounded-t-[150px] lg:max-w-[330px] xl:max-h-[350px] xl:max-w-[330px]"
              src="/hero34.jpg"
              alt="logo"
            />
          </div>

          <div className=" bg-white rounded-[15px]  h-auto max-w-[340px] md:max-w-[450px]  mt-[-40px]  py-3 px-3 justify-center text-center  text-black mx-auto  lg:max-h-[250px] lg:max-w-[290px]">
            <p className="text-green-800 text-[25px] cormorant">Pedicure</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              vel, eius, earum fugit at omnis dolorumaliquid .
            </p>
            <a
              className="text-green-400 underline underline-offset-8 flex justify-center items-center gap-x-2  "
              href="#"
            >
              {" "}
              LEARN MORE <GoArrowRight />{" "}
            </a>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex flex-col my-6 ">
            <img
              className="max-h-[500px] max-w-[370px] hover:-translate-y-5 transition-all duration-200 delay-150 md:max-h-[515px] md:max-w-[500px] rounded-t-[200px] mx-auto lg:max-h-[350px] lg:rounded-t-[150px] xl:rounded-t-[150px] lg:max-w-[330px] xl:max-h-[350px] xl:max-w-[330px]"
              src="/hero35.jpg"
              alt="logo"
            />
          </div>

          <div className=" bg-white rounded-[15px]  h-auto max-w-[340px] md:max-w-[450px]  mt-[-40px]  py-3 px-3 justify-center text-center  text-black mx-auto  lg:max-h-[250px] lg:max-w-[290px]">
            <p className="text-green-800 text-[25px] cormorant">
              Face Cleanser
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              vel, eius, earum fugit at omnis dolorumaliquid .
            </p>
            <a
              className="text-green-400 underline underline-offset-8 flex justify-center items-center gap-x-2  "
              href="#"
            >
              {" "}
              LEARN MORE <GoArrowRight />{" "}
            </a>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex flex-col my-6 ">
            <img
              className="max-h-[500px] max-w-[370px] hover:-translate-y-5 transition-all duration-200 delay-150 md:max-h-[515px] md:max-w-[500px] rounded-t-[200px] mx-auto lg:max-h-[350px] lg:rounded-t-[150px] xl:rounded-t-[150px] lg:max-w-[330px] xl:max-h-[350px] xl:max-w-[330px]"
              src="/hero36.jpg"
              alt="logo"
            />
          </div>

          <div className=" bg-white rounded-[15px] h-auto max-w-[340px] md:max-w-[450px]  mt-[-40px]  py-3 px-3 justify-center text-center  text-black mx-auto  lg:max-h-[250px] lg:max-w-[290px]">
            <p className="text-green-800 text-[25px] cormorant">
              {" "}
              Body Massage{" "}
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              vel, eius, earum fugit at omnis dolorumaliquid .
            </p>
            <a
              className="text-green-400 underline underline-offset-8 flex justify-center items-center gap-x-2  "
              href="#"
            >
              {" "}
              LEARN MORE <GoArrowRight />{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Service1 = () => {
  return (
    <div className="w-[100%] justify-center items-center py-20 bg-[#fdf5f3] px-10 flex flex-col md:flex-row lg:flex-row xl:flex-row">
      <div className="h-[400px] px-[10px] text-center  rounded-tl-[50px] rounded-br-[50px] py-5 w-[380px] bg-green-900">
        <input
          className="pl-5 bg-inherit text-inherit my-1 rounded-l-[25px] rounded-r-[25px] outline-none py-2 border-white border-solid border-[2px]"
          type="text"
          placeholder="First Name"
        />

        <input
          className="pl-5 bg-inherit text-inherit my-1 rounded-l-[25px] rounded-r-[25px] outline-none py-2 border-white border-solid border-[2px]"
          type="text"
          placeholder="Last Name"
        />

        <input
          className="pl-5 bg-inherit text-inherit my-1 rounded-l-[25px] rounded-r-[25px] outline-none py-2 border-white border-solid border-[2px]"
          type="text"
          placeholder="Email"
        />

        <input
          className="pl-5 bg-inherit text-inherit my-1 rounded-l-[25px] rounded-r-[25px] outline-none py-2 border-white border-solid border-[2px]"
          type="text"
          placeholder="Phone"
        />

        <input
          className="pl-5 h-[100px] bg-inherit text-inherit my-1 rounded-l-[25px] rounded-r-[25px] outline-none border-white border-solid border-[2px]"
          type="text"
          placeholder="Message"
        />

        <button className="max-w-[300px] mt-3 mx-auto px-[5px] py-2 text-[12px] hover:text-white hover:bg-green-400 transition-all ease-in-out duration-200 delay-150  text-green-800 bg-white rounded-[20px] flex justify-evenly items-center">
          JOIN MEMBERSHIP <GoArrowRight />
        </button>
      </div>

      <div className="flex flex-col w-[100%] md:w-[50%] lg-[50%] xl:w-[50%] gap-y-4 px-[30px] py-5">
        <p className="text-green-800 text-[40px] cormorant">Join Membership</p>
        <p className="text-green-700">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem
          expedita sapiente incidunt tempore unde aliquid{" "}
        </p>

        <ul className="list-disc pl-[15px]">
          <li className="text-green-800 text-[14px]">
            Cnsectetur adipiscing elit.
          </li>
          <li className="text-green-800 text-[14px]">
            Proin lobortis sed sapien.
          </li>
          <li className="text-green-800 text-[14px]">Donec tincidunt, quam.</li>
          <li className="text-green-800 text-[14px]">
            dolor sem laoreet orci, quis.
          </li>
          <li className="text-green-800 text-[14px]">
            Vestibulum ipsum tortor.
          </li>
        </ul>

        <p className="text-green-800 text-[40px] cormorant">
          {" "}
          Membership Benifits
        </p>
        <p className="text-green-700">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem
          expedita sapiente incidunt tempore unde aliquid{" "}
        </p>
      </div>
    </div>
  );
};

export const Team = () => {
  return (
    <div className="w-[100%] flex flex-wrap px-auto mt-[-15px] pb-[100px] justify-around items-center bg-[#fdf5f3]">
      <div className="flex flex-col">
        <img
          className="h-[400px] w-[300px] rounded-t-[200px] pt-[50px] "
          src="About11.jpg"
          alt="logo"
        />
        <div className="bg-white h-[160px] w-[260px] mb-7 ml-[20px] mt-[-30px] flex flex-col items-center text-green-900 rounded-[8px] px-5 py-5">
          <p className="text-[30px] cormorant">Melisa Lauren</p>
          <p>Specialist</p>
          <div className="flex flex-row cursor-pointer pt-[20px] gap-x-5">
            <MdWhatsapp />
            <FiInstagram />
            <FiFacebook />
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <img
          className="h-[400px] w-[300px] rounded-t-[200px] pt-[50px] "
          src="About12.jpg"
          alt="logo"
        />
        <div className="bg-white h-[160px] w-[260px] mb-7 ml-[20px] mt-[-30px] flex flex-col items-center text-green-900 rounded-[8px] px-5 py-5">
          <p className="text-[30px] cormorant">Kate Amanda</p>
          <p>Specialist</p>
          <div className="flex cursor-pointer flex-row pt-[20px] gap-x-5">
            <MdWhatsapp />
            <FiInstagram />
            <FiFacebook />
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <img
          className="h-[400px] w-[300px] rounded-t-[200px] pt-[50px] "
          src="About13.jpg"
          alt="logo"
        />
        <div className="bg-white h-[160px] w-[260px] mb-7 ml-[20px] mt-[-30px] flex flex-col items-center text-green-900 rounded-[8px] px-5 py-5">
          <p className="text-[30px] cormorant">Jenny Jane</p>
          <p>Specialist</p>
          <div className="flex cursor-pointer flex-row pt-[20px] gap-x-5">
            <MdWhatsapp />
            <FiInstagram />
            <FiFacebook />
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <img
          className="h-[400px] w-[300px] rounded-t-[200px] pt-[50px] "
          src="About14.jpg"
          alt="logo"
        />
        <div className="bg-white h-[160px] w-[260px] mb-7 ml-[20px] mt-[-30px] flex flex-col items-center text-green-900 rounded-[8px] px-5 py-5">
          <p className="text-[30px] cormorant">Clara Park</p>
          <p>Specialist</p>
          <div className="flex cursor-pointer flex-row pt-[20px] gap-x-5">
            <MdWhatsapp />
            <FiInstagram />
            <FiFacebook />
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <img
          className="h-[400px] w-[300px] rounded-t-[200px] pt-[50px] "
          src="About15.jpg"
          alt="logo"
        />
        <div className="bg-white h-[160px] w-[260px] mb-7 ml-[20px] mt-[-30px] flex flex-col items-center text-green-900 rounded-[8px] px-5 py-5">
          <p className="text-[30px] cormorant">Smith Mattin</p>
          <p>Specialist</p>
          <div className="flex cursor-pointer flex-row pt-[20px] gap-x-5">
            <MdWhatsapp />
            <FiInstagram />
            <FiFacebook />
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <img
          className="h-[400px] w-[300px] rounded-t-[200px] pt-[50px] "
          src="About16.jpg"
          alt="logo"
        />
        <div className="bg-white h-[160px] w-[260px] mb-7 ml-[20px] mt-[-30px] flex flex-col items-center text-green-900 rounded-[8px] px-5 py-5">
          <p className="text-[30px] cormorant">Lane Stark</p>
          <p>Specialist</p>
          <div className="flex cursor-pointer flex-row pt-[20px] gap-x-5">
            <MdWhatsapp />
            <FiInstagram />
            <FiFacebook />
          </div>
        </div>
      </div>
    </div>
  );
};

export const Discount = () => {
  return (
    <div className="mt-[-15px] h-auto py-20 px-[40px] bg-[#fdf5f3] w-[100%] flex flex-col md:flex-row lg:flex-row xl:flex-row  ">
      <div className="w-[100%] md:w-[50%] lg:w-[50%] xl:w-[50%] flex flex-col gap-y-3 ">
        <div className="h-[40px] w-[90%] flex justify-between items-center px-[20px] bg-green-900 text-white rounded-l-[40px] rounded-r-[40px]">
          Can i get special discount? <FiArrowUp />
        </div>

        <p className="text-green-800">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex culpa rem
          molestiae quis expedita accusantium illum officiis aut unde eligendi.
          Sunt laborum nesciunt in necessitatibus maiores quia explicabo soluta
          cupiditate.
        </p>

        <div className="h-[40px] w-[90%] flex justify-between items-center px-[20px] text-green-900 border-solid border-[2px] border-green-800 rounded-l-[40px] rounded-r-[40px]">
          How long for a body massage? <FiArrowDown />
        </div>

        <div className="h-[40px] w-[90%] flex justify-between items-center px-[20px] text-green-900 border-solid border-[2px] border-green-800 rounded-l-[40px] rounded-r-[40px]">
          Do you have skin specialist? <FiArrowDown />
        </div>

        <div className="h-[40px] w-[90%] flex justify-between items-center px-[20px] text-green-900 border-solid border-[2px] border-green-800 rounded-l-[40px] rounded-r-[40px]">
          how much for specialist consultation? <FiArrowDown />
        </div>

        <div className="h-[40px] w-[90%] flex justify-between items-center px-[20px] text-green-900 border-solid border-[2px] border-green-800 rounded-l-[40px] rounded-r-[40px]">
          Can i pay with paypal or Visa? <FiArrowDown />
        </div>
      </div>

      <div className="w-[100%] md:w-[50%] lg:w-[50%] xl:w-[50%] px-[30px] flex flex-col justify-center">
        <p className="text-green-800 text-[40px] cormorant">
          Frequently Asked Questions
        </p>
        <p className="text-green-800">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad
          exercitationem non laborum nobis quo suscipit molestias atque impedit,
          illum sed voluptas velit odit, dignissimos, quod rem eaque voluptatem.
          Ratione, deserunt!
        </p>
        <button className="flex justify-around items-center mt-8 h-[40px] w-[150px] bg-green-800 text-white rounded-l-[40px] rounded-r-[40px]">
          VIEW MORE <GoArrowRight />
        </button>
      </div>
    </div>
  );
};

export const Contact = () => {
  return (
    <div className="w-[100%] flex flex-col py-20 px-[30px] bg-[#fdf5f3] md:flex-row lg:flex-row xl:flex-row">
      <div className="w-[100%] md:w-[50%] lg:w-[50%] xl:w-[50%] flex flex-col px-[20px] justify-center">
        <p className="text-green-800 text-[40px] cormorant">Get in Touch</p>
        <p className="text-green-800">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ea
          eos nostrum aut in aperiam accusamus vero totam repudiandae explicabo
          dolore repellendus, cupiditate, unde earum laborum tenetur. Commodi,
          cumque mollitia?
        </p>
        <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row justify-between gap-y-6 gap-x-5">
          <div className="flex flex-col gap-y-4">
            <p className="text-green-800 text-[25px] cormorant">Texas</p>
            <p className="text-green-800 flex gap-x-3 ">
              {" "}
              <GoLocation /> 140 Home Street, Plano{" "}
            </p>
            <p className="text-green-800 flex gap-x-3 ">
              {" "}
              <FiPhoneCall /> +1234 567 89{" "}
            </p>
            <p className="text-green-800 flex gap-x-3 ">
              {" "}
              <MdEmail /> example@gmail.com{" "}
            </p>
          </div>

          <div className="flex flex-col gap-y-4">
            <p className="text-green-800 text-[25px] cormorant">Washington</p>
            <p className="text-green-800 flex gap-x-3 ">
              {" "}
              <GoLocation /> 3071 conifer Drive, seatle{" "}
            </p>
            <p className="text-green-800 flex gap-x-3 ">
              {" "}
              <FiPhoneCall /> +1234 567 89{" "}
            </p>
            <p className="text-green-800 flex gap-x-3 ">
              {" "}
              <MdEmail /> example@gmail.com{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="w-[100%] md:w-[50%] lg:w-[50%] xl:w-[50%] h-auto py-6 my-8 px-[10px] text-center justify-center  rounded-tl-[50px] rounded-br-[50px] pt-5 bg-green-900">
        <input
          className="pl-5 bg-inherit text-inherit my-1 rounded-l-[25px] rounded-r-[25px] outline-none py-2 border-white border-solid border-[2px] mr-4"
          type="text"
          placeholder="First Name"
        />

        <input
          className="pl-5 bg-inherit text-inherit my-1 rounded-l-[25px] rounded-r-[25px] outline-none py-2 border-white border-solid border-[2px]"
          type="text"
          placeholder="Last Name"
        />

        <input
          className="pl-5 bg-inherit text-inherit my-1 rounded-l-[25px] rounded-r-[25px] outline-none py-2 border-white border-solid border-[2px] mr-4"
          type="text"
          placeholder="Email"
        />

        <input
          className="pl-5 bg-inherit text-inherit my-1 rounded-l-[25px] rounded-r-[25px] outline-none py-2 border-white border-solid border-[2px]"
          type="text"
          placeholder="Phone"
        />

        <input
          className="pl-5 h-[100px] max-w-[500px] bg-inherit text-inherit my-1 rounded-l-[25px] rounded-r-[25px] outline-none border-white border-solid border-[2px]"
          type="text"
          placeholder="Message"
        />

        <button className="max-w-[300px] mt-3 mx-auto px-[5px] py-2 text-[12px] hover:text-white hover:bg-green-400 transition-all ease-in-out duration-200 delay-150  text-green-800 bg-white rounded-[20px] flex justify-evenly items-center">
          JOIN MEMBERSHIP <GoArrowRight />
        </button>
      </div>
    </div>
  );
};
