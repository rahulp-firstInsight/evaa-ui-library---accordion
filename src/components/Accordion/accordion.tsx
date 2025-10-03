import React, { useState } from "react";
import "./accordion.scss";

export interface AccordionItemData {
  id: string;
  title: string;
  content: React.ReactNode;
}

export interface AccordionProps {
  items: AccordionItemData[];
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

  const toggleItem = (index: number) => {
    if (allowMultiple) {
      setOpenIndexes((prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index)
          : [...prev, index]
      );
    } else {
      setOpenIndexes((prev) =>
        prev.includes(index) ? [] : [index]
      );
    }
  };

  const isOpen = (index: number) => openIndexes.includes(index);

  return (
    <div className={`accordion ${flush ? "accordion--flush" : ""} ${className}`}>
      {items.map((item, index) => (
        <div
          key={item.id}
          className={`accordion__item ${isOpen(index) ? "accordion__item--open" : ""}`}
        >
          <div
            className="accordion__header"
            onClick={() => toggleItem(index)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                toggleItem(index);
              }
            }}
          >
            <div className="accordion__title">{item.title}</div>
            <div className="accordion__icon">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`accordion__chevron ${isOpen(index) ? "accordion__chevron--open" : ""}`}
              >
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
          {isOpen(index) && (
            <div className="accordion__body">
              <div className="accordion__content">{item.content}</div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
