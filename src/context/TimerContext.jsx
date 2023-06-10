import React, {useEffect, useState} from 'react';

const TimerContext = React.createContext({timer: []});
export default TimerContext;

export const TimerContextProvider = ({ children }) => {
    const [timer, setTimer] = useState([]);

    const addTimer = (newTimer) => {
        setTimer((prev) => [...prev, newTimer])
    }

    const deleteTimer = (timerId) => {
        const updatedTimer = timer.filter((t) => {
            return t.id !== timerId
        })
        setTimer(updatedTimer)
    }

    const addTimeInSec = (id, time) => {
        const updatedTimer = timer.map((data) => {
            if (data.id === id) {
                data.currentTime = data.currentTime + time;
            }
            return data;
        })
        setTimer(updatedTimer);
    }

    return (
        <TimerContext.Provider value={{ timer, addTimer, deleteTimer, addTimeInSec }}>
            {children}
        </TimerContext.Provider>
    );
};
