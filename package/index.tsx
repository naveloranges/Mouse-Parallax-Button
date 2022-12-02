import React from "react";
import "./style.css";
import { Props } from "./types";

export const MouseParallaxButton = (props: Props) => {
  function tactileBehaviour(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (
      e.pageX <
      e.currentTarget.getBoundingClientRect().x +
        0.3 * e.currentTarget.offsetWidth
    ) {
      console.log("left");
      if (!e.currentTarget.classList.contains("left")) {
        e.currentTarget.classList.add("left");
      }
      e.currentTarget.classList.remove("right");
      e.currentTarget.classList.remove("center");
    }
    if (
      e.pageX >
      e.currentTarget.getBoundingClientRect().x +
        0.65 * e.currentTarget.offsetWidth
    ) {
      console.log("right");
      if (!e.currentTarget.classList.contains("right")) {
        e.currentTarget.classList.add("right");
      }
      e.currentTarget.classList.remove("left");
      e.currentTarget.classList.remove("center");
    }
    if (
      e.pageX >
        e.currentTarget.getBoundingClientRect().x +
          0.3 * e.currentTarget.offsetWidth &&
      e.pageX <
        e.currentTarget.getBoundingClientRect().x +
          0.65 * e.currentTarget.offsetWidth
    ) {
      console.log("center");
      if (!e.currentTarget.classList.contains("center")) {
        e.currentTarget.classList.add("center");
      }
      e.currentTarget.classList.remove("right");
      e.currentTarget.classList.remove("left");
    }
  }

  function resetTactileBehaviour(
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) {
    e.currentTarget.classList.remove("right");
    e.currentTarget.classList.remove("left");
    e.currentTarget.classList.remove("center");
  }

  function clickBehaviour(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    e.currentTarget.classList.remove("right");
    e.currentTarget.classList.remove("left");
    e.currentTarget.classList.add("clicked");
  }

  function resetClickBehaviour(
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) {
    e.currentTarget.classList.remove("clicked");
  }

  return (
    <div className="Wrapper">
      <div
        className="MouseParallaxButton"
        onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
          props.handleClick();
        }}
        onMouseDown={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
          clickBehaviour(e)
        }
        onMouseUp={resetClickBehaviour}
        onMouseOut={resetTactileBehaviour}
        onMouseMove={tactileBehaviour}
      >
        Btnjs
      </div>
      <div className="MirroringSpan"></div>
    </div>
  );
};
