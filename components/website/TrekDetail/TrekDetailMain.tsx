"use client";
import gsap from "gsap";
import React, { useRef, useState } from "react";

type Props = {};

function TrekDetailMain({}: Props) {
  const [openToggleDesc, setOpenToggleDesc] = useState(false);
  const [showDetail, openShowDetail] = useState(false);
  const [selectIndex, setselectIndex] = useState(0);

  // refs
  const itineraryRef = useRef(null);
  const routeRef = useRef(null);
  const inclusionRef = useRef(null);
  const exclusionRef = useRef(null);

  const toggleOpen = (index: number) => {
    if (!openToggleDesc) {
      gsap.to(`.toggle2-${index}`, {
        rotate: "180deg",
        top: "50%",
        duration: 0.5,
        transformOrigin: "center",
      });
      gsap.to(`.open-desc-${index}`, {
        opacity: 1,
        height: "5rem",
        duration: 0.5,
        ease: "power3.inOut",
      });
      setOpenToggleDesc(true);
    } else {
      gsap.to(`.toggle2-${index}`, {
        rotate: "90deg",
        top: "50%",
        duration: 0.5,
        transformOrigin: "center",
      });
      gsap.to(`.open-desc-${index}`, {
        opacity: 0,
        height: "0",
        duration: 0.5,
        ease: "power3.inOut",
      });
      setOpenToggleDesc(false);
    }
  };

  const handleRenderDetail = (index: number) => {
    if (index === 1) {
      gsap.to(routeRef.current, {
        display: "block",
        opacity: 1,
        duration: 0.5,
        ease: "power3.inOut",
      });
      gsap.to(itineraryRef.current, {
        display: "none",
      });
      gsap.to(inclusionRef.current, {
        display: "none",
      });
      gsap.to(exclusionRef.current, {
        display: "none",
      });
    }
    if (index === 2) {
      gsap.to(inclusionRef.current, {
        display: "block",
        opacity: 1,
        duration: 0.5,
        ease: "power3.inOut",
      });
      gsap.to(itineraryRef.current, {
        display: "none",
      });
      gsap.to(routeRef.current, {
        display: "none",
      });
      gsap.to(exclusionRef.current, {
        display: "none",
      });
    }
    if (index === 3) {
      gsap.to(exclusionRef.current, {
        display: "block",
        opacity: 1,
        duration: 0.5,
        ease: "power3.inOut",
      });
      gsap.to(itineraryRef.current, {
        display: "none",
      });
      gsap.to(routeRef.current, {
        display: "none",
      });
      gsap.to(inclusionRef.current, {
        display: "none",
      });
    }
  };

  return (
    <>
      <div className="w-full h-full bg-black text-white">
        <div className="w-full text-white h-[70vh] relative">
          <div className="absolute top-0 left-0 opacity-[0.3]  w-full h-full bg-black z-10"></div>

          <div className="w-full z-0 absolute h-full overflow-hidden">
            <img
              src="https://images.pexels.com/photos/14989389/pexels-photo-14989389/free-photo-of-landscape-photography-of-phewa-lake.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="hero-background-image"
              className="w-full h-full object-cover object-center"
            ></img>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-[10rem] bg-gradient-to-t from-black to-transparent"></div>
          <div className="absolute top-0 left-0 w-full h-[10rem] bg-gradient-to-b from-black to-transparent"></div>
        </div>
        <div className="py-[5rem] w-11/12 flex flex-col gap-5 mx-auto">
          {/* tab  link  */}
          <div className="mx-auto h-[5rem] w-7/12 flex justify-between font-semibold items-center">
            {buttonLabels.map((item, index) => (
              <button
                onClick={() => handleRenderDetail(index)}
                key={item.id}
                className={`select-label-${index} cursor-pointer text-zinc-200  hover:text-white duration-200 rounded-3xl px-5 bg-zinc-900 h-[2.5rem] text-sm`}
              >
                {item.label}
              </button>
            ))}
          </div>
          {/* detail  */}
          <div
            ref={itineraryRef}
            className="w-10/12 mx-auto p-10  bg-zinc-900 rounded-3xl"
          >
            <div className="w-full h-full flex flex-col gap-2">
              {ItineraryData.map((item, index) => (
                <div
                  key={index}
                  className="w-full rounded-3xl py-2  overflow-hidden bg-zinc-950   items-center flex flex-col justify-between px-10"
                >
                  <div className="w-full h-[4rem] flex  justify-between items-center">
                    <div className="flex gap-10 items-center">
                      {/* day */}
                      <div className="font-bold justify-center items-center w-[3rem] leading-none h-[3rem] rounded-full overflow-hidden bg-clip-text text-transparent bg-gradient-to-t from-[#97efe9]  via-[#e34df4] to-[#6e5ce9]  text-[12px] flex flex-col gap-1">
                        <span>Day</span>
                        <span>{item.day}</span>
                      </div>
                      {/* title */}
                      <span className="text-sm font-semibold">
                        {item.title}
                      </span>
                    </div>
                    {/* open */}
                    <div
                      onClick={() => toggleOpen(index)}
                      className="relative w-[3rem] h-[3rem]   overflow-hidden cursor-pointer"
                    >
                      <span className="absolute toggle1 bg-zinc-50 h-[2px] top-[50%] w-[15px] left-[50%] -translate-x-[50%] inline-block"></span>
                      <span
                        className={`absolute toggle2-${index} bg-zinc-50 h-[2px] top-[50%] rotate-90 w-[15px] left-[50%] -translate-x-[50%] inline-block`}
                      ></span>
                    </div>
                  </div>

                  {/* desc  */}
                  <div
                    className={`open-desc-${index} w-full border-t border-zinc-700 h-0 text-sm flex justify-start text-zinc-200 items-center  opacity-0`}
                  >
                    <span className="">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ROUTE MAP  */}
          <div
            ref={routeRef}
            className="w-10/12 opacity-0 hidden mx-auto p-10 h-[80vh] bg-zinc-900 rounded-3xl"
          >
            <div className="w-full rounded-3xl py-2 overflow-hidden h-full bg-zinc-950 items-center flex flex-col justify-between px-10"></div>
          </div>

          {/* exclusions  */}
          <div
            ref={inclusionRef}
            className="w-10/12 opacity-0 hidden mx-auto p-10  bg-zinc-900 rounded-3xl"
          >
            <div className="w-full h-full flex flex-col gap-2">
              {ItineraryData.map((item, index) => (
                <div
                  key={index}
                  className="w-full rounded-3xl py-2  overflow-hidden  bg-zinc-950 items-center flex flex-col justify-between px-10"
                >
                  <div className="w-full h-[4rem] flex justify-between items-center">
                    <div className="flex gap-10 items-center">
                      {/* day */}
                      <div className="font-bold justify-center items-center w-[3rem] leading-none h-[3rem] rounded-full overflow-hidden bg-clip-text text-transparent bg-gradient-to-t from-[#97efe9]  via-[#e34df4] to-[#6e5ce9]  text-[12px] flex flex-col gap-1">
                        <span>Day</span>
                        <span>{item.day}</span>
                      </div>
                      {/* title */}
                      <span className="text-sm font-semibold">
                        {item.title}
                      </span>
                    </div>
                    {/* open */}
                    <div
                      onClick={() => toggleOpen(index)}
                      className="relative w-[3rem] h-[3rem] bg-black overflow-hidden cursor-pointer"
                    >
                      <span className="absolute toggle1 bg-zinc-50 h-[2px] top-[50%] w-[15px] left-[50%] -translate-x-[50%] inline-block"></span>
                      <span
                        className={`absolute toggle2-${index} bg-zinc-50 h-[2px] top-[50%] rotate-90 w-[15px] left-[50%] -translate-x-[50%] inline-block`}
                      ></span>
                    </div>
                  </div>

                  {/* desc  */}
                  <div
                    className={`open-desc-${index} w-full h-0 text-sm flex justify-start text-zinc-200 items-center  opacity-0`}
                  >
                    <span className="">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* exclusion  */}
          <div
            ref={exclusionRef}
            className="w-10/12 opacity-0 hidden mx-auto p-10  bg-zinc-900 rounded-3xl"
          >
            <div className="w-full h-full flex flex-col gap-2">
              {ItineraryData.map((item, index) => (
                <div
                  key={index}
                  className="w-full rounded-3xl py-2  overflow-hidden  bg-zinc-950 items-center flex flex-col justify-between px-10"
                >
                  <div className="w-full h-[4rem] flex justify-between items-center">
                    <div className="flex gap-10 items-center">
                      {/* day */}
                      <div className="font-bold justify-center items-center w-[3rem] leading-none h-[3rem] rounded-full overflow-hidden bg-clip-text text-transparent bg-gradient-to-t from-[#97efe9]  via-[#e34df4] to-[#6e5ce9]  text-[12px] flex flex-col gap-1">
                        <span>Day</span>
                        <span>{item.day}</span>
                      </div>
                      {/* title */}
                      <span className="text-sm font-semibold">
                        {item.title}
                      </span>
                    </div>
                    {/* open */}
                    <div
                      onClick={() => toggleOpen(index)}
                      className="relative w-[3rem] h-[3rem] bg-black overflow-hidden cursor-pointer"
                    >
                      <span className="absolute toggle1 bg-zinc-50 h-[2px] top-[50%] w-[15px] left-[50%] -translate-x-[50%] inline-block"></span>
                      <span
                        className={`absolute toggle2-${index} bg-zinc-50 h-[2px] top-[50%] rotate-90 w-[15px] left-[50%] -translate-x-[50%] inline-block`}
                      ></span>
                    </div>
                  </div>

                  {/* desc  */}
                  <div
                    className={`open-desc-${index} w-full h-0 text-sm flex justify-start text-zinc-200 items-center  opacity-0`}
                  >
                    <span className="">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TrekDetailMain;

const buttonLabels = [
  { id: 1, label: "Itinerary" },
  { id: 2, label: "Route map" },
  { id: 3, label: "Inclusions" },
  { id: 4, label: "Exclusions" },
  { id: 5, label: "Fixed Dates" },
];

const ItineraryData = [
  {
    day: "01",
    title: "Travel To Pokhara From Kathmandu Valley In The West.",
    desc: " Embark on a scenic journey to Pokhara, enjoying the enchanting views of Trishuli and Marsyangdi rivers winding through lush mountains. Pokhara awaits with its serene lakes and majestic Himalayan backdrop, promising anunforgettable adventure in a tourist haven.",
  },
  {
    day: "02",
    title: "Explore the lakes and caves in Pokhara.",
    desc: " Embark on a scenic journey to Pokhara, enjoying the enchanting views of Trishuli and Marsyangdi rivers winding through lush mountains. Pokhara awaits with its serene lakes and majestic Himalayan backdrop, promising anunforgettable adventure in a tourist haven.",
  },
  {
    day: "03",
    title: "Visit the Peace Pagoda and enjoy the mountain views.",
    desc: " Embark on a scenic journey to Pokhara, enjoying the enchanting views of Trishuli and Marsyangdi rivers winding through lush mountains. Pokhara awaits with its serene lakes and majestic Himalayan backdrop, promising anunforgettable adventure in a tourist haven.",
  },
  {
    day: "04",
    title: "Hike to Sarangkot for sunrise.",
    desc: " Embark on a scenic journey to Pokhara, enjoying the enchanting views of Trishuli and Marsyangdi rivers winding through lush mountains. Pokhara awaits with its serene lakes and majestic Himalayan backdrop, promising anunforgettable adventure in a tourist haven.",
  },
  {
    day: "05",
    title: "Return to Kathmandu.",
    desc: " Embark on a scenic journey to Pokhara, enjoying the enchanting views of Trishuli and Marsyangdi rivers winding through lush mountains. Pokhara awaits with its serene lakes and majestic Himalayan backdrop, promising anunforgettable adventure in a tourist haven.",
  },
];
