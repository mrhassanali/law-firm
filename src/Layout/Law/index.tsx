import React, { ReactElement } from "react";
import { Card } from "../../components";
import { Container } from "../../components/Atom";
import {
  CivilLawIcon,
  DataPrivacyIcon,
  DisabilityLawIcon,
  EmployeeLawIcon,
  StartupLawIcon,
  LitigationLawIcon,
  DoubleCrossIcon,
} from "../../components/Icons";

export default function Law(): ReactElement {
  return (
    <Container className="pb-8 pt-8 ">
      <div className="mb-5 mt-3 flex w-full flex-row flex-wrap items-start  p-3 text-white xs:flex-col sm:flex-row md:flex-row">
        <div className="mobile:w-full xs:w-full sm:w-full md:w-1/3 lg:w-1/3">
          <h1 className="text-3xl">
            Explorer <br /> Our Practice Areas
          </h1>
          <DoubleCrossIcon className="mt-0 h-[4rem] w-[4rem]" />
        </div>
        <div className="border-l-1 border border-b-0 border-r-0 border-t-0 border-slate-500 mobile:w-full sm:w-full md:w-1/2 lg:w-1/2">
          <p className="pl-3 text-slate-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor
            dignissimos distinctio adipisci sed ut ipsa soluta numquam expedita
            rem nam dicta fuga, nisi libero modi.
          </p>
        </div>
      </div>

      <div className="grid gap-5 mobile:grid-cols-1 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {[
          {
            title: "Civil Right Litigation",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus accusamus molestiae modi hic velit, excepturi quo! Eum corporis odio a iusto tempora dolor asperiores assumenda?",
            icon: <LitigationLawIcon />,
          },
          {
            title: "Contractual Law",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus accusamus molestiae modi hic velit, excepturi quo! Eum corporis odio a iusto tempora dolor asperiores assumenda?",
            icon: <CivilLawIcon />,
          },
          {
            title: "Data Privacy",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus accusamus molestiae modi hic velit, excepturi quo! Eum corporis odio a iusto tempora dolor asperiores assumenda?",
            icon: <DataPrivacyIcon />,
          },
          {
            title: "Disability Law",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus accusamus molestiae modi hic velit, excepturi quo! Eum corporis odio a iusto tempora dolor asperiores assumenda?",
            icon: <DisabilityLawIcon />,
          },
          {
            title: "Employment Law",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus accusamus molestiae modi hic velit, excepturi quo! Eum corporis odio a iusto tempora dolor asperiores assumenda",
            icon: <EmployeeLawIcon />,
          },
          {
            title: "Startup Law",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus accusamus molestiae modi hic velit, excepturi quo! Eum corporis odio a iusto tempora dolor asperiores assumenda",
            icon: <StartupLawIcon />,
          },
        ].map(({ title, description, icon }, index) => (
          <Card key={index}>
            <Card.FlexBox>
              <Card.H1>{title}</Card.H1>
            </Card.FlexBox>
            <Card.P>{description}</Card.P>
            <div
              className="mb-2 mt-3 w-full bg-slate-400"
              style={{ height: "1px" }}
            ></div>
            <Card.FlexBox>
              <Card.Icon>{icon ? icon : "ICON"}</Card.Icon>
              <Card.Button>Learn More</Card.Button>
            </Card.FlexBox>
          </Card>
        ))}
      </div>
    </Container>
  );
}
