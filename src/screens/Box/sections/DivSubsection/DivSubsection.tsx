import React from "react";
import { Accordion } from "../../../../components/Accordion";
import "./style.scss";

export const DivSubsection = (): JSX.Element => {
  return (
    <Accordion className="item-count-flush-3" flush={false} itemCount="six" />
  );
};
