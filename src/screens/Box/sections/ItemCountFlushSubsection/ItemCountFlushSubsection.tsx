import React from "react";
import { Accordion } from "../../../../components/Accordion";
import "./style.scss";

export const ItemCountFlushSubsection = (): JSX.Element => {
  return (
    <Accordion className="item-count-flush" flush={false} itemCount="three" />
  );
};
