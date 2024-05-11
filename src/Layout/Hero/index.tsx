import React from "react";
import { Container } from "../../components/Atom";
import { DoubleCrossIcon } from "../../components/Icons";
import { JusticeImg } from "../../components/Images";

export default function Hero() {
  return (
    <Container>
      <div className="flex w-full flex-row flex-wrap xs:flex-col sm:flex-col md:flex-row">
        <div className=" text-white xs:w-full sm:w-full md:w-1/2 lg:w-1/2">
          <div className="flex h-full flex-col justify-center">
            <DoubleCrossIcon className="mb-1 h-[4rem] w-[4rem]" />
            <h1 className="bold mobile:text-md text-3xl xs:text-lg sm:text-[2rem] md:text-3xl">
              Empowering Your Pursuit of justice
            </h1>
            <p className="text-md mt-1 text-button">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
              sint!
            </p>
            <button className="mt-2 w-[12rem] cursor-pointer bg-button p-4 text-black backdrop-blur-0 backdrop-saturate-50 mobile:w-fit mobile:p-1 xs:w-fit xs:p-2 sm:w-fit sm:p-3 md:w-[10rem]">
              Get in Touch
            </button>
          </div>
        </div>
        <div className=" text-white xs:w-full sm:w-full md:w-1/2 lg:w-1/2">
          <img
            src={JusticeImg}
            alt="Justice"
            className="mx-auto h-[25rem] w-4/5 mobile:h-[16rem] mobile:w-[16rem] xs:h-[16rem] xs:w-[16rem] sm:h-[20rem] sm:w-[20rem] md:h-[25rem] md:w-4/5"
          />
        </div>
      </div>
    </Container>
  );
}
