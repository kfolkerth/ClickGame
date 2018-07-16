import React from "react";
import "./ClickPanel.css";

const ClickPanel = props => (
    <img
    aria-label="click item"
    alt="Meaningful text"
    onClick={() => props.handleClick(props.id)}
    src={props.image}
    className={`click-item${props.shake ? " shake" : ""} m-2`}
  />
);


export default ClickPanel;