"use client";
import React, { useRef, useState } from "react";
import { Icon } from "@iconify/react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, FreeMode, Autoplay } from "swiper/modules";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "@/components/ui/card";
import TrekDetailMain from "../TrekDetail/TrekDetailMain";
import gsap from "gsap";
import Link from "next/link";

type Props = {};

function PopularTrek({}: Props) {
  return (
    <>
      <div className="w-full text-white h-full bg-black">
        <div className="w-11/12   mx-auto overflow-hidden h-screen px-5 flex justify-center items-center flex-col">
          {/* title  */}
          <div className="w-full mb-[2rem]  flex justify-between  items-start text-nowrap">
            <span className=" text-white w-full text-center   text-2xl md:text-7xl trackong-wider">
              Our most popular trekking
            </span>
            {/* <button className="bg-white h-[2.8rem] text-sm font-medium rounded-full w-[8rem] hover:bg-black border-2 text-black hover:text-white hover:border-white border-black duration-200">
              View all
            </button> */}
          </div>

          <Swiper
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            loop={true}
            breakpoints={{
              924: {
                slidesPerView: 2,
                spaceBetween: 15,
              },

              1256: {
                slidesPerView: 4,
                spaceBetween: 15,
              },
              1576: {
                slidesPerView: 5,
                spaceBetween: 15,
              },
            }}
            spaceBetween={50}
            freeMode={true}
            pagination={{
              dynamicBullets: true,
            }}
            modules={[FreeMode, Pagination, Autoplay]}
            className="w-full flex justify-start items-start "
          >
            {PopularTrekData.map((item, index) => (
              <SwiperSlide
                key={index}
                className="h-full mt-[-3rem]   flex justify-start items-start"
              >
                <CardContainer className=" h-full flex justify-start items-center rounded-xl cursor-pointer">
                  <Link href="/product_detail">
                    <CardBody className="flex w-full h-[30rem] flex-col gap-2">
                      <CardItem
                        translateZ="100"
                        className="w-full h-[95%] rounded-3xl overflow-hidden"
                      >
                        <img
                          src={item.img}
                          alt={item.name}
                          className="w-full h-full object-cover object-center  group-hover/card:shadow-xl"
                        ></img>
                      </CardItem>

                      <div className="flex gap-2 w-full">
                        {/* desc  */}
                        <div className="flex flex-col gap-1">
                          <span className="font-semibold text-nowrap text-white text-sm">
                            {item.name}
                          </span>
                          {/* distance  */}
                          <span className="text-[12px] font-semibold text-zinc-300">
                            {item.distance}
                          </span>

                          {/* days */}
                          <span className="text-[10px] font-semibold text-zinc-300">
                            7 days
                          </span>
                          {/* rating  */}
                          <div className="flex gap-1 text-white w-full justify-start items-center">
                            <Icon icon="material-symbols:star" />
                            <Icon icon="material-symbols:star" />
                            <Icon icon="material-symbols:star" />
                            <Icon icon="material-symbols:star" />
                          </div>
                        </div>
                        {/* price  */}
                        <span className="w-full text-end text-[12px] font-semibold text-zinc-500  justify-center  items-end">
                          {item.price}
                        </span>
                      </div>
                    </CardBody>
                  </Link>
                </CardContainer>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default PopularTrek;

const PopularTrekData = [
  {
    id: 1,
    img: "https://i.pinimg.com/564x/4b/76/cb/4b76cb130e193c6b38b5f6d626850013.jpg",
    name: "Annapurna Base Camp",
    distance: "120 km",
    rating: "5",
    price: "Rs. 25000",
    discount: "Rs. 2500", // 10% of 25000
  },
  {
    id: 2,
    img: "https://i.pinimg.com/564x/af/1e/d5/af1ed5d91e1a18772a1627eea0218682.jpg",
    name: "Everest Base Camp",
    distance: "130 km",
    rating: "4.8",
    price: "Rs. 30000",
    discount: "Rs. 4500", // 15% of 30000
  },
  {
    id: 3,
    img: "https://i.pinimg.com/564x/0b/5c/0c/0b5c0c2b46fd34c32e7033d1adcec783.jpg",
    name: "Manaslu Circuit",
    distance: "177 km",
    rating: "4.7",
    price: "Rs. 22000",
    discount: "Rs. 2640", // 12% of 22000
  },
  {
    id: 4,
    img: "https://i.pinimg.com/564x/8b/65/62/8b6562e9c1f5e60d45384f6955df228b.jpg",
    name: "Langtang Valley",
    distance: "75 km",
    rating: "4.5",
    price: "Rs. 18000",
    discount: "Rs. 1440", // 8% of 18000
  },
  {
    id: 5,
    img: "https://i.pinimg.com/564x/f7/a8/c9/f7a8c98c77627e8ab6e2c5e97d4a232d.jpg",
    name: "Gokyo Lakes Trek",
    distance: "92 km",
    rating: "4.6",
    price: "Rs. 27000",
    discount: "Rs. 2700", // 10% of 27000
  },
];
