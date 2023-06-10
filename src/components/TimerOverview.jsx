import {useContext, useEffect} from "react";
import TimerContext from "../context/TimerContext";

const TimerOverview = () => {
    const {timer, deleteTimer} = useContext(TimerContext)

    const handleDelete = (timerId) => {
        deleteTimer(timerId)
    }

    useEffect(() => {
        console.log(timer)
    }, [timer])

    return (
        <div className="overflow-x-auto mt-8 mb-4">
            <table className="table">
                {/* head */}
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Zeit</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {timer.map((t) => {
                    return (
                        <tr key={t.id}>
                            <td>{t.label}</td>
                            <td>{t.initialTime / 60}min</td>
                            <th>
                                <button onClick={() => handleDelete(t.id)} className="btn btn-square btn-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                                         viewBox="0 0 24 24"
                                         stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M6 18L18 6M6 6l12 12"/>
                                    </svg>
                                </button>
                            </th>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    )
}
export default TimerOverview