import React from "react";
import { Accordion } from "../../../../components/Accordion";
import "./style.scss";

export const AccordionInstanceWrapperSubsection = (): JSX.Element => {
  return (
    <Accordion className="item-count-flush-2" flush={false} itemCount="five" />
  );
};
