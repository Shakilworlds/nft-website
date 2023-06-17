import React from "react";
import { Feature } from "@/app/data/data";
import Image from "next/image";

const Features = () => {
  return (
    <section className="container rounded-lg border border-[#57FD8E]/20 bg-[#031B29] px-6 lg:px-[76px] py-6 lg:py-16">
      {/* Services */}
      <div className="gap-[60px] grid grid-cols-1 lg:grid-cols-3">
        {Feature.map((Feature, i) => {
          return (
            <div key={i}>

              {/* Icon */}
              <Image
                src={Feature.img}
                alt={Image}
                width={48}
                height={48}
                className="pb-4"
              />

              {/* Titel */}
              <h3 className="pt-8 font-Allenoire text-xl">{Feature.title}</h3>

              {/* Description */}
              <p className="pt-4 font-Lexend text-base font-light text-white/40">
                {Feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Features;
