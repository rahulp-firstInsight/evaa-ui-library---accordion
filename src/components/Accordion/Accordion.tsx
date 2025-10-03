import React from "react";
import { LayoutSlotsBase } from "../LayoutSlotsBase";
import { TextTitle } from "../TextTitle";
import "./style.scss";

interface Props {
  itemCount:
    | "seven"
    | "two"
    | "ten"
    | "three"
    | "nine"
    | "four"
    | "five"
    | "eight"
    | "six";
  flush: boolean;
  className: any;
}

export const Accordion = ({
  itemCount,
  flush,
  className,
}: Props): JSX.Element => {
  return (
    <div className={`accordion ${itemCount} flush-${flush} ${className}`}>
      <div className="components-accordion">
        <div className="accordion-header">
          <div className="header">
            <TextTitle
              badge={false}
              className="title"
              fillContainer
              iconLeft={false}
              iconRight={false}
              subtitle={false}
              textClassName="text-title-instance"
              title="Accordion Item"
            />
            <div className="icon">
              <div className="width-change-size">
                <div className="ignore" />

                <div className="ignore" />
              </div>

              <div className="icon-wrapper-h">
                <div className="height-change-size">
                  <div className="ignore" />

                  <div className="ignore" />
                </div>

                <div className="icon-wrapper">
                  <img
                    className="union"
                    alt="Union"
                    src={
                      (!flush && itemCount === "eight") ||
                      (!flush && itemCount === "nine") ||
                      (!flush && itemCount === "seven") ||
                      (!flush && itemCount === "six") ||
                      (!flush && itemCount === "ten") ||
                      (flush && itemCount === "two")
                        ? "https://c.animaapp.com/95tGcsL0/img/union-169.svg"
                        : itemCount === "three" && !flush
                          ? "https://c.animaapp.com/95tGcsL0/img/union-115.svg"
                          : !flush && ["five", "four"].includes(itemCount)
                            ? "https://c.animaapp.com/95tGcsL0/img/union-124.svg"
                            : itemCount === "two" && !flush
                              ? "https://c.animaapp.com/95tGcsL0/img/union-118.svg"
                              : "https://c.animaapp.com/95tGcsL0/img/union-213.svg"
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="accordion-body">
          <LayoutSlotsBase className="layout-slots-base-instance" />
        </div>
      </div>

      {(itemCount === "eight" ||
        itemCount === "five" ||
        itemCount === "four" ||
        itemCount === "nine" ||
        itemCount === "seven" ||
        itemCount === "six" ||
        itemCount === "ten" ||
        itemCount === "three") && (
        <div className="accordion-header-wrapper">
          <div className="header-wrapper">
            <div className="header">
              <TextTitle
                badge={false}
                className="title"
                fillContainer
                iconLeft={false}
                iconRight={false}
                subtitle={false}
                textClassName="instance-node"
                title="Accordion Item"
              />
              <div className="div">
                <div className="width-change-size">
                  <div className="ignore" />

                  <div className="ignore" />
                </div>

                <div className="icon-wrapper-h">
                  <div className="height-change-size">
                    <div className="ignore" />

                    <div className="ignore" />
                  </div>

                  <div className="icon-wrapper">
                    <img
                      className="img"
                      alt="Union"
                      src={
                        itemCount === "three" && !flush
                          ? "https://c.animaapp.com/95tGcsL0/img/union-117.svg"
                          : flush
                            ? "https://c.animaapp.com/95tGcsL0/img/union-222.svg"
                            : !flush && ["five", "four"].includes(itemCount)
                              ? "https://c.animaapp.com/95tGcsL0/img/union-126.svg"
                              : "https://c.animaapp.com/95tGcsL0/img/union-168.svg"
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {(itemCount === "eight" ||
        itemCount === "five" ||
        itemCount === "four" ||
        itemCount === "nine" ||
        itemCount === "seven" ||
        itemCount === "six" ||
        itemCount === "ten") && (
        <div className="div-wrapper">
          <div className="header-wrapper">
            <div className="header">
              <TextTitle
                badge={false}
                className="title"
                fillContainer
                iconLeft={false}
                iconRight={false}
                subtitle={false}
                textClassName="instance-node"
                title="Accordion Item"
              />
              <div className="div">
                <div className="width-change-size">
                  <div className="ignore" />

                  <div className="ignore" />
                </div>

                <div className="icon-wrapper-h">
                  <div className="height-change-size">
                    <div className="ignore" />

                    <div className="ignore" />
                  </div>

                  <div className="icon-wrapper">
                    <img
                      className="img"
                      alt="Union"
                      src={
                        flush
                          ? "https://c.animaapp.com/95tGcsL0/img/union-222.svg"
                          : !flush && ["five", "four"].includes(itemCount)
                            ? "https://c.animaapp.com/95tGcsL0/img/union-126.svg"
                            : "https://c.animaapp.com/95tGcsL0/img/union-168.svg"
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {["four", "three", "two"].includes(itemCount) && (
        <div className="components-accordion-2">
          <div className="header-wrapper">
            <div className="header">
              <TextTitle
                badge={false}
                className="title"
                fillContainer
                iconLeft={false}
                iconRight={false}
                subtitle={false}
                textClassName="instance-node"
                title="Accordion Item"
              />
              <div className="div">
                <div className="width-change-size">
                  <div className="ignore" />

                  <div className="ignore" />
                </div>

                <div className="icon-wrapper-h">
                  <div className="height-change-size">
                    <div className="ignore" />

                    <div className="ignore" />
                  </div>

                  <div className="icon-wrapper">
                    <img
                      className="img"
                      alt="Union"
                      src={
                        flush
                          ? "https://c.animaapp.com/95tGcsL0/img/union-222.svg"
                          : itemCount === "three" && !flush
                            ? "https://c.animaapp.com/95tGcsL0/img/union-117.svg"
                            : itemCount === "two" && !flush
                              ? "https://c.animaapp.com/95tGcsL0/img/union-119.svg"
                              : "https://c.animaapp.com/95tGcsL0/img/union-126.svg"
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {["eight", "five", "nine", "seven", "six", "ten"].includes(itemCount) && (
        <div className="components-accordion-3">
          <div className="header-wrapper">
            <div className="header">
              <TextTitle
                badge={false}
                className="title"
                fillContainer
                iconLeft={false}
                iconRight={false}
                subtitle={false}
                textClassName="instance-node"
                title="Accordion Item"
              />
              <div className="div">
                <div className="width-change-size">
                  <div className="ignore" />

                  <div className="ignore" />
                </div>

                <div className="icon-wrapper-h">
                  <div className="height-change-size">
                    <div className="ignore" />

                    <div className="ignore" />
                  </div>

                  <div className="icon-wrapper">
                    <img
                      className="img"
                      alt="Union"
                      src={
                        flush
                          ? "https://c.animaapp.com/95tGcsL0/img/union-222.svg"
                          : "https://c.animaapp.com/95tGcsL0/img/union-168.svg"
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {itemCount === "five" && (
        <div className="components-accordion-4">
          <div className="header-wrapper">
            <div className="header">
              <TextTitle
                badge={false}
                className="title"
                fillContainer
                iconLeft={false}
                iconRight={false}
                subtitle={false}
                textClassName="instance-node"
                title="Accordion Item"
              />
              <div className="div">
                <div className="width-change-size">
                  <div className="ignore" />

                  <div className="ignore" />
                </div>

                <div className="icon-wrapper-h">
                  <div className="height-change-size">
                    <div className="ignore" />

                    <div className="ignore" />
                  </div>

                  <div className="icon-wrapper">
                    <img
                      className="img"
                      alt="Union"
                      src={
                        flush
                          ? "https://c.animaapp.com/95tGcsL0/img/union-222.svg"
                          : "https://c.animaapp.com/95tGcsL0/img/union-168.svg"
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {["eight", "nine", "seven", "six", "ten"].includes(itemCount) && (
        <div className="components-accordion-5">
          <div className="header-wrapper">
            <div className="header">
              <TextTitle
                badge={false}
                className="title"
                fillContainer
                iconLeft={false}
                iconRight={false}
                subtitle={false}
                textClassName="instance-node"
                title="Accordion Item"
              />
              <div className="div">
                <div className="width-change-size">
                  <div className="ignore" />

                  <div className="ignore" />
                </div>

                <div className="icon-wrapper-h">
                  <div className="height-change-size">
                    <div className="ignore" />

                    <div className="ignore" />
                  </div>

                  <div className="icon-wrapper">
                    <img
                      className="img"
                      alt="Union"
                      src={
                        flush
                          ? "https://c.animaapp.com/95tGcsL0/img/union-222.svg"
                          : "https://c.animaapp.com/95tGcsL0/img/union-168.svg"
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {itemCount === "six" && (
        <div className="components-accordion-6">
          <div className="header-wrapper">
            <div className="header">
              <TextTitle
                badge={false}
                className="title"
                fillContainer
                iconLeft={false}
                iconRight={false}
                subtitle={false}
                textClassName="instance-node"
                title="Accordion Item"
              />
              <div className="div">
                <div className="width-change-size">
                  <div className="ignore" />

                  <div className="ignore" />
                </div>

                <div className="icon-wrapper-h">
                  <div className="height-change-size">
                    <div className="ignore" />

                    <div className="ignore" />
                  </div>

                  <div className="icon-wrapper">
                    <img
                      className="img"
                      alt="Union"
                      src={
                        flush
                          ? "https://c.animaapp.com/95tGcsL0/img/union-222.svg"
                          : "https://c.animaapp.com/95tGcsL0/img/union-168.svg"
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {["eight", "nine", "seven", "ten"].includes(itemCount) && (
        <div className="components-accordion-7">
          <div className="header-wrapper">
            <div className="header">
              <TextTitle
                badge={false}
                className="title"
                fillContainer
                iconLeft={false}
                iconRight={false}
                subtitle={false}
                textClassName="instance-node"
                title="Accordion Item"
              />
              <div className="div">
                <div className="width-change-size">
                  <div className="ignore" />

                  <div className="ignore" />
                </div>

                <div className="icon-wrapper-h">
                  <div className="height-change-size">
                    <div className="ignore" />

                    <div className="ignore" />
                  </div>

                  <div className="icon-wrapper">
                    <img
                      className="img"
                      alt="Union"
                      src={
                        flush
                          ? "https://c.animaapp.com/95tGcsL0/img/union-222.svg"
                          : "https://c.animaapp.com/95tGcsL0/img/union-168.svg"
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {itemCount === "seven" && (
        <div className="components-accordion-8">
          <div className="header-wrapper">
            <div className="header">
              <TextTitle
                badge={false}
                className="title"
                fillContainer
                iconLeft={false}
                iconRight={false}
                subtitle={false}
                textClassName="instance-node"
                title="Accordion Item"
              />
              <div className="div">
                <div className="width-change-size">
                  <div className="ignore" />

                  <div className="ignore" />
                </div>

                <div className="icon-wrapper-h">
                  <div className="height-change-size">
                    <div className="ignore" />

                    <div className="ignore" />
                  </div>

                  <div className="icon-wrapper">
                    <img
                      className="img"
                      alt="Union"
                      src={
                        flush
                          ? "https://c.animaapp.com/95tGcsL0/img/union-222.svg"
                          : "https://c.animaapp.com/95tGcsL0/img/union-168.svg"
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {["eight", "nine", "ten"].includes(itemCount) && (
        <div className="components-accordion-9">
          <div className="header-wrapper">
            <div className="header">
              <TextTitle
                badge={false}
                className="title"
                fillContainer
                iconLeft={false}
                iconRight={false}
                subtitle={false}
                textClassName="instance-node"
                title="Accordion Item"
              />
              <div className="div">
                <div className="width-change-size">
                  <div className="ignore" />

                  <div className="ignore" />
                </div>

                <div className="icon-wrapper-h">
                  <div className="height-change-size">
                    <div className="ignore" />

                    <div className="ignore" />
                  </div>

                  <div className="icon-wrapper">
                    <img
                      className="img"
                      alt="Union"
                      src={
                        flush
                          ? "https://c.animaapp.com/95tGcsL0/img/union-222.svg"
                          : "https://c.animaapp.com/95tGcsL0/img/union-168.svg"
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {itemCount === "nine" && (
        <div className="components-accordion-10">
          <div className="header-wrapper">
            <div className="header">
              <TextTitle
                badge={false}
                className="title"
                fillContainer
                iconLeft={false}
                iconRight={false}
                subtitle={false}
                textClassName="instance-node"
                title="Accordion Item"
              />
              <div className="div">
                <div className="width-change-size">
                  <div className="ignore" />

                  <div className="ignore" />
                </div>

                <div className="icon-wrapper-h">
                  <div className="height-change-size">
                    <div className="ignore" />

                    <div className="ignore" />
                  </div>

                  <div className="icon-wrapper">
                    <img
                      className="img"
                      alt="Union"
                      src={
                        flush
                          ? "https://c.animaapp.com/95tGcsL0/img/union-222.svg"
                          : "https://c.animaapp.com/95tGcsL0/img/union-168.svg"
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {itemCount === "ten" && (
        <>
          <div className="components-accordion-11">
            <div className="header-wrapper">
              <div className="header">
                <TextTitle
                  badge={false}
                  className="title"
                  fillContainer
                  iconLeft={false}
                  iconRight={false}
                  subtitle={false}
                  textClassName="instance-node"
                  title="Accordion Item"
                />
                <div className="div">
                  <div className="width-change-size">
                    <div className="ignore" />

                    <div className="ignore" />
                  </div>

                  <div className="icon-wrapper-h">
                    <div className="height-change-size">
                      <div className="ignore" />

                      <div className="ignore" />
                    </div>

                    <div className="icon-wrapper">
                      <img
                        className="img"
                        alt="Union"
                        src={
                          flush
                            ? "https://c.animaapp.com/95tGcsL0/img/union-222.svg"
                            : "https://c.animaapp.com/95tGcsL0/img/union-168.svg"
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="components-accordion-12">
            <div className="header-wrapper">
              <div className="header">
                <TextTitle
                  badge={false}
                  className="title"
                  fillContainer
                  iconLeft={false}
                  iconRight={false}
                  subtitle={false}
                  textClassName="instance-node"
                  title="Accordion Item"
                />
                <div className="div">
                  <div className="width-change-size">
                    <div className="ignore" />

                    <div className="ignore" />
                  </div>

                  <div className="icon-wrapper-h">
                    <div className="height-change-size">
                      <div className="ignore" />

                      <div className="ignore" />
                    </div>

                    <div className="icon-wrapper">
                      <img
                        className="img"
                        alt="Union"
                        src={
                          flush
                            ? "https://c.animaapp.com/95tGcsL0/img/union-222.svg"
                            : "https://c.animaapp.com/95tGcsL0/img/union-168.svg"
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
