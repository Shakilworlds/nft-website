import React from "react";
import { NFTs } from "@/app/data/data";
import Image from "next/image";
import Button from "./Button";
import NFTsButton from "./NFTsButton";
const NFT = () => {
  return (
    <section className="container py-[160px]">

      {/* Title Text */}
      <div>
        <h2 className="text-center font-Allenoire text-xl lg:text-5xl">
          Top NFTs Collection This Week
        </h2>
        <p className="mx-auto flex justify-center text-center font-Lexend text-base font-light max-w-[341px] lg:max-w-[557px] pt-4 text-white/40">
          Consectetur adipiscing elit. A leo, justo, sit vitae, vel tristique.
          Eu lacus congue risus pulvinar in ut aliquet.
        </p>
      </div>

      {/* NFT List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-10">
        {NFTs.map((NFTs, i) => {
          return (
            <div key={i}>

              {/* Image */}
              <div className="border border-[#57FD8E]/10 bg-white/5 rounded-lg">
                <Image
                  src={NFTs.img}
                alt={Image}
                width={408}
                height={408}
                className=""
                />

                <span className="flex px-6 pt-10 pb-6">
                  <NFTsButton>
                    Place a bid
                  </NFTsButton>
                </span>
                
              </div>

              {/* Titel */}
              
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default NFT;
