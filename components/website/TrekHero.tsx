// "use client";
// import { useGSAP } from "@gsap/react";
// import { gsap, Expo } from "gsap";
// import React, { useRef, useState } from "react";
// import ScrollTrigger from "gsap/ScrollTrigger";
// import { Icon } from "@iconify/react";

// // images
// import HeroMustangBg from "@/public/HeroImage/HeroBg1.png";
// import HeroPhoksundoBg from "@/public/HeroImage/HeroPhoksundo.png";
// import HeroEverestBg from "@/public/HeroImage/HeroEverest.png";
// import HeroTilichoBg from "@/public/HeroImage/HeroTilicho.png";

// import LogoImage from "@/public/travel-logo.png";

// import Image from "next/image";
// type Props = {};

// gsap.registerPlugin(ScrollTrigger);
// export default function TrekHero({}: Props) {
//   const mainContainerRef = useRef(null);
//   const pinContainerRef = useRef(null);
//   const slider2Ref = useRef(null);

//   useGSAP(() => {
//     const tl = gsap.timeline({
//       scrollTrigger: {
//         // markers: true,
//         trigger: mainContainerRef.current,
//         pin: pinContainerRef.current,
//         start: "top top",
//         end: "100% top",
//         scrub: 2,
//       },
//     });
//     tl.to(pinContainerRef.current, {
//       x: "-400vw",
//       // duration: "10",
//       ease: "linear",
//     });

//     const slider2Tl = gsap.timeline({
//       scrollTrigger: {
//         // markers: true,
//         trigger: slider2Ref.current,
//         start: "10% top",
//         end: "80% top",
//         scrub: 1,
//       },
//     });
//   });

//   // for navbar animation
//   const sideNavRef = useRef(null);
//   const [openNav, setOpenNav] = useState(false);
//   const handleHam = () => {
//     const tl1 = gsap.timeline();
//     if (!openNav) {
//       tl1.to(
//         ".ham1",
//         {
//           rotate: "45deg",
//           duration: "0.3",
//           transformOrigin: "center",
//         },
//         "ham"
//       );
//       tl1.to(
//         ".ham2",
//         {
//           top: "40%",
//           rotate: "-45deg",
//           duration: "0.3",
//           transformOrigin: "center",
//         },
//         "ham"
//       );
//       tl1.to(
//         sideNavRef.current,
//         {
//           display: "flex",
//           right: "0",
//           duration: 0.7,
//           ease: "power4.inOut",
//         },
//         "ham"
//       );
//       tl1.to(
//         ".nav-links",
//         {
//           delay: 0.1,
//           opacity: 1,
//           marginLeft: 0,
//           marginTop: 0,
//           stagger: 0.2,
//           duration: 1,
//           ease: "power4.inOut",
//         },
//         "ham"
//       );
//       setOpenNav(true);
//     }
//     if (openNav) {
//       const tl2 = gsap.timeline();
//       gsap.to(".nav-links", {
//         marginLeft: "-30px",
//         marginTop: "30px",
//         opacity: 0,
//         y: "0",
//         x: "0",
//         stagger: 0.2,
//         duration: 1,
//         ease: "power4.inOut",
//       });
//       tl2.to(
//         ".ham1",
//         {
//           rotate: "0",
//           duration: "0.3",
//           transformOrigin: "center",
//         },
//         "ham"
//       );
//       tl2.to(
//         ".ham2",
//         {
//           top: "80%",
//           rotate: "0",
//           duration: "0.3",
//           transformOrigin: "center",
//         },
//         "ham"
//       );
//       tl2.to(sideNavRef.current, {
//         delay: 0.5,
//         right: "-100%",
//         display: "none",
//         duration: 0.7,
//         ease: "power4.inOut",
//       });

//       setOpenNav(false);
//     }
//   };

//   // hover side nav links animation
//   const handleHoverNav = (id: number) => {
//     gsap.to(`.hover-link-${id}`, {
//       y: "-36px",
//     });
//   };

//   const handleLeaveNav = (id: number) => {
//     gsap.to(`.hover-link-${id}`, {
//       y: "0",
//     });
//   };
//   return (
//     <>
//       {/* top  */}
//       <div className="w-full text-white  px-[10%] z-[1000] fixed top-0 left-0 h-[5rem] md:h-[10rem] flex justify-between items-center">
//         {/* logo  */}
//         <span className="font-semibold text-sm w-[8.5rem] opacity-[0.9]  h-[2rem] cursor-pointer  overflow-hidden">
//           <Image
//             src={LogoImage}
//             alt="travel-logo"
//             className="w-full h-full  object-cover object-center"
//           ></Image>
//         </span>
//         {/* ham  */}
//         <div
//           onClick={handleHam}
//           className="flex relative justify-center hover:scale-110 duration-150 items-center w-[1.5rem] md:w-[2rem] cursor-pointer py-2 flex-col gap-1"
//         >
//           <span className="ham1 absolute top-[40%] left-[50%] -translate-x-[50%] -translate-y-[50%] bg-zinc-100 w-full h-[2px]"></span>
//           <span className="ham2  absolute top-[70%] left-[50%] -translate-x-[50%] -translate-y-[50%]  bg-zinc-100 w-full h-[2px]"></span>
//         </div>
//       </div>

