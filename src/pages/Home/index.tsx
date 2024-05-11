import React from "react";
import {
  PracticeArea,
  Law,
  Testomonials,
  Help,
  Footer,
  Hero,
  CaseSuccessDetail,
} from "../../Layout";
import { Container } from "../../components/Atom";
import LawImage from "../../assets/images/law-bg.png";
import LawNavbarImg from "../../assets/images/law.png";
import Navbar from "../../components/Navbar";
import { ReactComponent as BlowNavSVG } from "../../assets/svg/blow-nav.svg";
import MartinLawImg from "../../assets/images/Maritime-Law.webp";
import ClipboardImg from "../../assets/images/icons8-clipboard-64.png";
import CatalystImg1 from "../../assets/images/catalyst-img1.jpeg";
import CatalystImg2 from "../../assets/images/catalyst-img2.jpg";
import { Section } from "../../components/Atom";
// import JusticeImg from "../../assets/images/tarakri.png";
// import TeamValuesImg from "../../assets/images/team-values.jpg";

export default function Home() {
  return (
    <>
      <section
        className="h-[38rem] w-full bg-cover bg-center bg-no-repeat mobile:h-[42rem] xs:h-[44rem] sm:h-[44rem] md:h-[38rem]"
        style={{ backgroundImage: `url(${LawNavbarImg})` }}
      >
        <Navbar />
        <Hero />
      </section>

      <Section className="w-full bg-app-background">
        <PracticeArea />
      </Section>

      <Section className="w-full bg-card">
        <Container>
          <div className="mb-24 mt-24 flex flex-row flex-wrap items-center mobile:flex-col xs:flex-col sm:mb-10  sm:flex-col md:flex-row">
            <div className="mx-auto grid w-1/2 grid-rows-2 mobile:w-full sm:w-full md:w-1/2">
              <div>
                <img src={CatalystImg1} alt="catalyst directory" loading={"lazy"}/>
              </div>
              <div>
                <img src={CatalystImg2} alt="court law order" loading={"lazy"}/>
              </div>
            </div>
            <div className="w-1/2 text-white mobile:mb-3 mobile:w-full xs:w-full xs:p-2 sm:w-full  sm:p-3 md:w-1/2 md:p-7 lg:p-7 ">
              <h3 className="mb-4 text-2xl font-bold">
                Catalysts for <br /> Justice & Progress
              </h3>
              <BlowNavSVG />
              <p className="text-slate-400">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit
                incidunt quo ea accusamus obcaecati quasi ut vel saepe atque
                sapiente odio maiores eligendi eos ducimus, fugiat minus
                quisquam repudiandae. Itaque dolores cumque, corporis
                repudiandae consequatur sed vel aliquam voluptatum tempora.
              </p>
              <div className="flex flex-row flex-wrap items-center justify-start gap-x-4 md:flex-row">
                <div className="mt-3 flex flex-wrap items-center justify-center gap-x-2 bg-slate-300 p-3 text-black backdrop-blur-0 backdrop-saturate-50 mobile:p-1 xs:p-1 sm:p-1 md:p-3">
                  <div>
                    <img
                      src={ClipboardImg}
                      alt="clipboard"
                      className="w-full"
                    />
                  </div>
                  <div>
                    95% <br />
                    Cases Success
                  </div>
                </div>
                <div className="mt-3 flex flex-wrap items-center justify-center gap-x-4  bg-button p-3 text-black backdrop-blur-0 backdrop-saturate-50 mobile:p-1 xs:p-1 sm:p-1 md:p-3">
                  <div className="rounded-lg bg-app-background p-4 text-lg text-white">
                    35+
                  </div>
                  <div className="pl-4">
                    {" "}
                    Years <br /> Experience
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="w-full bg-app-background">
        <Law />
      </Section>

      <Section className="w-full bg-app-background">
        <Help />
      </Section>

      <Section className="w-full bg-white">
        <Testomonials />
      </Section>

      <Section
        className="w-full bg-card"
        // style={{ backgroundImage: `url(${TeamValuesImg})` }}
      >
        <Container>
          <div className="mb-24 mt-24 flex flex-row flex-wrap items-center mobile:flex-col xs:flex-col sm:mb-10  sm:flex-col md:flex-row">
            <div className="w-1/2 text-white mobile:mb-3 mobile:w-full xs:w-full xs:p-2 sm:w-full  sm:p-3 md:w-1/2 md:p-7 lg:p-7 ">
              <h3 className="mb-4 text-2xl font-bold">
                Powered by a Team <br /> Who Shared Your <br /> Values
              </h3>
              <BlowNavSVG />
              <p className="text-slate-400">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore
                delectus magnam ipsum nihil molestias inventore dolor excepturi
                laborum non id iste architecto nemo, deleniti molestiae dolores
                quae ut? Et, voluptatibus.
              </p>
              <button className="mt-3 cursor-pointer bg-button p-3 text-black backdrop-blur-0 backdrop-saturate-50 mobile:p-1 xs:p-1 sm:p-1 md:p-3">
                Learn More
              </button>
            </div>
            <div className="mx-auto w-1/2 mobile:w-full sm:w-full md:w-1/2">
              <img
                src={MartinLawImg}
                alt={"martin law firm team values"}
                className={"mx-auto h-auto w-full rounded-lg "}
              />
            </div>
          </div>
        </Container>
      </Section>

      <section className="w-full bg-card">
        <CaseSuccessDetail />
      </section>

      <div
        className="h-60 w-full bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${LawImage})` }}
      ></div>

      <Footer />
    </>
  );
}
