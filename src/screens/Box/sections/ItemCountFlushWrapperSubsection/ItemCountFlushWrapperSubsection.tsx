import React from "react";
import { Accordion } from "../../../../components/Accordion";
import "./style.scss";

export const ItemCountFlushWrapperSubsection = (): JSX.Element => {
  return (
    <Accordion className="accordion-instance" flush={false} itemCount="two" />
  );
};