//       {/* side nav  */}
//       <div
//         ref={sideNavRef}
//         className="w-full h-screen  justify-center items-center hidden text-white z-[500] fixed top-0 right-[-100%] bg-zinc-900"
//       >
//         <div className="flex justify-center items-center   flex-col h-full w-full">
//           <div className="flex flex-col md:flex-row justify-center h-full items-center gap-[4%] w-full text-3xl font-medium">
//             {["About", "Purchased Confirm", "Contact"].map((item, index) => (
//               <div
//                 key={index}
//                 onMouseEnter={() => handleHoverNav(index)}
//                 onMouseLeave={() => handleLeaveNav(index)}
//                 className="ml-[-30px] mt-[30px] nav-links opacity-0 flex justify-center items-center h-[36px] overflow-hidden"
//               >
//                 <div
//                   className={`nav-link-container hover-link-${index} flex w-full h-full flex-col`}
//                 >
//                   <span className="cursor-pointer  text-zinc-100">{item}</span>
//                   <span className="cursor-pointer bg-clip-text text-transparent bg-gradient-to-t from-[#97efe9]  via-[#e34df4] to-[#6e5ce9] ">
//                     {item}
//                   </span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* // main div */}
//       <div
//         ref={mainContainerRef}
//         className="w-full relative  text-nowrap  overflow-x-hidden bg-black text-white h-[400vh]"
//       >
//         {/* pin */}
//         <div ref={pinContainerRef} className="w-[400vw] h-screen flex">
//           <div className="w-full h-full bg-blue-600 flex justify-center items-center">
//             <div className="w-full h-screen relative overflow-hidden">
//               <Image
//                 src={HeroEverestBg}
//                 alt="everest-image"
//                 className="w-full h-full object-cover object-center"
//               ></Image>
//               <span className="text-[8rem] absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]  font-black">
//                 EVEREST
//               </span>
//             </div>
//           </div>
//           <div
//             ref={slider2Ref}
//             className="w-full  h-full bg-yellow-600 flex justify-center items-center"
//           >
//             <div className="w-full h-screen relative overflow-hidden">
//               <Image
//                 src={HeroPhoksundoBg}
//                 alt="everest-image"
//                 className="w-full h-full object-cover object-center"
//               ></Image>
//               <span className="text-[8rem] absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] slider2Text font-black">
//                 PHOKSUNDO
//               </span>
//             </div>
//           </div>
//           <div className="w-full h-full bg-red-600 flex justify-center items-center">
//             <div className="w-full h-screen relative overflow-hidden">
//               <Image
//                 src={HeroMustangBg}
//                 alt="everest-image"
//                 className="w-full h-full object-cover object-center"
//               ></Image>
//               <span className="text-[8rem] absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]  font-black">
//                 MUSTANG
//               </span>
//             </div>
//           </div>
//           <div className="w-full h-full bg-green-600 flex justify-center items-center">
//             <div className="w-full h-screen relative overflow-hidden">
//               <Image
//                 src={HeroTilichoBg}
//                 alt="everest-image"
//                 className="w-full h-full object-cover object-center"
//               ></Image>
//               <span className="text-[8rem] absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]  font-black">
//                 TILICHO
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>

//       <button className="border-[2px] fixed border-zinc-300  cursor-pointer bg-zinc-800  text-white hover:bg-zinc-900  hover:scale-95 duration-200   bottom-[15%] z-[15]  left-[50%] translate-x-[-50%] px-10 py-2 text-nowrap rounded-3xl text-[12px] font-semibold">
//         START TOUR
//       </button>

//       {/* BOTTOM  */}
//       <div className="px-[10%] z-10 w-full mx-auto fixed bottom-0 left-0 h-[7rem] flex justify-between items-center">
//         {/* bottom dot  */}
//         <div className="w-full flex gap-4 justify-center md:justify-start font-bold text-sm uppercase">
//           <span className="prev text-2xl md:text-3xl hover:scale-[0.9] duration-300 text-zinc-300 hover:text-white cursor-pointer">
//             <Icon icon="gg:arrow-left-o" />
//           </span>
//           <span className="next text-2xl md:text-3xl  hover:scale-[0.9] duration-300 text-zinc-300 hover:text-white cursor-pointer">
//             <Icon icon="gg:arrow-right-o" />
//           </span>
//         </div>
//         {/* ham  */}
//         <div className="h-full hidden  md:flex justify-center text-sm font-medium items-center gap-6 text-nowrap">
//           {["About", "Purchased Confirm", "Contact"].map((item) => (
//             <span className="cursor-pointer hover:scale-110 duration-200 text-zinc-100 hover:text-white">
//               {item}
//             </span>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }
