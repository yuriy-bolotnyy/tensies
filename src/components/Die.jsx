import React from "react";

const Die = (props) => (
    <div className={props.isHeld ? "die held" : "die"} onClick={props.holdDice}>{
        props.value}
    </div>
)

export default Die