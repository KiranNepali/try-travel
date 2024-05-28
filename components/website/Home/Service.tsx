import { useGSAP } from "@gsap/react";
import { gsap, Expo } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useRef } from "react";
import ServiceImg1 from "@/public/ServiceImage/serviceImg1.png";
import Image from "next/image";
import Service1 from "@/public/ServiceImage/service1.png";
import Service2 from "@/public/ServiceImage/service2.png";
import Service3 from "@/public/ServiceImage/service3.png";
import Service4 from "@/public/ServiceImage/service4.png";
import Service5 from "@/public/ServiceImage/service5.png";
import Service6 from "@/public/ServiceImage/service6.png";

type Props = {};

gsap.registerPlugin(ScrollTrigger);
function Service({}: Props) {
  const imgContainerRef = useRef(null);
  // useGSAP(() => {
  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       markers: true,
  //       trigger: imgContainerRef.current,
  //       start: "50% 50%",
  //       end: "bottom -200%",
  //       scrub: 5,
  //       pin: true,
  //     },
  //   });

  //   tl.to(
  //     ".mask1",
  //     {
  //       height: "20%",
  //       ease: "power4.inOut",
  //       duration: 3,
  //     },
  //     "mask"
  //   );
  //   tl.to(
  //     ".mask2",
  //     {
  //       height: "20%",
  //       duration: 3,
  //       ease: "power4.inOut",
  //     },
  //     "mask"
  //   );
  //   tl.to(
  //     ".mask-black",
  //     {
  //       opacity: "0.5",
  //       duration: 3,
  //       ease: "power3.inOut",
  //     },
  //     "title"
  //   );
  //   tl.from(".service-title", {
  //     opacity: "0",
  //     duration: 3,
  //     ease: "power3.inOut",
  //   });
  //   tl.to(
  //     ".service-card-container",
  //     {
  //       opacity: 1,
  //       height: "100%",
  //       duration: 3,
  //       ease: "power3.inOut",
  //     },
  //     "service-card"
  //   );
  //   tl.from(
  //     ".service-card",
  //     {
  //       delay: 1,
  //       opacity: 0,
  //       duration: 3,
  //       ease: "power3.inOut",
  //     },
  //     "service-card"
  //   );
  //   tl.to(
  //     ".mask-black",
  //     {
  //       opacity: "0.6",
  //       duration: 3,
  //       ease: "power3.inOut",
  //     },
  //     "service-card"
  //   );
  //   tl.from(".single-service-card", {
  //     opacity: 0,
  //     scale: 0.8,
  //     stagger: 0.5,
  //   });
  //   tl.to(".service-card-container", {
  //     delay: 1.5,
  //     opacity: 0,
  //     height: "0",
  //     duration: 3,
  //     ease: "power3.inOut",
  //   });

  //   tl.to(
  //     ".mask1",
  //     {
  //       height: "50%",
  //       ease: "power4.inOut",
  //       duration: 3,
  //     },
  //     "mask"
  //   );
  //   tl.to(
  //     ".mask2",
  //     {
  //       height: "50%",
  //       duration: 3,
  //       ease: "power4.inOut",
  //     },
  //     "en"
  //   );
  //   tl.to(".mask-black", {
  //     opacity: "0.8",
  //     duration: 3,
  //     ease: "power3.inOut",
  //   });
  //   tl.from(".service-title", {
  //     opacity: "1",
  //     duration: 3,
  //     ease: "power3.inOut",
  //   });
  // });
  return (
    <>
      <div
        ref={imgContainerRef}
        className="w-full relative overflow-hidden bg-black lg:h-[100vh]"
      >
        <div className="mask-black absolute bottom-0 left-0 w-full h-full bg-black opacity-[0.8] z-10"></div>

        <div className="mask1 absolute bottom-0 left-0 w-full h-[50%] bg-gradient-to-t from-black  to-transparent z-10"></div>
        <div className="mask2 absolute top-0 left-0 w-full h-[50%] bg-gradient-to-b from-black  to-transparent z-10"></div>

        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <img
            src="https://wallpaperaccess.com/full/8148242.jpg"
            alt=""
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* title  */}
        <div className="z-20 relative h-full pt-[5rem] flex justify-center items-center w-full flex-col gap-5 ">
          <span className="service-title text-white text-start  text-2xl md:text-7xl">
            Why chose us ?
          </span>
          {/* h-0 opacity-0 */}
          <div className="service-card-container text-white  w-full  flex justify-center items-center">
            <div className="service-card grid w-10/12 mx-auto  h-full grid-cols-1 md:grid-cols-3 place-items-center place-content-center gap-5">
              {ServiceData.map((item, index) => (
                <div
                  key={index}
                  className="single-service-card p-3 w-full h-[35vh] flex flex-col justify-start items-center gap-2"
                >
                  {/* sevie img  */}
                  <div className="h-[5rem] w-[5rem] overflow-hidden ">
                    <Image className="w-full h-full object-cover object-center" src={item.img} alt={item.name}></Image>
                  </div>
                  {/* service name  */}
                  {/* sevive description */}
                  <span className="font-semibold text-sm">{item.name}</span>
                  <p className="text-center text-sm text-zinc-300 mt-[10px] text-wrap">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;

const ServiceData = [
  {
    id: 1,
    img: Service1,
    name: "Mountain Trekking",
    desc: "Experience the thrill of mountain trekking with our expert guides and customized routes.",
  },
  {
    id: 2,
    img: Service2,
    name: "Camping",  
    desc: "Enjoy an unforgettable camping experience under the stars with all amenities provided.",
  },
  {
    id: 3,
    img: Service3,
    name: "Guided Tours",
    desc: "Join our guided tours to explore the most breathtaking locations with local experts.",
  },
  {
    id: 4,
    img: Service4,
    name: "Wildlife Safaris",
    desc: "Witness the beauty of wildlife in their natural habitat with our thrilling safari adventures.",
  },
  {
    id: 5,
    img: Service5,
    name: "Cultural Tours",
    desc: "Immerse yourself in the local culture and traditions with our curated cultural tours.",
  },
  {
    id: 6,
    img: Service6,
    name: "Adventure Sports",
    desc: "Get your adrenaline pumping with our range of adventure sports activities.",
  },
];
