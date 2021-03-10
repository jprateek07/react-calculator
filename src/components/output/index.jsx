import React, { useState, useEffect } from "react"
import Button from "../button";
import Styles from './index.module.css'
const Output = (props) => {
    const [output, setOutput] = useState("");

    function handleClick(newValue) {
        setOutput(newValue);
    }
    return (
        <div className={Styles['calc-main']}>
            <form>
                <input type="text" value={output} placeholder="OUTPUT" readOnly />
            </form>
            <Button callBack={handleClick} />
        </div>
    );
}

export default Output;