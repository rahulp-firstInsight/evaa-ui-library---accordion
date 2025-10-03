import React from "react";
import { AccordionInstanceWrapperSubsection } from "./sections/AccordionInstanceWrapperSubsection";
import { AccordionWrapperSubsection } from "./sections/AccordionWrapperSubsection";
import { DivSubsection } from "./sections/DivSubsection";
import { ItemCountFlush1Subsection } from "./sections/ItemCountFlush1Subsection";
import { ItemCountFlush2Subsection } from "./sections/ItemCountFlush2Subsection";
import { ItemCountFlush3Subsection } from "./sections/ItemCountFlush3Subsection";
import { ItemCountFlush4Subsection } from "./sections/ItemCountFlush4Subsection";
import { ItemCountFlush5Subsection } from "./sections/ItemCountFlush5Subsection";
import { ItemCountFlush6Subsection } from "./sections/ItemCountFlush6Subsection";
import { ItemCountFlush7Subsection } from "./sections/ItemCountFlush7Subsection";
import { ItemCountFlush8Subsection } from "./sections/ItemCountFlush8Subsection";
import { ItemCountFlush9Subsection } from "./sections/ItemCountFlush9Subsection";
import { ItemCountFlush10Subsection } from "./sections/ItemCountFlush10Subsection";
import { ItemCountFlush11Subsection } from "./sections/ItemCountFlush11Subsection";
import { ItemCountFlush12Subsection } from "./sections/ItemCountFlush12Subsection";
import { ItemCountFlushSubsection } from "./sections/ItemCountFlushSubsection";
import { ItemCountFlushWrapperSubsection } from "./sections/ItemCountFlushWrapperSubsection";
import { SectionComponentNodeSubsection } from "./sections/SectionComponentNodeSubsection";
import "./style.scss";

export const Box = (): JSX.Element => {
  return (
    <div className="box" data-model-id="384:2607-frame">
      <div className="accordion-2">
        <ItemCountFlushSubsection />
        <ItemCountFlushWrapperSubsection />
        <AccordionWrapperSubsection />
        <AccordionInstanceWrapperSubsection />
        <DivSubsection />
        <SectionComponentNodeSubsection />
        <ItemCountFlush1Subsection />
        <ItemCountFlush2Subsection />
        <ItemCountFlush3Subsection />
        <ItemCountFlush4Subsection />
        <ItemCountFlush5Subsection />
        <ItemCountFlush6Subsection />
        <ItemCountFlush7Subsection />
        <ItemCountFlush8Subsection />
        <ItemCountFlush9Subsection />
        <ItemCountFlush10Subsection />
        <ItemCountFlush11Subsection />
        <ItemCountFlush12Subsection />
      </div>
    </div>
  );
};
