import React, { ReactElement } from "react";
import { Card } from "../../components";
import { Container } from "../../components/Atom";
import {DoubleCrossIcon} from "../../components/Icons";

export default function PracticeArea(): ReactElement {
  return (
    <Container className="pb-8 pt-8 ">
      <div className="mb-5 mt-3 flex w-full flex-row flex-wrap items-start justify-between p-3 text-white xs:flex-col sm:flex-row md:flex-row">
        <div>
          <h1 className="text-3xl">
            Explorer <br /> Practice Area
          </h1>
          <DoubleCrossIcon className="mt-0 h-[4rem] w-[4rem]" />
        </div>
        <div>
          <button className="cursor-pointer bg-button p-4 backdrop-blur-0 backdrop-saturate-50 text-black">
            Free Consulting
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-5 mobile:grid-cols-1 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2">
        {[
          {
            title: "Human Rights",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus accusamus molestiae modi hic velit, excepturi quo! Eum corporis odio a iusto tempora dolor asperiores assumenda?",
          },
          {
            title: "Climate Change",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus accusamus molestiae modi hic velit, excepturi quo! Eum corporis odio a iusto tempora dolor asperiores assumenda?",
          },
          {
            title: "Health",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus accusamus molestiae modi hic velit, excepturi quo! Eum corporis odio a iusto tempora dolor asperiores assumenda?",
          },

          {
            title: "Education",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus accusamus molestiae modi hic velit, excepturi quo! Eum corporis odio a iusto tempora dolor asperiores assumenda?",
          },
        ].map(({ title, description }, index) => (
          <Card key={index}>
            <Card.FlexBox>
              <Card.H1>{title}</Card.H1>
              <Card.Count>{index + 1}</Card.Count>
            </Card.FlexBox>
            <Card.P>{description}</Card.P>
          </Card>
        ))}
      </div>
    </Container>
  );
}
