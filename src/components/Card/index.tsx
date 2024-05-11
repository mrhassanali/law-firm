import React, { ReactElement } from "react";

type CardProps = {
  children?: React.ReactNode;
  className?: string;
  cardStyle?: React.CSSProperties;
};

export default function Card({
  children,
  className,
  cardStyle,
}: CardProps): ReactElement {
  return (
    <div
      className={`rounded-lg bg-card p-5 text-white shadow-lg ${className ? className : ""}`}
      style={cardStyle && cardStyle}
    >
      {children}
    </div>
  );
}

Card.H1 = function CardTitle({ children }: CardProps) {
  return (
    <h1 className="sm:text-md xs:text-md mobile:text-md text-2xl font-bold text-slate-300 md:text-lg">
      {children}
    </h1>
  );
};

Card.FlexBox = function CardFlexbox({ children }: CardProps) {
  return (
    <div className="mb-3 mt-1 flex items-center justify-between">
      {children}
    </div>
  );
};
Card.Count = function CardCount({ children, className }: CardProps) {
  return (
    <p
      className={`w-fit rounded-full bg-section px-2 text-2xl font-bold text-button ${
        className ? className : ""
      }`}
    >
      {children}
    </p>
  );
};

Card.P = function CardParagraph({ children }: CardProps) {
  return (
    <p className="sm:text-md text-md text-slate-400 mobile:text-sm xs:text-sm md:text-lg">
      {children}
    </p>
  );
};

Card.Button = function CardButton({ children, className }: CardProps) {
  return (
    <div>
      <button className="rounded-lg bg-app-background p-2 text-white hover:bg-button hover:text-black">
        {children}
      </button>
    </div>
  );
};

Card.Icon = function CardIcon({ children }: CardProps) {
  return <div className="h-10 w-10 text-white">{children}</div>;
};
