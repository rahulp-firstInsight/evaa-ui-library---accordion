import React from "react";
import { Accordion, AccordionProps } from "./Accordion";

export default {
  title: "Components/Accordion",
  component: Accordion,
  parameters: {
    layout: "padded",
  },
  argTypes: {
    flush: {
      control: "boolean",
      description: "Remove borders and rounded corners",
    },
    allowMultiple: {
      control: "boolean",
      description: "Allow multiple items to be open at once",
    },
    defaultOpenIndex: {
      control: "number",
      description: "Index of the item to be open by default",
    },
  },
};

const sampleItems = [
  {
    title: "Accordion Item #1",
    content: (
      <div>
        <strong>This is the first item's accordion body.</strong> It is shown
        by default, until the collapse plugin adds the appropriate classes that
        we use to style each element. These classes control the overall
        appearance, as well as the showing and hiding via CSS transitions.
      </div>
    ),
  },
  {
    title: "Accordion Item #2",
    content: (
      <div>
        <strong>This is the second item's accordion body.</strong> It is hidden
        by default, until the collapse plugin adds the appropriate classes that
        we use to style each element. These classes control the overall
        appearance, as well as the showing and hiding via CSS transitions.
      </div>
    ),
  },
  {
    title: "Accordion Item #3",
    content: (
      <div>
        <strong>This is the third item's accordion body.</strong> It is hidden
        by default, until the collapse plugin adds the appropriate classes that
        we use to style each element. These classes control the overall
        appearance, as well as the showing and hiding via CSS transitions.
      </div>
    ),
  },
];

export const Default = (args: AccordionProps) => <Accordion {...args} />;
Default.args = {
  items: sampleItems,
  flush: false,
  defaultOpenIndex: 0,
  allowMultiple: false,
};

export const Flush = (args: AccordionProps) => <Accordion {...args} />;
Flush.args = {
  items: sampleItems,
  flush: true,
  defaultOpenIndex: 0,
  allowMultiple: false,
};

export const AllowMultiple = (args: AccordionProps) => <Accordion {...args} />;
AllowMultiple.args = {
  items: sampleItems,
  flush: false,
  allowMultiple: true,
};

export const TwoItems = (args: AccordionProps) => <Accordion {...args} />;
TwoItems.args = {
  items: sampleItems.slice(0, 2),
  flush: false,
  defaultOpenIndex: 0,
};

export const FourItems = (args: AccordionProps) => <Accordion {...args} />;
FourItems.args = {
  items: [
    ...sampleItems,
    {
      title: "Accordion Item #4",
      content: (
        <div>
          <strong>This is the fourth item's accordion body.</strong> Additional
          content for demonstration purposes.
        </div>
      ),
    },
  ],
  flush: false,
};

export const FiveItems = (args: AccordionProps) => <Accordion {...args} />;
FiveItems.args = {
  items: [
    ...sampleItems,
    {
      title: "Accordion Item #4",
      content: <div>Fourth item content</div>,
    },
    {
      title: "Accordion Item #5",
      content: <div>Fifth item content</div>,
    },
  ],
  flush: false,
};

export const SixItems = (args: AccordionProps) => <Accordion {...args} />;
SixItems.args = {
  items: [
    ...sampleItems,
    {
      title: "Accordion Item #4",
      content: <div>Fourth item content</div>,
    },
    {
      title: "Accordion Item #5",
      content: <div>Fifth item content</div>,
    },
    {
      title: "Accordion Item #6",
      content: <div>Sixth item content</div>,
    },
  ],
  flush: false,
};

export const SevenItems = (args: AccordionProps) => <Accordion {...args} />;
SevenItems.args = {
  items: Array.from({ length: 7 }, (_, i) => ({
    title: `Accordion Item #${i + 1}`,
    content: <div>Content for item {i + 1}</div>,
  })),
  flush: false,
};

export const EightItems = (args: AccordionProps) => <Accordion {...args} />;
EightItems.args = {
  items: Array.from({ length: 8 }, (_, i) => ({
    title: `Accordion Item #${i + 1}`,
    content: <div>Content for item {i + 1}</div>,
  })),
  flush: false,
};

export const NineItems = (args: AccordionProps) => <Accordion {...args} />;
NineItems.args = {
  items: Array.from({ length: 9 }, (_, i) => ({
    title: `Accordion Item #${i + 1}`,
    content: <div>Content for item {i + 1}</div>,
  })),
  flush: false,
};

export const TenItems = (args: AccordionProps) => <Accordion {...args} />;
TenItems.args = {
  items: Array.from({ length: 10 }, (_, i) => ({
    title: `Accordion Item #${i + 1}`,
    content: <div>Content for item {i + 1}</div>,
  })),
  flush: false,
};
