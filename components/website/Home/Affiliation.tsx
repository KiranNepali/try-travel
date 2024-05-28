import React, { useRef } from "react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { motion } from "framer-motion";
import Logo1 from "@/public/CompanyLogo/logo1.png";
import Logo2 from "@/public/CompanyLogo/logo2.png";
import Logo3 from "@/public/CompanyLogo/logo3.png";
// import Logo4 from "@/public/CompanyLogo/logo4.png";
import Logo5 from "@/public/CompanyLogo/logo5.png";
import Logo6 from "@/public/CompanyLogo/logo6.png";
import Logo7 from "@/public/CompanyLogo/logo7.png";
import Logo8 from "@/public/CompanyLogo/logo8.png";

import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const Affiliations = () => {
  const affRef = useRef(null);

  useGSAP(
    () => {
      const tl1 = gsap.timeline({ repeat: -1 });
      const tl2 = gsap.timeline({ repeat: -1 });
      const tl12 = gsap.timeline({ repeat: -1 });
      const tl22 = gsap.timeline({ repeat: -1 });

      tl2
        .to(".text3", {
          x: "0%",
          duration: 0.5,
          ease: "power4.inOut",
          // delay: 0.5,
        })
        .to(".text3", {
          y: "100%",
          duration: 3,
          delay: 0.5,
          // ease: "power4.inOut",
        })
        .to(
          ".text1",
          {
            y: "0%",
            duration: 1,
            ease: "expo.inOut",
            // delay: 0.5,
          },
          1
        )
        .to(
          ".text1",
          {
            x: "-100%",
            duration: 2,
            delay: 0.5,
            // ease: "expo.inOut",
          },
          2
        );
      tl22
        .to(".text32", {
          x: "0%",
          duration: 5,
          ease: "power4.inOut",
          // delay: 0.5,
        })
        .to(".text32", {
          y: "100%",
          duration: 3,
          delay: 0.5,
          // ease: "power4.inOut",
        })
        .to(
          ".text12",
          {
            y: "0%",
            duration: 1,
            ease: "expo.inOut",
            // delay: 0.5,
          },
          1
        )
        .to(
          ".text12",
          {
            x: "-100%",
            duration: 2,
            delay: 0.5,
            // ease: "expo.inOut",
          },
          2
        );
      tl1
        .to(
          ".text",
          {
            y: "-100%",
            duration: 1.2,
            // ease: "expo.inOut",
            delay: 0.5,
          },
          0
        )
        .to(
          ".text",
          {
            x: "100%",
            duration: 4,
            delay: 0.5,
            ease: "expo.inOut",
          },
          1.2
        )
        .to(
          ".text2",
          {
            x: "0%",
            duration: 3,
            // ease: "expo.inOut",
            // delay: 0.5,
          },
          0.7
        )
        .to(
          ".text2",
          {
            y: "-100%",
            duration: 7,
            delay: 0.5,
            ease: "expo.inOut",
          },
          0
        )

        .to(
          ".text4",
          {
            x: "0%",
            duration: 2,
            // ease: "power4.inOut",
            delay: 0.5,
          },
          1
        )
        .to(
          ".text4",
          {
            y: "100%",
            duration: 3,
            delay: 1,
            ease: "power4.inOut",
          },
          1
        );
      tl12
        .to(
          ".textt",
          {
            y: "-100%",
            duration: 2.8,
            // ease: "expo.inOut",
            delay: 0.5,
          },
          0
        )
        .to(
          ".textt",
          {
            x: "100%",
            duration: 4,
            delay: 2,
            ease: "expo.inOut",
          },
          0
        )
        .to(
          ".text22",
          {
            x: "0%",
            duration: 1,
            // ease: "expo.inOut",
            // delay: 0.5,
          },
          0
        )
        .to(
          ".text22",
          {
            y: "-100%",
            duration: 4,
            delay: 0.5,
            ease: "expo.inOut",
          },
          0
        )

        .to(
          ".text42",
          {
            x: "0%",
            duration: 2,
            // ease: "power4.inOut",
            delay: 0.5,
          },
          0.2
        )
        .to(
          ".text42",
          {
            y: "100%",
            duration: 5,
            // delay: 0.5,
            ease: "power4.inOut",
          },
          0
        );
    }
    // { scope: affRef.current }
  );

  return (
    <div ref={affRef} id="affiliations" className="py-[5rem] w-full bg-black ">
      {/* title  */}
      <span className="w-11/12 flex md:justify-center justify-start mx-auto text-white  text-2xl md:text-7xl">
        Affiliation Partners
      </span>

      {/* new motion repeat  */}
      <div className="whole-div relative mt-[3rem] flex flex-nowrap overflow-hidden py-4 w-full mx-auto ">
        <div className="absolute h-full w-[10%]  top-0 left-0  bg-gradient-to-r from-black  to-transparent   z-20"></div>
        <div className="absolute h-full w-[10%]  top-0 right-0 bg-gradient-to-r from-transparent  to-black z-20"></div>
        {[1, 2, 3].map((item) => {
          return (
            <motion.div
              key={item}
              initial={{ x: 0 }}
              animate={{ x: "-100%" }}
              transition={{ duration: 15, ease: "linear", repeat: Infinity }}
              className="move  gap-8 flex pr-8 justify-center z-10"
            >
              {logoData.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="flex flex-col min-w-[100px] min-h-fit "
                  >
                    <div className="four w-full h-full">
                      <Image
                        className="h-full  w-full object-contain"
                        src={item.logo}
                        alt="company logo"
                      />
                    </div>
                  </div>
                );
              })}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Affiliations;

const logoData = [
  {
    id: 1,
    logo: Logo1,
  },
  {
    id: 2,
    logo: Logo2,
  },
  {
    id: 3,
    logo: Logo3,
  },
  // {
  //   id: 4,
  //   logo: Logo4,
  // },
  {
    id: 5,
    logo: Logo5,
  },
  {
    id: 6,
    logo: Logo6,
  },
  {
    id: 7,
    logo: Logo7,
  },
  {
    id: 8,
    logo: Logo8,
  },
];
