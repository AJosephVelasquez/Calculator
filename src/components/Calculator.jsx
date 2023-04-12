import React, { useState } from "react";
import Button from "./Button";
import Screen from "./Input";
import * as math from "mathjs";


function Calculator(){

    const[output, setOutput] = useState("");
    const[input, setInput] = useState("");

    const functionColor = "#FF6000"
    const clearColor = "#D21312"

    function addToText(val){
        setInput((prevValue) => {
            return [...prevValue, val];
        })
    }

    function calculateResult() {
        let text = Array.from(input).join("");
        
        while (/[*/+-]$/.test(text)) {
          text = text.slice(0, -1);
        }
      
        setOutput(text === "" ? "" : math.evaluate(text));
      }
      

    function clearAll(){
        setInput("");
        setOutput("");
    }

    return (
        <div className="main">
            <Screen input={input} result={output} />
            <div className="body">
                <div className="row">
                    <Button clicked={addToText} symbol="7"/>
                    <Button clicked={addToText} symbol="8"/>
                    <Button clicked={addToText} symbol="9"/>
                    <Button clicked={addToText} symbol="/" color={functionColor}/>
                </div>
                <div className="row">
                    <Button clicked={addToText} symbol="4"/>
                    <Button clicked={addToText} symbol="5"/>
                    <Button clicked={addToText} symbol="6"/>
                    <Button clicked={addToText} symbol="*" color={functionColor}/>
                </div>
                <div className="row">
                    <Button clicked={addToText} symbol="1"/>
                    <Button clicked={addToText} symbol="2"/>
                    <Button clicked={addToText} symbol="3"/>
                    <Button clicked={addToText} symbol="+" color={functionColor}/>                
                </div> 
                <div className="row">
                    <Button clicked={addToText} symbol="0"/>
                    <Button clicked={addToText} symbol="."/>
                    <Button clicked={calculateResult} symbol="="/>
                    <Button clicked={addToText} symbol="-" color={functionColor}/>                
                </div> 
                <div className="row">
                    <Button clicked={clearAll} symbol="CLEAR" color={clearColor}/>            
                </div> 
            </div>
        </div>
    )
}

export default Calculator;