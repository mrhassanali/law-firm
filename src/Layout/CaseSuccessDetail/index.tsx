import React from "react";
import { Container } from "../../components/Atom";
import certificate from "../../assets/images/certificate.jpeg";

export default function CaseSuccessDetail() {
  return (
    <Container>
      <div className="mb-24 mt-24 flex flex-row flex-wrap items-center mobile:flex-col xs:flex-col sm:mb-10  sm:flex-col md:flex-row">
        <div className="w-1/2 text-white mobile:mb-3 mobile:w-full xs:w-full xs:p-2 sm:w-full  sm:p-3 md:w-1/2 md:p-7 lg:p-7 ">
          <h3 className="mb-4 text-2xl font-bold">
            Our Expert professionals law team is always ready to serve you the
            best solution!
          </h3>
          <p className="text-slate-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat eos
            adipisci ab modi laudantium! Laborum officia aut tempora sint quia.
          </p>
          <button className="mt-3 cursor-pointer bg-button p-3 text-black backdrop-blur-0 backdrop-saturate-50 mobile:p-1 xs:p-1 sm:p-1 md:p-3">
            Contact Us
          </button>
        </div>
        <div className="w-1/2 mobile:w-full sm:w-full md:w-1/2">
          <img
            src={certificate}
            alt={"certificate for the case success detail"}
            className={"h-auto rounded-lg "}
          />
        </div>
      </div>
    </Container>
  );
}
