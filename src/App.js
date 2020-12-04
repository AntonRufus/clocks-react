import React, {useState} from "react";
import appCSS from './App.module.css';

function App() {

    let time = new Date().toLocaleTimeString();
    let date = new Date().toDateString();
    let text = 'Current time and date:';

    const [currentTime, setCurrentTime] = useState(time);

    const timeUpdate = () => {
        time = new Date().toLocaleTimeString();
        setCurrentTime(time);
    };

    setInterval(timeUpdate, 1000);

    return  <div className={appCSS.wrapper}>
                <h3>{text}</h3>
                <h1>{time}</h1>
                <h2>{date}</h2>
            </div>
}

export default App;
