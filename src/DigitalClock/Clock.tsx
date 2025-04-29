import styles from './Clock.module.css'
import { useState, useEffect } from "react";

function Clock(){
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const[time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        },1000);

        return() => {
            clearInterval(intervalId);
        }
    }, []
    );


    function formatTime(){
        let hours = time.getHours();
        const mins = time.getMinutes();
        const secs = time.getSeconds();
        const meridiem = hours >= 12 ? "PM" : "AM";

        hours = hours%12 || 12;

        return `${padZero(hours)}:${padZero(mins)}:${padZero(secs)} ${meridiem}`;
    }
    function padZero(number:number){
        return (number < 10 ? "0" : "")+number;
    }

    function date(){
        const year = time.getFullYear();
        const month = months[time.getMonth()];
        const day = time.getDate();
        const dayName = days[time.getDay()];

        return `${dayName}\u202F-\u202F${month}\u202F${day}.\u202F${year}`;
    }

    return(<div className={styles.clockContainer}>
        <div className={styles.clock}>
            <span>{formatTime()}</span>
        </div>
        <br/>
        <div className={styles.date}>{date()}</div>
    </div>
    
);
}

export default Clock