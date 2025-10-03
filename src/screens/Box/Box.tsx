import React from "react";
import { Accordion } from "../../components/Accordion";
import "./style.scss";

const generateItems = (count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    id: `item-${i + 1}`,
    title: `Accordion Item #${i + 1}`,
    content: (
      <div>
        <strong>This is accordion item #{i + 1}'s body.</strong> It is shown by
        default, until the collapse plugin adds the appropriate classes that we use
        to style each element. These classes control the overall appearance, as well
        as the showing and hiding via CSS transitions.
      </div>
    ),
  }));
};

export const Box = (): JSX.Element => {
  return (
    <div className="box" data-model-id="384:2607-frame">
      <div className="accordion-container">
        <Accordion items={generateItems(3)} flush={false} />
        <Accordion items={generateItems(2)} flush={false} />
        <Accordion items={generateItems(4)} flush={false} />
        <Accordion items={generateItems(5)} flush={false} />
        <Accordion items={generateItems(6)} flush={false} />
        <Accordion items={generateItems(7)} flush={false} />
        <Accordion items={generateItems(8)} flush={false} />
        <Accordion items={generateItems(9)} flush={false} />
        <Accordion items={generateItems(10)} flush={false} />
        <Accordion items={generateItems(3)} flush={true} />
        <Accordion items={generateItems(5)} flush={true} />
        <Accordion items={generateItems(6)} flush={true} />
        <Accordion items={generateItems(7)} flush={true} />
        <Accordion items={generateItems(8)} flush={true} />
        <Accordion items={generateItems(9)} flush={true} />
        <Accordion items={generateItems(10)} flush={true} />
      </div>
    </div>
  );
};
