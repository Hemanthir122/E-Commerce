import React from 'react';
import { assets } from '../assets/assets';

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row border border-gray-400">
      {/* Hero Left */}
      <div className="w-full sm:w-1/2 flex flex-col items-center justify-center py-10 sm:py-0 text-[#414141]">
        {/* Bestseller Section */}
        <div className="flex items-center gap-2">
          <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
          <p className="font-medium text-sm md:text-base">OUR BESTSELLERS</p>
        </div>
        {/* Title Section */}
        <h1 className="prata-regular text-3xl sm:text-4xl lg:text-5xl leading-relaxed text-center sm:text-left sm:py-3">
          Latest Arrivals
        </h1>
        {/* Shop Section */}
        <div className="flex items-center gap-2">
          <p className="font-semibold text-sm md:text-base">SHOP NOW</p>
          <p className="w-8 md:w-11 h-[1px] bg-[#414141]"></p>
        </div>
      </div>
      {/* Hero Right */}
      <div className="w-full sm:w-1/2">
        <img
          className="w-full h-full object-cover"
          src={assets.hero_img}
          alt="Latest Arrivals"
        />
      </div>
    </div>
  );
};

export default Hero;
