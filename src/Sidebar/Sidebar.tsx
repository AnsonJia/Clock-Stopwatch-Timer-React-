import { Link } from 'react-router-dom';
import { useState } from 'react';
import styles from './Sidebar.module.css';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className={`${styles.sidebar} ${isOpen ? styles.open : styles.closed}`}>
        <Link to="/clock" className={styles.item}><img src='./src/assets/time-outline.svg'/>Time</Link>
        <Link to="/stopwatch" className={styles.item}><img src='./src/assets/stopwatch-svgrepo-com.svg'/>Stopwatch</Link>
        <Link to="/timer" className={styles.item}><img src='./src/assets/timer-outline.svg'/>Timer</Link>
      </div>
    
    
    
    <button className={styles.openbtn} onClick={()=>setIsOpen(prev => !prev)}>&#9776;</button>
    
    
   
    
    </>
  );
}

export default Sidebar;