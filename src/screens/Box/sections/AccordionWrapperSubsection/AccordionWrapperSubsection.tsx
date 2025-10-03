import React from "react";
import { Accordion } from "../../../../components/Accordion";
import "./style.scss";

export const AccordionWrapperSubsection = (): JSX.Element => {
  return (
    <Accordion
      className="design-component-instance-node"
      flush={false}
      itemCount="four"
    />
  );
};
