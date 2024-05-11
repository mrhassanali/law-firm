import React, { ReactElement } from "react";
import { Container } from "../../components/Atom";
import { Card, CircularProgressBar } from "../../components";
import { CriminalDefenseImg } from "../../components/Images";
import { DoubleArrowCenterSVG } from "../../components/Icons";

export default function Testomonials(): ReactElement {
  return (
    <Container>
      <div className="mb-32 mt-32">
        <div className="mb-4 flex flex-col justify-center">
          <h4 className="xs:text-md mx-auto w-1/2 text-center font-bold mobile:w-full mobile:text-sm xs:w-full sm:w-full sm:text-lg md:w-1/2 md:text-2xl lg:text-2xl">
            We are highly motivated, hardworking professionals commited to
            serving your clients and advocating for justice and equality.
          </h4>
          <DoubleArrowCenterSVG className="mx-auto " />
        </div>

        <div className="grid-col-3 grid gap-x-6 gap-y-4 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          <div>
            <Card className="bg-slate-100 ">
              <div className="flex flex-wrap items-center justify-center gap-x-6">
                <div>
                  <CircularProgressBar
                    selectedValue={90}
                    maxValue={100}
                    textColor={"black"}
                    radius={40}
                    label={"1731"}
                    backgroundColor={"#f1f5f9"}
                    activeStrokeColor={"#facc15"}
                    inactiveStrokeColor={"#d3d3d3"}
                    withGradient
                  />
                </div>
                <div className="text-black">
                  <h1
                    className={"font-bold sm:text-sm md:text-2xl lg:text-2xl"}
                  >
                    Trusted Client
                  </h1>
                  <p>Lorem, ipsum dolor.</p>
                </div>
              </div>
            </Card>
          </div>
          <div>
            <Card className="bg-slate-100 text-black">
              <div className="flex flex-wrap items-center justify-center gap-x-6">
                <div>
                  <CircularProgressBar
                    selectedValue={90}
                    maxValue={100}
                    textColor={"black"}
                    radius={40}
                    backgroundColor={"#f1f5f9"}
                    activeStrokeColor={"#166534"}
                    inactiveStrokeColor={"#d3d3d3"}
                    withGradient
                  />
                </div>
                <div className="text-black">
                  <h1
                    className={"font-bold sm:text-sm md:text-2xl lg:text-2xl"}
                  >
                    Successfull Cases
                  </h1>
                  <p>Lorem, ipsum dolor.</p>
                </div>
              </div>
            </Card>
          </div>
          <div>
            <Card
              className="bg-slate-100 text-black"
              cardStyle={{ backgroundImage: `url(${CriminalDefenseImg})` }}
            >
              <div className={"text-[1.2rem] text-white"}>
                <h6 className="font-bold">15,890 + </h6>
                <p>
                  Criminal Defense <br /> Case Served{" "}
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </Container>
  );
}
