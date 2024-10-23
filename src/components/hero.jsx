"use client";

// import Image from 'next/image';

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";

import React from "react";
import { GoArrowRight } from "react-icons/go";

export const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center py-8 w-[100%] pl-[40px]  md:pl-[80px] lg:pl-[100px] sm:justify-between md:justify-between lg:justify-between md:flex-row lg:flex-row xl:flex-row bg-green-800">
      <div className="w-[100%] pr-[40px] md:w-[50%] lg:w-[50%] xl:w-[50%] flex-col items-center">
        <div>
          <div className="text-white xl:pr-8  lg:pr-8 text-[30px] sm:text-[30px] md:text-[40px] ">
            <p className="cormorant">A whole new</p>
            <img
              className="max-w-[250px] z-1 mt-[-50px]"
              src="/img01.png"
              alt="style-img"
            />
            <p className="cormorant">world, a whole</p>
            <p className="cormorant">new look</p>
            <img
              className="max-w-[200px] z-1"
              src="/img02.png"
              alt="style-img"
            />
          </div>
        </div>
        <div className=" text-white text-[16px]">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consequuntur dolor laboriosam vero sint. Eos nostrum dignissimos
            aliquid ipsum! Sequi iure est optio eum voluptas! Beatae cum non
            voluptates consequatur ad.
          </p>
        </div>

        <button className="max-w-[250px] text-[12px] mt-10 gap-3 px-4 py-1 hover:text-white hover:bg-green-400 transition-all ease-in-out duration-200 delay-150  text-green-800 bg-white rounded-[20px] flex justify-evenly items-center">
          DISCOVER MORE <GoArrowRight />
        </button>
      </div>

      <div className="w-[100%] md:w-[500px] md:flex md:justify-between md:flex-row md:gap-2 lg:w-[550px] lg:justify-between lg:flex-row lg:gap-2 xl:w-[600px] hidden xl:flex lg:flex xl:flex-row  xl:justify-between">
        <Swiper
          spaceBetween={5}
          slidesPerView={2.5}
          navigation={false}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          // className = 'w-[80%]'
          loop={true}
          modules={[Pagination, Navigation]}
        >
          <SwiperSlide>
            <img
              className="h-[380px] w-[200px] rounded-t-[100px]"
              src="/hero1.jpeg"
              alt="logo"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="h-[380px] w-[200px] rounded-t-[100px]"
              src="/hero2.jpg"
              alt="logo"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="h-[380px] w-[200px] rounded-t-[100px]"
              src="/hero3.jpeg"
              alt="logo"
            />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="w-[100%] pt-[50px] flex flex-col justify-center items-center md:hidden lg:hidden xl:hidden">
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          navigation={false}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          className = 'w-[80%]'
          loop={true}
          modules={[Pagination, Navigation]}
        >
          <SwiperSlide>
            <img
              className="h-[400px] w-[300px] rounded-t-[250px]"
              src="/hero1.jpeg"
              alt="logo"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="h-[400px] w-[300px] rounded-t-[250px]"
              src="/hero2.jpg"
              alt="logo"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="h-[400px] w-[300px] rounded-t-[250px]"
              src="/hero3.jpeg"
              alt="logo"
            />
          </SwiperSlide>
        </Swiper>
      </div>
      
    </div>
  );
};

