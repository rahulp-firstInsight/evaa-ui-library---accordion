import React from "react";
import { Accordion } from "../../components/Accordion/Accordion";
import "./style.scss";

export const Box = (): JSX.Element => {
  const createItems = (count: number) =>
    Array.from({ length: count }, (_, i) => ({
      title: `Accordion Item #${i + 1}`,
      content: (
        <div>
          <strong>This is item #{i + 1}'s accordion body.</strong> It contains
          the content for this accordion section.
        </div>
      ),
    }));

  return (
    <div className="box" data-model-id="384:2607-frame">
      <div className="accordion-container">
        <Accordion items={createItems(3)} flush={false} defaultOpenIndex={0} />
        <Accordion items={createItems(2)} flush={false} />
        <Accordion items={createItems(4)} flush={false} />
        <Accordion items={createItems(5)} flush={false} />
        <Accordion items={createItems(6)} flush={false} />
        <Accordion items={createItems(7)} flush={false} />
        <Accordion items={createItems(8)} flush={false} />
        <Accordion items={createItems(9)} flush={false} />
        <Accordion items={createItems(10)} flush={false} />
        <Accordion items={createItems(2)} flush={true} />
        <Accordion items={createItems(3)} flush={true} />
        <Accordion items={createItems(4)} flush={true} />
        <Accordion items={createItems(5)} flush={true} />
        <Accordion items={createItems(6)} flush={true} />
        <Accordion items={createItems(7)} flush={true} />
        <Accordion items={createItems(8)} flush={true} />
        <Accordion items={createItems(9)} flush={true} />
        <Accordion items={createItems(10)} flush={true} />
      </div>
    </div>
  );
};
