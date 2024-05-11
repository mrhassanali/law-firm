import { ReactElement, useState } from "react";
import { Container } from "../Atom";
import { Link } from "react-router-dom";
import { Bars4Icon, XMarkIcon, PhoneIcon, AtSymbolIcon } from "../Icons";

export default function Navbar(): ReactElement {
  const [isMobileNav, setIsMobileNav] = useState(false);

  const handleMobileNav = () => {
    setIsMobileNav(!isMobileNav);
  };

  return (
    <Container>
      <div className="border-b-1 flex items-center justify-between border border-l-0 border-r-0 border-t-0 border-slate-400 p-2">
        <div>
          <h1 className="text-2xl font-bold text-white">Law Firm</h1>
        </div>
        <div className="flex items-center justify-start gap-x-4 text-white">
          <button className="backdrop-saturate-5 md:text-md hidden cursor-pointer bg-[#3b4047] p-4 backdrop-blur-0 mobile:hidden xs:hidden sm:hidden md:block lg:block xl:block">
            Book a Consultation
          </button>
          {!isMobileNav ? (
            <Bars4Icon
              onClick={handleMobileNav}
              className="hidden h-10 w-10 cursor-pointer  mobile:block xs:block sm:block md:hidden lg:hidden xl:hidden"
            />
          ) : (
            <XMarkIcon
              onClick={handleMobileNav}
              className="hidden h-10 w-10 cursor-pointer  mobile:block xs:block sm:block md:hidden lg:hidden xl:hidden"
            />
          )}
        </div>
      </div>
      <div className="hidden mobile:hidden sm:hidden md:block lg:block xl:block">
        <div className="border-b-1 flex items-center justify-between border border-l-0 border-r-0 border-t-0 border-slate-400 p-2 ">
          <div className="text-white">
            <ul className="flex gap-x-3">
              <li>
                <Link to="#">Service</Link>{" "}
              </li>
              <li>
                <Link to="#">About Us</Link>{" "}
              </li>
              <li>
                <Link to="#">Careers</Link>{" "}
              </li>
            </ul>
          </div>
          <div className="text-white">
            <ul className="flex gap-x-3">
              <li className="flex items-center justify-start gap-x-3">
                <div className="rounded-full border border-button p-2">
                  <PhoneIcon className="h-5 w-5 text-button" />
                </div>
                <div>
                  <label htmlFor="email" className="text-button">
                    Call Us on:
                  </label>
                  <div>
                    <Link to="tel:2123908480">(212)390-8480</Link>
                  </div>
                </div>
              </li>
              <li className="flex items-center justify-start gap-x-3">
                <div className="rounded-full border border-button p-2">
                  <AtSymbolIcon className="h-5 w-5 text-button" />
                </div>
                <div>
                  <label htmlFor="email" className="text-button">
                    Email:
                  </label>
                  <div>
                    <Link to="mailto:contact@hassanali.pk">
                      contact@hassanali.pk
                    </Link>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Mobile Screen Navbar */}
      {isMobileNav && (
        <div className="bg-green fixed right-0 top-0 z-50 h-[100vh]  w-1/2 bg-white text-black">
          {/* Your mobile navbar content here */}
          <XMarkIcon
            onClick={handleMobileNav}
            className="absolute right-[1rem] top-[1rem] hidden h-10 w-10  cursor-pointer mobile:block xs:block sm:block md:hidden lg:hidden xl:hidden"
          />
          <ul className="border-b-1 mx-auto mt-14 flex w-full flex-col border border-l-0 border-r-0 border-t-0 text-black">
            <li className="bg:text-black border-t-1 w-full border border-b-0 border-l-0 border-r-0 p-3 hover:bg-button">
              <Link to="#">Service</Link>
            </li>
            <li className="bg:text-black border-t-1 w-full border border-b-0 border-l-0 border-r-0 p-3 hover:bg-button">
              <Link to="#">About Us</Link>
            </li>
            <li className="bg:text-black border-t-1 w-full border border-b-0 border-l-0 border-r-0 p-3 hover:bg-button">
              <Link to="#">Careers</Link>
            </li>
            {/* Add more items as needed */}
          </ul>
          <div className="fixed bottom-0 ml-2">
            <div className="flex items-center justify-start gap-x-3">
              <div className="rounded-full border border-button p-2">
                <PhoneIcon className="h-5 w-5 text-button" />
              </div>
              <div>
                <label htmlFor="email" className="text-button">
                  Call Us on:
                </label>
                <div>
                  <Link to="tel:2123908480">(212)390-8480</Link>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-start gap-x-3">
              <div className="rounded-full border border-button p-2">
                <AtSymbolIcon className="h-5 w-5 text-button" />
              </div>
              <div>
                <label htmlFor="email" className="text-button">
                  Email:
                </label>
                <div>
                  <Link to="mailto:contact@hassanali.pk">
                    contact@hassanali.pk
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Container>
  );
}