export const Hero1 = () => {
  return (
    <div className="flex flex-col pr-[30px] gap-x-4 justify-center pb-[150px] items-center pt-[150px] max-w-[1400px] pl-[40px]  md:pl-[80px] lg:pl-[100px] sm:justify-between md:justify-between lg:justify-between md:flex-row lg:flex-row xl:flex-row bg-[#fdf5f3]">
      <div className="h-[400px] w-[300px]  ">
        <img
          className="h-[400px] w-[300px] rounded-t-[150px]"
          src="/hero11.jpg"
          alt=""
        />
      </div>

      <div className="h-[400px] w-[300px] flex flex-col justify-center items-center ">
        <p className="text-green-500">Alive every moment</p>
        <p className="text-[35px] text-center mb-14 cormorant">
          Beauty is all about you.
        </p>
        <img
          className="max-w-[150px] z-1 mt-[-90px]"
          src="/img01.png"
          alt="style-img"
        />
        <p className="text-green-800">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus at
          ratione amet maxime quod voluptatum.{" "}
        </p>
      </div>

      <div className="h-[400px] w-[300px]  ">
        <img
          className="h-[400px] w-[300px] rounded-t-[150px]"
          src="/hero12.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export const Hero2 = () => {
  return (
    <div className="flex flex-col justify-center items-center py-[100px] max-w-[1400px] pl-[40px]  md:pl-[80px] gap-x-4 lg:pl-[100px] sm:justify-between md:justify-between lg:justify-between md:flex-row lg:flex-row xl:flex-row bg-green-800">
      <div className="w-[100%] xl:w-[30%]  lg:w-[30%]">
        <p className="text-[35px] text-white cormorant">Our Product</p>
        <img
          className="max-w-[120px] mt-[-10px] ml-[70px] z-1"
          src="/img02.png"
          alt="style-img"
        />
        <p className="text-white mr-[20px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <button className="max-w-[250px] text-[12px] mt-7 gap-3 px-4 py-1 hover:bg-green-500 hover:text-white transition-all ease-linear duration-300 delay-150 text-green-800 bg-white rounded-[20px] flex justify-evenly items-center">
          SHOP NOW <GoArrowRight />
        </button>
      </div>

      <div className="w-[100%] xl:w-[70%] px-[20px] lg:w-[70%] hidden xl:flex xl:flex-row xl:justify-between  lg:flex lg:flex-row lg:justify-between ">
        <Swiper
          spaceBetween={10}
          slidesPerView={2.7}
          navigation={false}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          // className = 'w-[80%]'
          loop={true}
          modules={[Pagination, Navigation]}
        >
          <SwiperSlide>
            <img
              className="h-[200px] w-[300px] rounded-t-[200px]"
              src="/hero21.jpg"
              alt="logo"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="h-[200px] w-[300px] rounded-t-[200px]"
              src="/hero22.jpg"
              alt="logo"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="h-[200px] w-[300px] rounded-t-[200px]"
              src="/hero23.jpg"
              alt="logo"
            />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="w-[100%] xl:w-[70%] mt-[40px]  lg:w-[70%]  xl:hidden lg:hidden">
        <Swiper
          spaceBetween={5}
          slidesPerView={1}
          navigation={false}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          // className = 'w-[80%]'
          loop={true}
          modules={[Pagination, Navigation]}
        >
          <SwiperSlide>
            <img
              className="max-h-[400px] max-w-[300px] mx-auto rounded-t-[200px]"
              src="/hero21.jpg"
              alt="logo"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="max-h-[400px] max-w-[300px] mx-auto rounded-t-[200px]"
              src="/hero22.jpg"
              alt="logo"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="max-h-[400px] max-w-[300px] mx-auto rounded-t-[200px]"
              src="/hero23.jpg"
              alt="logo"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export const Hero3 = () => {
  return (
    <div className=" max-w-[1400px] py-[40px] bg-[#fdf5f3]  md:py-[80px] lg:py-[100px] xl:py-[100px]">
      <div className="text-center mb-[50px]">
        <p className="text-green-400 my-5  text-[40px] cormorant">
          Special Service from Chloro
        </p>
        <img
          className="max-w-[150px] z-1 mx-auto mt-[-60px]"
          src="/img01.png"
          alt="style-img"
        />
        <p className="my-[30px] max-w-[400px] text-center mx-auto ">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio
          dolorum suscipit quasi eveniet.
        </p>

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
              <p className="text-green-800 text-[25px] cormorant">
                {" "}
                Face Scrub{" "}
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
              <p className="text-green-800 text-[25px] cormorant">
                Botox Filler
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

      <div className="flex flex-col md:justify-center mx-auto lg:justify-center items-center md:flex-row lg:flex-row xl:flex-row w-[100%] pt-[150px]">
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
    </div>
  );
};

export const Hero4 = () => {
  return (
    <div className="flex flex-col items-center w-[100%] md:flex-row lg:flex-row xl:flex-row">
      <div className="bg-green-800 text-white h-[541px] w-[100%] md:w-[50%] px-[40px] lg:w-[50%] xl:w-[50%] py-[80px] md:px-[80px] lg:px-[100px] xl:px-[150px]  ">
        <p className="text-[32px] cormorant">Review From Our Customers</p>
        <img
          className="max-w-[150px] mt-[-8px] ml-[30px] z-1"
          src="/img02.png"
          alt="style-img"
        />
        <div className="w-[100%] xl:w-[70%] mt-[40px]  lg:w-[70%]">
          <Swiper
            spaceBetween={5}
            slidesPerView={1}
            navigation={false}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            // className = 'w-[80%]'
            loop={true}
            modules={[Pagination, Navigation]}
          >
            <SwiperSlide>
              <div className="flex flex-col">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                  ratione laudantium minima exercitationem pariatur aspernatur
                  ipsam natus possimus blanditiis.
                </p>
                <br />
                <br />
                <p className="text-[20px] cormorant">Nickky Kimso</p>
                <p>Customer</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                  ratione laudantium minima exercitationem pariatur aspernatur
                  ipsam natus possimus blanditiis.
                </p>
                <br />
                <br />
                <p className="text-[20px] cormorant">Jane Smith</p>
                <p>Customer</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                  ratione laudantium minima exercitationem pariatur aspernatur
                  ipsam natus possimus blanditiis.
                </p>
                <br />
                <br />
                <p className="text-[20px] cormorant">Kim Park</p>
                <p>Customer</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                  ratione laudantium minima exercitationem pariatur aspernatur
                  ipsam natus possimus blanditiis.
                </p>
                <br />
                <br />
                <p className="text-[20px] cormorant">Liu Chucu</p>
                <p>Customer</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className="flex bg-gray-300 justify-center items-center h-[541px]  w-[100%] md:w-[50%] lg:w-[50%] xl:w-[50%] py-6 px-4">
        <img
          className="w-[400px] rounded-t-[200px] lg:rounded-t-[60%] xl:rounded-t-[50%] mx-auto"
          src="/hero23.jpg"
          alt="logo"
        />
      </div>
    </div>
  );
};

export const Hero5 = () => {
  return (
    <div className="flex flex-col bg-[#fdf5f3] items-center w-[100%] md:flex-row lg:flex-row xl:flex-row">
      <div className="w-[100%] py-[40px] gap-y-5 flex flex-col justify-around md:w-[50%] lg:w-[50%] xl:w-[50%]">
        <img
          className="max-w-[600px] h-[200px] rounded-r-[100px] px-[20px]"
          src="/hero51.jpg"
          alt="logo"
        />
        <img
          className="h-[100px] w-[100px] absolute mt-[-390px]"
          src="Footer2.png"
          alt=""
        />

        <img
          className="max-w-[600px] h-[200px] rounded-l-[100px] px-[20px]"
          src="/hero52.jpg"
          alt="logo"
        />
      </div>

      <div className="w-[100%] px-[30px] py-[40px] gap-y-4 flex flex-col justify-between md:w-[50%] lg:w-[50%] xl:w-[50%]">
        <p className="text-[35px] text-green-800 cormorant">
          {" "}
          Expert Skincare for Your Beautiful Skin
        </p>
        <p className="text-green-800 text-[14px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
          exercitationem dolorum tempora quisquam laborum ipsam nemo nesciunt
          dolorem veniam amet assumenda, veritatis temporibus tempore mollitia
          saepe dolore velit voluptates impedit?
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
        <a
          className="text-white bg-green-700 hover:bg-white hover:text-green-600 transition-all duration-200 delay-150 h-[40px] w-[150px] rounded-[40px] flex justify-center items-center gap-x-2  "
          href="#"
        >
          {" "}
          LEARN MORE <GoArrowRight />{" "}
        </a>
      </div>
    </div>
  );
};

export const Hero6 = () => {
  return (
    <>
      <div className="w-[100%] h-auto bg-green-700 items-center flex flex-col md:flex-row lg:flex-row xl:flex-row md:h-[400px] lg:h-[400px] xl:h-[400px] ">
        <div className="w-[100%] px-[50px] md:px-[70px] lg:px-[100px] xl:px-[100px] py-[20px] gap-y-10 flex flex-col justify-between md:w-[50%] lg:w-[50%] xl:w-[50%]">
          <p className="text-white text-[35px] cormorant">
            Visit Our Store and Get Our Products
          </p>
          <img className="w-[200px] z-1 mt-[-90px]" src="img02.png" alt="" />
          <p className="text-white">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum cum
            tenetur neque sint, pariatur omnis. Ullam deleniti eveniet minus
            accusantium dolore. Officia est quasi corrupti odit saepe recusandae
            eligendi vitae.
          </p>
          <a
            className="text-green-600 bg-white hover:bg-green-800 hover:text-white transition-all duration-200 delay-150 h-[40px] w-[150px] rounded-[40px] flex justify-center items-center gap-x-2  "
            href="#"
          >
            {" "}
            LEARN MORE <GoArrowRight />{" "}
          </a>
        </div>

        <div className="w-[100%] px-[50px] flex justify-center md:px-[70px] lg:px-[100px] xl:px-[100px] py-[20px] md:w-[50%] lg:w-[50%] xl:w-[50%]">
          <img
            className="w-[80%] h-[420px] rounded-t-[200px] mt-[-20px]"
            src="/hero7.jpg"
            alt=""
          />
        </div>
      </div>

      <div className="w-[100%] h-[100px] gap-x-2 flex justify-center mt-[-85px]">
        <Swiper
          spaceBetween={5}
          slidesPerView={4}
          navigation={false}
          pagination={false}
          scrollbar={{ draggable: true }}
          className="w-[80%] md:w-[40%] lg:w-[40%] xl:w-[30%]"
          loop={true}
          modules={[Pagination, Navigation]}
        >
          <SwiperSlide>
            <img
              className="w-[100px] rounded-t-[50px]"
              src="/hero71.jpg"
              alt=""
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              className="w-[100px] rounded-t-[50px]"
              src="/hero72.jpg"
              alt=""
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              className="w-[100px] rounded-t-[50px]"
              src="/hero73.jpg"
              alt=""
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              className="w-[100px] rounded-t-[50px]"
              src="/hero74.jpg"
              alt=""
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              className="w-[100px] rounded-t-[50px]"
              src="/hero75.jpg"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export const Hero7 = () => {
  return (
    <div className="w-[100%] mt-[-15px] h-[380px] bg-green-800">
      <div className="flex px-[20px] justify-center pt-20 pb-10">
        <p className="text-white text-[40px] cormorant">
          Our Product Also Available At
        </p>
        <img
          className="w-[200px] h-[40px] mt-[5px] z-1 ml-[-200px] "
          src="img01.png"
          alt=""
        />
      </div>

      <div className="flex text-white">
        <Swiper
          spaceBetween={5}
          slidesPerView={4}
          navigation={false}
          pagination={false}
          scrollbar={{ draggable: true }}
          className="w-[80%]"
          loop={false}
          modules={[Pagination, Navigation]}
        >
          <SwiperSlide>
            <img className="" src="/logo1.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="" src="/logo2.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="" src="/logo3.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="" src="/logo4.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="" src="/logo5.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="" src="/logo6.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="" src="/logo7.png" alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export const Hero8 = () => {
  return (
    <div className="flex flex-col bg-[#fdf5f3]">
      <div className="flex flex-col  pt-[80px]">
        <p className="text-[40px] text-center cormorant">Blog and News</p>
        <img className="z-1  w-[100px] mx-auto" src="img02.png" alt="" />
        <p className="text-green-600 text-center px-[20px]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam
          Lorem ipsum dolor sit
        </p>
      </div>

      <div className="flex justify-around flex-wrap  py-[60px]">
        <div className="w-[300px] h-auto gap-y-2 my-5  bg-green-800">
          <img
            className="w-[100%] hover:skew-x-6 transition-all ease-linear duration-200 delay-100 h-[200px] rounded-xl px-2 py-2"
            src="hero81.jpg"
            alt=""
          />
          <p className="text-white text-[20px] px-5 py-3 cormorant">
            A photographer shows the Beauty transition
          </p>
          <a
            className="text-white text-[12px] pl-5 pb-5 underline underline-offset-8 flex justify-start items-center gap-x-2  "
            href="#"
          >
            {" "}
            LEARN MORE <GoArrowRight />{" "}
          </a>
        </div>

        <div className="w-[300px]  h-auto gap-y-2 my-5  bg-green-800">
          <img
            className="w-[100%] hover:skew-x-6 transition-all ease-linear duration-200 delay-100  h-[200px] rounded-xl px-2 py-2"
            src="hero82.jpg"
            alt=""
          />
          <p className="text-white text-[20px] px-5 py-3 cormorant">
            A photographer shows the Beauty transition
          </p>
          <a
            className="text-white text-[12px] pl-5 pb-5 underline underline-offset-8 flex justify-start items-center gap-x-2  "
            href="#"
          >
            {" "}
            LEARN MORE <GoArrowRight />{" "}
          </a>
        </div>

        <div className="w-[300px] h-auto gap-y-2 my-5  bg-green-800">
          <img
            className="w-[100%] hover:skew-x-6 transition-all ease-linear duration-200 delay-100  h-[200px] rounded-xl px-2 py-2"
            src="hero83.jpg"
            alt=""
          />
          <p className="text-white text-[20px] px-5 py-3 cormorant">
            A photographer shows the Beauty transition
          </p>
          <a
            className="text-white text-[12px] pl-5 pb-5 underline underline-offset-8 flex justify-start items-center gap-x-2  "
            href="#"
          >
            {" "}
            LEARN MORE <GoArrowRight />{" "}
          </a>
        </div>
      </div>
    </div>
  );
};
