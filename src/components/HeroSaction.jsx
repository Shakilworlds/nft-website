import Image from "next/image";
import React from "react";

const HeroSaction = () => {
  return (
    <header className="container relative">
      {/* Bg shape */}
      <div className="absolute z-0 mx-auto flex h-[1106px] w-[1106px] justify-center rounded-full bg-[#ADFFAA]/10 blur-[300px]" />

      {/* Hero Text */}
      <div className="pt-[90px]">
        <h1 className="mx-auto flex justify-center text-center font-Allenoire text-[70px] leading-[77px] lg:max-w-[816px]">
          An Easy Way to Explore The NFT Metavers
        </h1>
        <p className="mx-auto flex justify-center font-light text-xl lg:max-w-[530px] text-center text-white/40 pt-4">
          Website Hero for Clous is NFT marketplace website hero Hope you like
          it too Please press the (L) key
        </p>
      </div>

      {/* Hero Image */}
      <Image
        src="/heroImage.png"
        width={592}
        height={722}
        alt="hero image"
        className="mx-auto flex justify-center pt-7"
      />
    </header>
  );
};

export default HeroSaction;
