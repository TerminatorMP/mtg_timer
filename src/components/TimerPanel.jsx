import React, {useContext, useEffect, useState} from "react";
import Timer from "./Timer";
import TimerContext from "../context/TimerContext"

export default function TimerPanel() {
    const { timer, addTimeInSec } = useContext(TimerContext);
    const [aktiveTimerId, setAktiveTimerId] = useState(timer[0]?.id);
    const [clock, setClock] = useState(0);
    const [isPaused, setIsPaused] = useState(true);

    const handleNext = () => {
        const index = timer.findIndex((data) => data.id === aktiveTimerId)
        let newIndex = (index +1 ) % (timer.length);
        setAktiveTimerId(timer[newIndex].id)
    }

    useEffect(() => {
        addTimeInSec(aktiveTimerId, 60)
    }, [aktiveTimerId])

    useEffect(() => {
        if (isPaused === false) {
            addTimeInSec(aktiveTimerId, -1);
        }
    }, [isPaused, clock, aktiveTimerId])

    useEffect(() => {
        setTimeout(() => setClock(clock + 1), 1000);
    }, [clock])

    return (
        <>
            <h1>MTG Timer</h1>
            <div className={"p-4"}>
                <div className={"flex justify-around flex-wrap"}>
                    {timer.map((data) => {
                        return (
                            <Timer key={data.id}
                                   label={data.label}
                                   percent={(data.currentTime / data.initialTime) * 100}
                                   timeInSec={data.currentTime}
                                   isHighlighted={data.id === aktiveTimerId}
                            />
                        )
                    })}
                </div>
            </div>
            <div className={"fixed bottom-6 right-6"}>
                <button className="btn btn-outline mr-4"
                        onClick={() => setIsPaused((prev) => !prev)}>
                    {isPaused ? "Start" : "Stopp"}
                </button>
                <button className="btn btn-wide btn-success" onClick={handleNext}>Next</button>
            </div>
        </>
    )
}