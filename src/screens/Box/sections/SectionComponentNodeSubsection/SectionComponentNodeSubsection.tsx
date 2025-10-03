import React from "react";
import { Accordion } from "../../../../components/Accordion";
import "./style.scss";

export const SectionComponentNodeSubsection = (): JSX.Element => {
  return (
    <Accordion className="item-count-flush-4" flush={false} itemCount="seven" />
  );
};
