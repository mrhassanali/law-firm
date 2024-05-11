import React from "react";
import { Link } from "react-router-dom";
import { Container } from "../../components/Atom";
import {
  FooterLargeLeftIcon,
  FooterLargeRightIcon,
} from "../../components/Icons";

export default function Footer() {
  return (
    <>
      <section className="w-full bg-card">
        <Container>
          <footer className=" pt-8 ">
            <div className="text-surface mb-12 mt-8 flex w-full flex-col items-center">
              <div className="flex flex-row items-center justify-between gap-x-4 text-white">
                <div>
                  <FooterLargeLeftIcon className="w-[20rem] mobile:w-[3rem] xs:w-[10rem] sm:w-[15rem] md:w-[20rem] lg:w-[20rem]" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold mobile:text-lg sm:text-lg md:text-xl">
                    Law Firm
                  </h1>
                </div>
                <div>
                  <FooterLargeRightIcon className="w-[20rem] mobile:w-[3rem] xs:w-[10rem] sm:w-[15rem] md:w-[20rem] lg:w-[20rem]" />
                </div>
              </div>
            </div>

            <div className="mt-3 grid grid-cols-3 gap-x-4 mobile:grid-cols-1 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-3">
              <div className="w-full text-white">
                <div className="border-b-1 border-t-1 border border-l-0 border-r-0 border-slate-500 pb-2 pt-2">
                  <h3 className="text-center text-lg font-bold">Quick Link</h3>
                </div>
                <ul className="mt-3 leading-7 text-slate-400">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">Our Mission</Link>
                  </li>
                  <li>
                    <Link to="/services">Our Team</Link>
                  </li>
                  <li>
                    <Link to="/contact">Careers</Link>
                  </li>
                </ul>
              </div>
              <div className="w-full text-white">
                <div className="border-b-1 border-t-1 border border-l-0 border-r-0 border-slate-500 pb-2 pt-2">
                  <h3 className="text-center text-lg font-bold">Services</h3>
                </div>
                <div className="column-2">
                  <ul className="mt-3 leading-7 text-slate-400">
                    <li>
                      <Link to="/">Civil Right Ligitation</Link>
                    </li>
                    <li>
                      <Link to="/about">Contractual Law</Link>
                    </li>
                    <li>
                      <Link to="/services">Data Privacy and CyberSecurity</Link>
                    </li>
                    <li>
                      <Link to="/contact">Disability Law</Link>
                    </li>
                    <li>
                      <Link to="/contact">Employment Law</Link>
                    </li>
                    <li>
                      <Link to="/contact">Environmental Law</Link>
                    </li>
                    <li>
                      <Link to="/contact">
                        Equality and Civilization Review Law
                      </Link>
                    </li>
                    <li>
                      <Link to="#">Human Rights &amp; International Law</Link>
                    </li>
                    <li>
                      <Link to="#">Product Liability And Mosses Tort</Link>
                    </li>
                    <li>
                      <Link to="#">Securities Litigiation</Link>
                    </li>
                    <li>
                      <Link to="#">Startup Law</Link>
                    </li>
                    <li>
                      <Link to="#">Whistleblower And False Claims Act</Link>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <div className="w-full text-white">
                <div className="border border-b-0 border-l-0 border-r-0 border-t-0 border-slate-500 pb-2 pt-2">
                  <h3 className="text-center text-lg font-bold"></h3>
                </div>
              </div> */}
              <div className="w-full text-white">
                <div className="border-b-1 border-t-1 border border-l-0 border-r-0 border-slate-500 pb-2 pt-2">
                  <h3 className="text-center text-lg font-bold">Contact Us</h3>
                </div>

                <div className="mt-3 leading-7  text-slate-400">
                  <address>
                    Small Law Firm, <br /> 101 Hunting Ave,Boston, MA 02110
                  </address>
                  <div>
                    <label htmlFor="phone">Phone: &nbsp;</label>
                    <span>
                      <Link to={"tel:923012345678"}>(212)-390-8480</Link>
                    </span>
                  </div>
                  <div>
                    <label htmlFor="Email">Email:&nbsp;</label>
                    <span>
                      <Link to={"mailto:contact@hassanali.pk"}>
                        contact@hassanali.pk
                      </Link>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Copyright footer */}
            <div className="border-b-1 border-t-1 mt-5 flex w-full flex-wrap justify-between border border-l-0 border-r-0 border-slate-500 pb-2 pt-2 text-slate-400 mobile:flex-col xs:flex-col sm:flex-col md:flex-row">
              <div>
                <p>
                  Attorney Advertising | Prior Result Do Not Guarantee a Similar
                  Outcome | Legal Notice
                </p>
              </div>
              <div>
                <p>
                  Copyright @ 2024{" "}
                  <Link to="#" className="text-button">
                    Law Firm
                  </Link>
                  . All Right Reserved
                </p>
              </div>
            </div>
          </footer>
        </Container>
      </section>
    </>
  );
}
