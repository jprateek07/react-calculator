import React, { useState,useEffect} from "react";
import Styles from "./index.module.css";

function Button(props) {
    const operators = ['+', '-', '*', '/'];
    const [result, setResult] = useState("");
    const {callBack}=props
    useEffect(() => {
        callBack(result)
      },[result]);
    function IsOperator(input) {
        if (operators.includes(input))
            return true
        else
            return false
    }
    function handleClick(e) {
        if (result.length > 1 && (IsOperator(result.substr(-1))) && IsOperator(e.target.name)) {
            setResult(result.slice(0, -1) + e.target.name)
        }
        else {
            setResult(result.concat(e.target.name));
        }
    }

    function calculate() {
        try {
            setResult(eval(result).toString());
        } catch (error) {
            setResult("INVALID INPUT");
        }
        props.callBack(result)  
    }

    return (
        <div className={Styles.keypad}>
            <button id={Styles.clear} onClick={()=>{setResult("");props.callBack(result)}}>
                Clear
        </button>
            <button id={Styles.backspace} onClick={()=>{setResult(result.slice(0,-1));props.callBack(result)}}>
                C
        </button>
            <button name="+" onClick={handleClick}>
                +
        </button>
            <button name="7" onClick={handleClick}>
                7
        </button>
            <button name="8" onClick={handleClick}>
                8
        </button>
            <button name="9" onClick={handleClick}>
                9
        </button>
            <button name="-" onClick={handleClick}>
                -
        </button>
            <button name="4" onClick={handleClick}>
                4
        </button>
            <button name="5" onClick={handleClick}>
                5
        </button>
            <button name="6" onClick={handleClick}>
                6
        </button>
            <button name="*" onClick={handleClick}>
                &times;
        </button>
            <button name="1" onClick={handleClick}>
                1
        </button>
            <button name="2" onClick={handleClick}>
                2
        </button>
            <button name="3" onClick={handleClick}>
                3
        </button>
            <button name="/" onClick={handleClick}>
                /
        </button>
            <button name="0" onClick={handleClick}>
                0
        </button>
            <button name="." onClick={handleClick}>
                .
        </button>
            <button id={Styles.result} onClick={calculate}>
                Result
        </button>
        </div>
    );
}

export default Button;