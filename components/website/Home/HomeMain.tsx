import React, { useEffect } from "react";
import Hero from "../Hero";
import PopularTrek from "./PopularTrek";
import Service from "./Service";
import Upcoming from "./Upcoming";
import Affiliations from "./Affiliation";
import ParallaxTestimonial from "./ParallaxTestimonial";
import Contact from "./Contact";
import Footer from "../Footer";
import HeroIntro from "./HeroIntro";

type Props = {};

function HomeMain({ openContainerRef, handleWheel }: any) {
  // useEffect(() => {
  //   (async () => {
  //     const LocomotiveScroll = (await import("locomotive-scroll")).default;
  //     const locomotiveScroll = new LocomotiveScroll();
  //   })();
  // }, []);
  return (
    <div
      ref={openContainerRef}
      onWheel={handleWheel}
      className="w-full fixed  hidden top-[100%]  h-full overflow-y-auto  scroll-section  bg-white z-[50] overflow-hidden"
    >
      <div className="w-full h-full relative">
        <div className=" w-full bg-black ">
          <HeroIntro />
        </div>
        <div className="">
          <Service />
        </div>
        <PopularTrek />
        <Upcoming />
        <Affiliations />
        <ParallaxTestimonial />
        <Contact />
        <Footer />

        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default HomeMain;


// import React from 'react'

// type Props = {}

// function HomeMain({}: Props) {
//   return (
//     <div>HomeMain</div>
//   )
// }

// export default HomeMain