"use client";
import { useGSAP } from "@gsap/react";
import { gsap, Expo } from "gsap";
import React, { useEffect, useReducer, useRef, useState } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Icon } from "@iconify/react";

// images
import HeroMustangBg from "@/public/HeroImage/HeroBg1.png";
import HeroPhoksundoBg from "@/public/HeroImage/HeroPhoksundo.png";
import HeroEverestBg from "@/public/HeroImage/HeroEverest.png";
import HeroTilichoBg from "@/public/HeroImage/HeroTilicho.png";
import HeroPersonImage from "@/public/HeroImage/HeroPerson.png";

import Image from "next/image";
import PopularTrek from "./Home/PopularTrek";
import Service from "./Home/Service";
import Trending from "./Home/Trending";
import Footer from "./Footer";
import HeroIntro from "./Home/HeroIntro";
import ParallaxTestimonial from "./Home/ParallaxTestimonial";
import Upcoming from "./Home/Upcoming";
import Affiliations from "./Home/Affiliation";
import Contact from "./Home/Contact";
import HomeMain from "./Home/HomeMain";
type Props = {};

gsap.registerPlugin(ScrollTrigger);
export default function Hero({}: Props) {
  const mainContainerRef = useRef(null);
  const pinContainerRef = useRef(null);
  const slider2Ref = useRef(null);
  const openContainerRef = useRef<HTMLDivElement>(null);

  const { contextSafe } = useGSAP();

  const handleScroll1 = contextSafe((e: any) => {
    const delta = e.deltaY;
    if (delta > 0) {
      const tl = gsap.timeline();
      tl.to(
        ".slide1",
        {
          x: "-100%",
          duration: 2,
          ease: "power4",
        },
        ".slide1"
      );
      tl.to(
        ".slide2",
        {
          x: "-100%",
          duration: 2,
          ease: "power4",
        },
        ".slide1"
      );
      tl.to(
        ".slide3",
        {
          x: "-100%",
          duration: 2,
          ease: "power4",
        },
        ".slide1"
      );
      tl.to(
        ".slide4",
        {
          x: "-100%",
          duration: 2,
          ease: "power4",
        },
        ".slide1"
      );

      // text animation
      gsap.to(".slide2Text", {
        opacity: 1,
        duration: 0.8,
        top: "30%",
        ease: "power4.inOut",
      });
      gsap.to(".slide1Text", {
        opacity: 0,
        duration: 0.3,
        top: "60%",
        ease: "power4.inOut",
      });
    }
  });

  const handleScroll2 = contextSafe((e: any) => {
    const delta = e.deltaY;
    // scroll down
    if (delta > 0) {
      gsap.to(".slide1", {
        x: "-200%",
        duration: 2,
        ease: "power4",
      });
      gsap.to(".slide2", {
        x: "-200%",
        duration: 2,
        ease: "power4",
      });
      gsap.to(".slide3", {
        x: "-200%",
        duration: 2,
        ease: "power4",
      });

      gsap.to(".slide4", {
        x: "-200%",
        duration: 2,
        ease: "power4",
      });

      // text animation
      gsap.from(".slide3Text", {
        opacity: 0,
        duration: 0.8,
        top: "50%",
        ease: Expo.easeInOut,
      });

      // text animation
      gsap.to(".slide3Text", {
        opacity: 1,
        duration: 0.8,
        top: "30%",
        ease: "power4.inOut",
      });
      gsap.to(".slide2Text", {
        opacity: 0,
        duration: 0.3,
        top: "60%",
        ease: "power4.inOut",
      });
    }
    // scroll up
    if (delta < 0) {
      gsap.to(".slide1", {
        x: "0",
        duration: 2,
        ease: "power4",
      });
      gsap.to(".slide2", {
        x: "0",
        duration: 2,
        ease: "power4",
      });
      gsap.to(".slide3", {
        x: "0",
        duration: 2,
        ease: "power4",
      });
      gsap.to(".slide4", {
        x: "0",
        duration: 2,
        ease: "power4",
      });

      // text animation
      gsap.to(".slide1Text", {
        opacity: 1,
        duration: 0.8,
        top: "30%",
        ease: "power4.inOut",
      });
      gsap.to(".slide2Text", {
        opacity: 0,
        duration: 0.3,
        top: "60%",
        ease: "power4.inOut",
      });
    }
  });

  const handleScroll3 = contextSafe((e: any) => {
    const delta = e.deltaY;

    // scroll down
    if (delta > 0) {
      gsap.to(".slide1", {
        x: "-300%",
        duration: 2,
        ease: "power4",
      });
      gsap.to(".slide2", {
        x: "-300%",
        duration: 2,
        ease: "power4",
      });
      gsap.to(".slide3", {
        x: "-300%",
        duration: 2,
        ease: "power4",
      });
      gsap.to(".slide4", {
        x: "-300%",
        duration: 2,
        ease: "power4",
      });

      // text animation
      gsap.to(".slide4Text", {
        opacity: 1,
        duration: 0.8,
        top: "30%",
        ease: "power4.inOut",
      });
      gsap.to(".slide3Text", {
        opacity: 0,
        duration: 0.3,
        top: "60%",
        ease: "power4.inOut",
      });
    }

    // scroll  up
    if (delta < 0) {
      gsap.to(".slide1", {
        x: "-100%",
        duration: 2,
        ease: "power4",
      });
      gsap.to(".slide2", {
        x: "-100%",
        duration: 2,
        ease: "power4",
      });
      gsap.to(".slide3", {
        x: "-100%",
        duration: 2,
        ease: "power4",
      });
      gsap.to(".slide4", {
        x: "-100%",
        duration: 2,
        ease: "power4",
      });
      // text animation
      gsap.to(".slide3Text", {
        opacity: 0,
        duration: 0.3,
        top: "60%",
        ease: "power4.inOut",
      });
      gsap.to(".slide2Text", {
        opacity: 1,
        duration: 0.8,
        top: "30%",
        ease: "power4.inOut",
      });
    }
  });

  const handleScroll4 = contextSafe((e: any) => {
    const delta = e.deltaY;
    //  scroll down
    if (delta > 0) {
      // gsap.to([".ham1", ".ham2"], {
      //   delay: 0.5,
      //   backgroundColor: "black",
      // });
      gsap.to(openContainerRef.current, {
        // height: "auto",
        top: 0,
        display: "block",
        duration: 1.5,
        ease: "power4",
      });
      gsap.to(".start-button", {
        opacity: 0,
        display: "none",
        duration: 0.3,
        ease: "power4.inOut",
      });
    }

    // scroll ups
    if (delta < 0) {
      gsap.to(".slide1", {
        x: "-200%",
        duration: 2,
        ease: "power4",
      });
      gsap.to(".slide2", {
        x: "-200%",
        duration: 2,
        ease: "power4",
      });
      gsap.to(".slide3", {
        x: "-200%",
        duration: 2,
        ease: "power4",
      });
      gsap.to(".slide4", {
        x: "-200%",
        duration: 2,
        ease: "power4",
      });
      //  text animation
      gsap.to(".slide4Text", {
        opacity: 0,
        duration: 0.3,
        top: "60%",
        ease: "power4.inOut",
      });
      gsap.to(".slide3Text", {
        opacity: 1,
        duration: 0.8,
        top: "30%",
        ease: "power4.inOut",
      });
    }
  });

  // useGSAP(() => {
  //   gsap.to(".service-ref", {
  //     display: "block",
  //     scrollTrigger: {
  //       trigger: openContainerRef.current,
  //       start: "10% top",
  //       end: "10rem top",
  //       markers: true,
  //       scrub: true,
  //     },
  //   });
  // });

  const handleWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    const target = openContainerRef.current;
    if (!target) return;

    const isAtTop = target.scrollTop === 0;
    const isScrollingUp = event.deltaY < 0;

    if (isAtTop && isScrollingUp) {
      handleAnimation();
    }
  };

  const handleAnimation = () => {
    console.log("Animation function executed");
    const tl = gsap.timeline();
    tl.to(openContainerRef.current, {
      top: "100%",
      // display: "none",
      duration: 1.5,
      ease: "power4",
    });
  };

  return (
    <>
      {/*main div */}
      <div
        ref={mainContainerRef}
        className="w-full relative flex overflow-hidden  text-nowrap  overflow-x-hidden bg-black text-zinc-100 h-screen"
      >
        <div className=" hero-person absolute w-[20rem] md:w-[23rem] pointer-events-none bottom-0 z-[30] left-[50%] -translate-x-[50%]">
          <Image
            src={HeroPersonImage}
            className="object-cover object-center w-full"
            alt="hero-person"
          ></Image>
        </div>
        {/* pin */}
        <div className="w-full relative overflow-hidden h-screen flex">
          {/* slide 1  */}
          <div
            onWheel={handleScroll1}
            className="min-w-[100vw] slide1 h-full relative  flex justify-center items-center"
          >
            <span className="text-[3rem] z-[35]  md:text-[8rem] slide1Text  absolute top-[30%] left-[50%] -translate-x-[50%] -translate-y-[50%]  font-black">
              EVEREST
            </span>
            <div className="w-full h-screen   overflow-hidden">
              <Image
                src={HeroEverestBg}
                alt="everest-image"
                className="w-full h-full object-cover object-center"
              ></Image>
              <div className="absolute top-0 left-0 w-full h-screen bg-black opacity-[0.4] z-[30]"></div>
            </div>
          </div>

          {/* slide 2  */}
          <div
            onWheel={handleScroll2}
            ref={slider2Ref}
            className="min-w-[100vw] slide2  h-full relative  flex justify-center items-center"
          >
            <span className="text-[3rem] z-[35] md:text-[8rem] slide2Text opacity-0  absolute top-[70%] left-[50%] -translate-x-[50%] -translate-y-[50%] slider2Text font-black">
              PHOKSUNDO
            </span>

            <div className="w-full h-screen   overflow-hidden">
              <Image
                src={HeroPhoksundoBg}
                alt="everest-image"
                className="w-full h-full object-cover object-center"
              ></Image>
              <div className="absolute top-0 left-0 w-full h-screen bg-black opacity-[0.4] z-[30]"></div>

            </div>
          </div>

          {/* slide 3  */}
          <div
            onWheel={handleScroll3}
            className="slide3  min-w-[100vw] relative h-full flex justify-center items-center"
          >
            <span className="text-[3rem] z-[35] md:text-[8rem] slide3Text opacity-0 absolute top-[60%] left-[50%] -translate-x-[50%] -translate-y-[50%]  font-black">
              MUSTANG
            </span>
            <div className="w-full h-screen  overflow-hidden">
              <Image
                src={HeroMustangBg}
                alt="everest-image"
                className="w-full h-full object-cover object-center"
              ></Image>
              <div className="absolute top-0 left-0 w-full h-screen bg-black opacity-[0.4] z-[30]"></div>

            </div>
          </div>

          {/* slide 4  */}
          <div
            onWheel={handleScroll4}
            className="min-w-[100vw] slide4 relative h-full  flex justify-center items-center"
          >
            <span className="text-[3rem] z-[35] md:text-[8rem] slide4Text opacity-0 absolute top-[60%] left-[50%] -translate-x-[50%] -translate-y-[50%]  font-black">
              TILICHO
            </span>
            <div className=" w-full h-screen  overflow-hidden">
              <Image
                src={HeroTilichoBg}
                alt="everest-image"
                className="w-full h-full object-cover object-center"
              ></Image>
              <div className="absolute top-0 left-0 w-full h-screen bg-black opacity-[0.4] z-[30]"></div>
            </div>
          </div>
        </div>

        <HomeMain
          openContainerRef={openContainerRef}
          handleWheel={handleWheel}
        />
      </div>
    </>
  );
}
