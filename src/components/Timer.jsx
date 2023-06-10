import React from "react";

export default function Timer ({id, label, percent, timeInSec, isHighlighted}) {
    const time = Math.floor(timeInSec / 60) + ":" + String(timeInSec % 60).padStart(2, "0");
    const custom = isHighlighted ? "hsl(var(--a))" : "";
    return (
        <div className={"flex flex-col items-center w-1/3 mb-4"}>
            <div className={"inline-block text-center text-lg mt-2"} style={{"color": custom}}>
                {label}
            </div>
            <div className={"radial-progress text-lg"}
                 style={{"color": custom, "--value": percent, "--size": "5rem", "--thickness": "5px"}}>
                {time}
            </div>
        </div>
    )
}