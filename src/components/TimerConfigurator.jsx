import {useContext, useState} from "react";
import TimerContext from "../context/TimerContext";
import TimerOverview from "./TimerOverview";



export default function TimerConfigurator({finished}) {
    const {timer, addTimer} = useContext(TimerContext)
    const [name, setName] = useState("")
    const [time, setTime] = useState("15")

    const onChangeName = (event) => {
        setName(event.target.value)
    }
    const onChangeTime = (event) => {
        setTime(event.target.value)
    }

    const handleSubmit = () => {
        finished()
    }

    const handleAdd = () => {
        const sec = parseInt(time) * 60
        addTimer({
            id: timer.length + 1,
            label: name,
            currentTime: sec,
            initialTime: sec
        })
    }

    return (
        <div className={"mt-4"}>
            <h1 className={"font-bold text-2xl"}>Spieler hinzufuegen</h1>
            <TimerOverview />
            <div className={"divider"} />
            <div className="flex items-end">
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Spieler</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered w-full max-w-xs"
                        onChange={onChangeName}
                        value={name}
                    />
                </div>

                <div className="form-control w-full max-w-xs ml-4">
                    <label className="label">
                        <span className="label-text">Zeit</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered w-full max-w-xs"
                        onChange={onChangeTime}
                        value={time}
                    />
                </div>
                <button className={"btn btn-outline btn-success ml-2"} onClick={handleAdd}>Add</button>
            </div>

            <button className={"fixed bottom-4 right-4 btn btn-primary"} onClick={handleSubmit}>Fertig</button>
        </div>
    )
}