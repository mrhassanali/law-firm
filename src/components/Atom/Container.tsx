import React, { ReactElement } from "react";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};
export default function Container({
  children,
  className,
}: ContainerProps): ReactElement {
  return (
    <div
      className={
        className
          ? `w-10/12 mx-auto md:w-10/12 sm:w-full p-3 ${className}`
          : "w-10/12 mx-auto md:w-10/12 sm:w-full p-3"
      }
    >
      {children}
    </div>
  );
}
