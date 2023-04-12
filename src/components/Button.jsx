import React from "react";

function Button(props){
    return (<p onClick={() => {return props.clicked(props.symbol)}} className="button" style={{ backgroundColor: props.color }} data-value={props.symbol}>{props.symbol}</p>)
}

export default Button;