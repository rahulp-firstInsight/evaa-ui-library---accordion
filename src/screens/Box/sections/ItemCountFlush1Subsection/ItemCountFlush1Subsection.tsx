import React from "react";
import { Accordion } from "../../../../components/Accordion";
import "./style.scss";

export const ItemCountFlush1Subsection = (): JSX.Element => {
  return (
    <Accordion className="item-count-flush-5" flush={false} itemCount="eight" />
  );
};
