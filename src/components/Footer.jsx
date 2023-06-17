import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className=" bg-white/5 py-10">
      <div className="container ">
        <div className="flex items-center justify-between pb-16">
          {/* Footer Logo */}
          <Image src="/logo.png" alt="logo" width={48} height={48} />

          {/* Footer Link */}
          <div>
            <ul className="flex gap-6">
              <li className="cursor-pointer font-Lexend text-xl text-white/50">
                Careers
              </li>
              <li className="cursor-pointer font-Lexend text-xl text-white/50">
                Help
              </li>
              <li className="cursor-pointer font-Lexend text-xl text-white/50">
                Privacy
              </li>
            </ul>
          </div>
        </div>

        <div className="lg:flex justify-between border-t border-[#ADFFAA]/10 pt-6">
          <div className="flex items-center gap-2">
            <Image src="/copyright.svg" alt="" height={24} width={24} />
            <p className="font-Lexend text-sm text-white/50">
              Copyright2023. All Right Reserved By Shakil
            </p>

          </div>
            <div className="pt-3">
              <ul className="flex gap-10">
                <li className="font-Lexend text-sm text-white/50">Terms of Service</li>
                <li className="font-Lexend text-sm text-white/50">Privacy & Policy</li>
              </ul>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
