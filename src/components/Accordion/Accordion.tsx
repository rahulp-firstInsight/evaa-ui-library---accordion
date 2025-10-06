import React, { useState } from "react";
import "./accordion.scss";

interface AccordionItemProps {
  title: string;
  content: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
  flush: boolean;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  content,
  isOpen,
  onToggle,
  flush,
}) => {
  return (
    <div className={`accordion-item ${flush ? "flush" : ""}`}>
      <div className="accordion-header" onClick={onToggle}>
        <div className="accordion-title">{title}</div>
        <div className={`accordion-icon ${isOpen ? "open" : ""}`}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M4 6L8 10L12 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      {isOpen && <div className="accordion-body">{content}</div>}
    </div>
  );
};

export interface AccordionProps {
  items: Array<{
    title: string;
    content: React.ReactNode;
  }>;
  flush?: boolean;
  defaultOpenIndex?: number;
  allowMultiple?: boolean;
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({
  items,
  flush = false,
  defaultOpenIndex,
  allowMultiple = false,
  className = "",
}) => {
  const [openIndexes, setOpenIndexes] = useState<number[]>(
    defaultOpenIndex !== undefined ? [defaultOpenIndex] : []
  );

  const handleToggle = (index: number) => {
    if (allowMultiple) {
      setOpenIndexes((prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index)
          : [...prev, index]
      );
    } else {
      setOpenIndexes((prev) => (prev.includes(index) ? [] : [index]));
    }
  };

  return (
    <div className={`accordion ${flush ? "accordion-flush" : ""} ${className}`}>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndexes.includes(index)}
          onToggle={() => handleToggle(index)}
          flush={flush}
        />
      ))}
    </div>
  );
};
