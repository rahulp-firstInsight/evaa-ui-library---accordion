import React from "react";
import { Accordion } from "../../components/Accordion";
import "./style.scss";

const generateItems = (count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    id: `item-${i + 1}`,
    title: `Accordion Item #${i + 1}`,
    content: (
      <div>
        <strong>This is item #{i + 1}'s accordion body.</strong> It is shown by
        default, until the collapse plugin adds the appropriate classes that we
        use to style each element. These classes control the overall appearance,
        as well as the showing and hiding via CSS transitions.
      </div>
    ),
  }));
};

export const Box = (): JSX.Element => {
  return (
    <div className="box" data-model-id="384:2607-frame">
      <div className="accordion-container">
        <Accordion items={generateItems(3)} defaultOpenIndex={0} />
        <Accordion items={generateItems(2)} />
        <Accordion items={generateItems(4)} />
        <Accordion items={generateItems(5)} />
        <Accordion items={generateItems(6)} />
        <Accordion items={generateItems(7)} />
        <Accordion items={generateItems(8)} />
        <Accordion items={generateItems(9)} />
        <Accordion items={generateItems(10)} />
        <Accordion items={generateItems(3)} flush defaultOpenIndex={0} />
        <Accordion items={generateItems(2)} flush />
        <Accordion items={generateItems(3)} flush />
        <Accordion items={generateItems(4)} flush />
        <Accordion items={generateItems(5)} flush />
        <Accordion items={generateItems(6)} flush />
        <Accordion items={generateItems(7)} flush />
        <Accordion items={generateItems(8)} flush />
        <Accordion items={generateItems(9)} flush />
        <Accordion items={generateItems(10)} flush />
      </div>
    </div>
  );
};
