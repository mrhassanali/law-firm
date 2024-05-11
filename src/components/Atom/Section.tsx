import React, { ReactElement } from "react";

interface SectionProps {
  bgColor?: string;
  children?: React.ReactNode;
  className?: string;
}
export default function Section({
  bgColor,
  className,
  children,
}: SectionProps): ReactElement {
  return <section className={className}>{children}</section>;
}
