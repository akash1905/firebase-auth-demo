import React from "react";
import "../style.css";

function InputControl(props) {
    return (
        <div className="input-control">
            {props.label && <label>{props.label}</label>}
            <input type="text" {...props} />
        </div>
    );
}

export default InputControl;
