import {useState, useEffect, useRef} from 'react';
import styles from './Stopwatch.module.css'
import newFavicon from '../assets/stopwatch-svgrepo-com.svg';

function Stopwatch(){
    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const intervalIdRef = useRef(0);
    const startTimeRef = useRef(0);

    useEffect(() => {
        const favicon = document.getElementById("favcon") as HTMLLinkElement | null;
        if (favicon) {
            favicon.href = newFavicon;
        }
    }, []);

    useEffect(()=>{
        if(isRunning){
            intervalIdRef.current = setInterval(()=>{setElapsedTime(Date.now()-startTimeRef.current)}, 10);
        }

        return()=>{
            clearInterval(intervalIdRef.current);
        }
    }, [isRunning]);

    useEffect(() => {
        document.title = formatTime(false); 
    }, [elapsedTime]);

    function start(){
        setIsRunning(true);
        startTimeRef.current = Date.now() - elapsedTime;
    }

    function stop(){    
        setIsRunning(false);

    }

    function reset(){
        setElapsedTime(0);
        setIsRunning(false);
    }

    function formatTime(showFull: boolean = true){
        let hours = Math.floor(elapsedTime / (1000*60*60));
        let minutes = Math.floor(elapsedTime / (1000*60)%60);
        let seconds = Math.floor(elapsedTime / 1000 % 60);
        let milliseconds = Math.floor(elapsedTime  % 1000 /10);

        const hoursStr = String(hours).padStart(2,"0");
        const minStr  = String(minutes).padStart(2,"0");
        const secStr  = String(seconds).padStart(2,"0");
        const milliStr  = String(milliseconds).padStart(2,"0");

        const base = `${hoursStr}:${minStr}:${secStr}`;
        return showFull ? `${base}:${milliStr}` : base;
       
    }

    return(
        <div className={styles.format}>
            <div className={styles.stopwatch}> 
                <div className={styles.display}>{formatTime()}</div>
                <div className={styles.controls}>
                    <button onClick={start} className={styles.start}>Start</button>
                    <button onClick={stop} className={styles.stop}>Stop</button>
                    <button onClick={reset} className={styles.reset}>Reset</button>
                </div>
            </div>
        </div>
        
     );

}
export default Stopwatch