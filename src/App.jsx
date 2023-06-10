import './App.css';
import TimerPanel from "./components/TimerPanel";
import {useState} from "react";
import TimerConfigurator from "./components/TimerConfigurator";
import {TimerContextProvider} from "./context/TimerContext";


function App() {
    const [configFinished, setConfigFinished] = useState(false);

    return (
        <div className="App relative">
            <TimerContextProvider>
                <div className={"m-auto w-[95%]"}>
                    {configFinished ?
                        <TimerPanel />
                        :
                        <TimerConfigurator finished={() => setConfigFinished(true)} />
                    }
                </div>
            </TimerContextProvider>
        </div>
    );
}

export default App;
