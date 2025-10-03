import React from "react";
import { Accordion } from "../../../../components/Accordion";
import "./style.scss";

export const ItemCountFlush3Subsection = (): JSX.Element => {
  return (
    <Accordion className="item-count-flush-7" flush={false} itemCount="ten" />
  );
};
