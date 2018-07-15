import React from "react";
import "./ClickPanel.css";

const ClickPanel = props => (
    <div role="img"
        onClick={() => props.handleClick(props.id)}
        style={{ backgroundImage: 'url("${props.image}")'}}
        className={'click-panel${props.shake ? " shake : ""}'} />
);

export default ClickPanel;