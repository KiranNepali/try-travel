import Image from "next/image";
import React from "react";

type Props = {};

function HeroIntro({}: Props) {
  return (
    <div className="w-full text-white h-screen relative">
      <div className="absolute top-0 left-0 opacity-[0.7] w-full h-full bg-black z-10"></div>

      <div className="w-full z-0 absolute h-full overflow-hidden">
        <img
          src="https://wallpaperaccess.com/full/7285.jpg"
          alt="hero-background-image"
          className="w-full h-full object-cover object-center"
        ></img>
      </div>
      <div className="w-11/12 mx-auto z-20 h-screen flex flex-col relative justify-center items-center gap-5 text-3xl">
        <div className="w-full items-center  flex flex-col text-[5rem] leading-[6rem]">
          <div className="flex items-center ">
            <span>Experience</span>
            <div className="bg-black rounded-full w-[10rem] h-[55px] mx-5 mt-2 overflow-hidden relative">
              <img
                src="https://i.pinimg.com/564x/fd/af/f8/fdaff852118a200020cbd2fd0575fa3a.jpg"
                className="absolute top-0 left-0 object-cover object-center"
                alt=""
              />
              <div className="absolute top-0 left-0 w-full h-full opacity-[0.4] bg-black"></div>
            </div>
            <span>the beauty of</span>
          </div>
          <div className="flex items-center">
            <span>nature with</span>
            <div className="bg-black rounded-full w-[10rem] h-[55px] mx-5 mt-2 overflow-hidden relative">
              <img
                src="https://i.pinimg.com/564x/4b/76/cb/4b76cb130e193c6b38b5f6d626850013.jpg"
                className="absolute top-0 left-0 object-cover object-center"
                alt=""
              />
              <div className="absolute top-0 left-0 w-full h-full opacity-[0.4] bg-black"></div>
            </div>
            <span>us</span>
          </div>
        </div>
        <p className="w-8/12 mx-auto text-center text-wrap text-[15px]">
          Discover the stunning beauty of trek with our exclusive tour packages.
          Immerse yourself in crystal clear water, pristine beaches, and
          unforgettable experiences
        </p>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[15rem] bg-gradient-to-t from-black to-transparent"></div>
    </div>
  );
}

export default HeroIntro;
