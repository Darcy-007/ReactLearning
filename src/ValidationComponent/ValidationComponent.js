import React from "react";

const ValidationComponent = (props) => {
    let text = (<p>"Text long enough"</p>)

    if (props.size <= 5) {
        text = (<p style={{color: "red"}}>"Text too short"</p>)
    }

    return (
    <p>{text}</p>
    );
};
export default ValidationComponent;