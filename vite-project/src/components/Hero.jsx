import React from "react";
import HeroMessage from "./HeroMessage";
import HeroTitle from "./HeroTitle";

const Hero = () => {
  return (
    <div className=" flex flex-row h-10 text-center ">
      <div className=" bg-green-500 basis-1/5">
        <HeroTitle></HeroTitle>
      </div>
      <div className=" bg-green-300 basis-4/5">
        <HeroMessage></HeroMessage>
      </div>
    </div>
  );
};

export default Hero;
