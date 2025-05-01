import {useState, useEffect, useRef} from 'react';
import styles from './Timer.module.css'
import newFavicon from '../assets/timer-outline.svg';


function Timer(){
    const [isRunning, setIsRunning] = useState(false);
    const [timeLeft, setTimeLeft] = useState(0);
    const intervalIdRef = useRef(0);
    const endTimeRef = useRef(0);

    useEffect(() => {
        const favicon = document.getElementById("favcon") as HTMLLinkElement;
            favicon.href = newFavicon;
    }, []);

    useEffect(()=>{
        if (isRunning){
            intervalIdRef.current = setInterval(()=>{
                const remainTime = endTimeRef.current - Date.now();
                if(remainTime <=0 ){
                    setIsRunning(false);
                }else{
                    setTimeLeft(remainTime);
                }
            }, 10);
        }

        return()=>{
            clearInterval(intervalIdRef.current);
        }

    }, [isRunning])

    useEffect(() => {
        document.title = formatTime(); 
    }, [timeLeft]);


    function incr(amount:number){
        setTimeLeft(prev => prev + amount);
    }
    function decr(amount:number){
        setTimeLeft(prev => Math.max(0, prev - amount));
    }
    function start(){
        if (timeLeft > 0){
            setIsRunning(true);
            endTimeRef.current = Date.now() + timeLeft;
        } 

        
            
    }
    function stop(){
        setIsRunning(false);
    }
    function reset(){
        setTimeLeft(0);
        setIsRunning(false);
    }

    function formatTime(){
        let hours = Math.floor(timeLeft / (1000*60*60));
        let minutes = Math.floor(timeLeft / (1000*60)%60);
        let seconds = Math.floor(timeLeft / 1000 % 60);

        const hoursStr = String(hours).padStart(2,"0");
        const minStr  = String(minutes).padStart(2,"0");
        const secStr  = String(seconds).padStart(2,"0");

        return `${hoursStr}:${minStr}:${secStr}`;
    }

    return(
        <div className={styles.format}>
            <div className={styles.timer}> 
                <div className={styles.display}>{formatTime()}</div>
                <div className={styles.buttons}>
                    {!isRunning&&(
                    <div className={styles.addsub}>
                        <button onClick={() => decr(60*1000*5)} className={styles.time}>-5:00</button>
                        <button onClick={() => decr(60*1000)} className={styles.time}>-1:00</button>
                        <button onClick={() => incr(60*1000)} className={styles.time}>+1:00</button>
                        <button onClick={() => incr(60*1000*5)} className={styles.time}>+5:00</button>
                    </div>
                    )}
                    <div className={styles.controls}>
                        <button onClick={start} className={styles.start}>Start</button>
                        <button onClick={stop} className={styles.stop}>Stop</button>
                        <button onClick={reset} className={styles.reset}>Reset</button>
                    </div>
                    
                    
                </div>
            </div>
        </div>



    );

}

export default Timer