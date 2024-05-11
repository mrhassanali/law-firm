import React, { ReactElement } from "react";
import { Card } from "../../components";
import { Container } from "../../components/Atom";
import { DoubleCrossIcon } from "../../components/Icons";

export default function Help(): ReactElement {
  return (
    <Container className="pb-8 pt-8 ">
      <div className="mb-5 mt-3 flex w-full flex-row flex-wrap items-start  p-3 text-white xs:flex-col sm:flex-row md:flex-row">
        <div className="mobile:w-full xs:w-full sm:w-full md:w-1/3 lg:w-1/3">
          <h1 className="text-3xl">
            Ways We Can <br /> Help
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

      <div className="grid grid-cols-3 gap-5 mobile:grid-cols-1 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-3">
        {[
          {
            title: "Human Rights",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus accusamus molestiae modi hic velit, excepturi quo! Eum corporis odio a iusto tempora dolor asperiores assumenda?",
          },
          {
            title: "Climate Change Lightigation",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus accusamus molestiae modi hic velit, excepturi quo! Eum corporis odio a iusto tempora dolor asperiores assumenda?",
          },
          {
            title: "Health",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus accusamus molestiae modi hic velit, excepturi quo! Eum corporis odio a iusto tempora dolor asperiores assumenda?",
          },
        ].map(({ title, description }, index) => (
          <Card key={index}>
            <Card.FlexBox>
              <Card.H1>{title}</Card.H1>
              {/* <Card.Count>{index + 1}</Card.Count> */}
            </Card.FlexBox>
            <Card.P>{description}</Card.P>
          </Card>
        ))}
      </div>
    </Container>
  );
}
