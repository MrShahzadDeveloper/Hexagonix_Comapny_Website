"use client";

import Image from "next/image";
import hero_main from "../assets/hero_main.png";
import Sphere2 from "@/components/Sphere2";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const HeroSection = () => {
  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.from(".hero-title", { opacity: 0, y: 50, duration: 0.8 })
      .from(".para", { opacity: 0, y: 30, duration: 0.8 }, "-=0.4")
      .from(".hero-btn", { opacity: 0, y: 20, duration: 0.6 }, "-=0.3")
      .from(".hero-img", { opacity: 0, scale: 0.9, y: 40, duration: 1 }, "-=0.6");
  }, []);

  return (
    <section className="relative bg-[#F8F7FC] overflow-hidden md:px-10 xl:px-24">
      <div className="min-h-[85vh] flex flex-col-reverse md:flex-row justify-center md:justify-between items-center py-10 md:py-0 ">

        {/* LEFT CONTENT */}
        <div className="flex flex-col gap-6 md:gap-12 text-center md:text-left px-4 sm:px-8 md:px-0">
          <h1 className="hero-title text-3xl md:text-4xl xl:text-5xl leading-snug">
            Great{" "}
            <span className="bg-gradient-to-b from-[#DE4396] to-[#0D1C9F]/40 bg-clip-text text-transparent font-bold">
              Product
            </span>{" "}
            is 
            <strong>built by great</strong>{" "}
            <span className="bg-gradient-to-tr from-[#406AFF]/90 to-[#F7666F] bg-clip-text text-transparent font-extrabold">
              teams
            </span>
          </h1>

          <p className="para text-[#4A5568] text-base xl:text-xl">
            We help build and manage a team of world-class developers
            to bring your vision to life
          </p>

          <button className="hero-btn px-6 sm:px-8 py-3 sm:py-4 text-white bg-[#3D63EA] rounded-lg w-fit mx-auto md:mx-0">
            {`Let's get started!`}
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center md:justify-end w-full">
          <div className="w-[260px] sm:w-[380px] lg:w-[450px] xl:w-[550px]">
            <Image
              src={hero_main}
              alt="main"
              className="hero-img w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>

      {/* SPHERE DECORATION */}
      <Sphere2
        className="p-10 absolute hidden md:flex bottom-0 left-1/2 md:left-[35%] -translate-x-1/2 translate-y-1/2 w-16 md:w-20"
      />
    </section>
  );
};

export default HeroSection;
