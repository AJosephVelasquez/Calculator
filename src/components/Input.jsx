import React from "react";

function Screen(props){
    return (
    <div className="input-wrapper">
        <div className="result">
            <h1>{props.result}</h1>
        </div>
        <div className="input">
            <h3>{props.input}</h3>
        </div>
    </div>
    )
}

export default Screen;