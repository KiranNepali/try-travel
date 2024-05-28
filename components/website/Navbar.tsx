"use client";
import React, { useRef, useState } from "react";
import LogoImage from "@/public/travel-logo.png";
import Image from "next/image";
import gsap from "gsap";
import Link from "next/link";

type Props = {};

function Navbar({}: Props) {
  // for navbar animation
  const sideNavRef = useRef(null);
  const [openNav, setOpenNav] = useState(false);

  const handleHam = () => {
    const tl1 = gsap.timeline();
    if (!openNav) {
      // gsap.to([".ham1", ".ham2"], {
      //   backgroundColor: "black",
      // });
      tl1.to(
        ".ham1",
        {
          rotate: "45deg",
          duration: "0.3",
          transformOrigin: "center",
        },
        "ham"
      );
      tl1.to(
        ".ham2",
        {
          top: "40%",
          rotate: "-45deg",
          duration: "0.3",
          transformOrigin: "center",
        },
        "ham"
      );
      tl1.to(
        sideNavRef.current,
        {
          display: "flex",
          right: "0",
          duration: 0.7,
          ease: "power4.inOut",
        },
        "ham"
      );
      tl1.to(
        ".nav-links",
        {
          delay: 0.1,
          opacity: 1,
          marginLeft: 0,
          marginTop: 0,
          stagger: 0.2,
          duration: 1,
          ease: "power4.inOut",
        },
        "ham"
      );
      setOpenNav(true);
    }
    if (openNav) {
      const tl2 = gsap.timeline();
      gsap.to([".ham1", ".ham2"], {
        delay: 1,
        backgroundColor: "white",
      });
      gsap.to(".nav-links", {
        marginLeft: "-30px",
        marginTop: "30px",
        opacity: 0,
        y: "0",
        x: "0",
        stagger: 0.2,
        duration: 1,
        ease: "power4.inOut",
      });
      tl2.to(
        ".ham1",
        {
          rotate: "0",
          duration: "0.3",
          transformOrigin: "center",
        },
        "ham"
      );
      tl2.to(
        ".ham2",
        {
          top: "80%",
          rotate: "0",
          duration: "0.3",
          transformOrigin: "center",
        },
        "ham"
      );
      tl2.to(sideNavRef.current, {
        delay: 0.5,
        right: "-100%",
        display: "none",
        duration: 0.7,
        ease: "power4.inOut",
      });

      setOpenNav(false);
    }
  };

  // hover side nav links animation
  const handleHoverNav = (id: number) => {
    gsap.to(`.hover-link-${id}`, {
      y: "-36px",
    });
  };

  const handleLeaveNav = (id: number) => {
    gsap.to(`.hover-link-${id}`, {
      y: "0",
    });
  };

  return (
    <div>
      {/* top  */}
      <div className="w-full bg-transparent  text-white  px-[10%] z-[1000] fixed top-0 left-0 h-[6rem]  flex justify-between items-center">
        {/* logo  */}
        <Link  href="/" className="font-semibold text-sm w-[8.5rem] opacity-[0.9]  h-[2rem] cursor-pointer  overflow-hidden">
          <Image
            src={LogoImage}
            alt="travel-logo"
            className="w-full h-full  object-cover object-center"
          ></Image>
        </Link>
        {/* ham  */}
        <div
          onClick={handleHam}
          className="flex relative justify-center hover:scale-110 duration-150 items-center w-[1.5rem] md:w-[2rem] cursor-pointer py-2 flex-col gap-1"
        >
          <span className="ham1 absolute top-[40%] left-[50%] -translate-x-[50%] -translate-y-[50%] bg-zinc-100 w-full h-[2px]"></span>
          <span className="ham2  absolute top-[70%] left-[50%] -translate-x-[50%] -translate-y-[50%]  bg-zinc-100 w-full h-[2px]"></span>
        </div>
      </div>

      {/* side nav  */}
      <div
        ref={sideNavRef}
        className="w-full h-screen  justify-center items-center hidden text-white z-[500] fixed top-0 right-[-100%] bg-black"
      >
        <div className="flex justify-center items-center   flex-col h-full w-full">
          <div className="flex flex-col md:flex-row justify-center h-full items-center gap-[4%] w-full text-3xl font-medium">
            {["Home", "Services", "Treks", "Testimonials", "Contact"].map(
              (item, index) => (
                <div
                  key={index}
                  onMouseEnter={() => handleHoverNav(index)}
                  onMouseLeave={() => handleLeaveNav(index)}
                  className="ml-[-30px] mt-[30px] nav-links opacity-0 flex justify-center items-center h-[36px] overflow-hidden"
                >
                  <div
                    className={`nav-link-container hover-link-${index} flex w-full h-full flex-col`}
                  >
                    <span className="cursor-pointer">{item}</span>
                    <span className="cursor-pointer bg-clip-text text-transparent bg-gradient-to-t from-[#97efe9]  via-[#e34df4] to-[#6e5ce9] ">
                      {item}
                    </span>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
