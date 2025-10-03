import React from "react";
import { Accordion } from "../../../../components/Accordion";
import "./style.scss";

export const ItemCountFlush2Subsection = (): JSX.Element => {
  return (
    <Accordion className="item-count-flush-6" flush={false} itemCount="nine" />
  );
};
