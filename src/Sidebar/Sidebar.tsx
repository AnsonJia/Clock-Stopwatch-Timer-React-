import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import styles from './Sidebar.module.css';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const page = useLocation();

  return (
    <>
      <div className={`${styles.sidebar} ${isOpen ? styles.open : styles.closed}`}>
        <Link to="/clock" className={`${styles.item} ${page.pathname === '/clock' ? styles.active : ''}`}>
          <div className={styles.content}>
            <img src='./src/assets/time-outline.svg'/>Time
          </div>
        </Link>
        
        <Link to="/stopwatch" className={`${styles.item} ${page.pathname === '/stopwatch' ? styles.active : ''}`}>
          <div className={styles.content}>
            <img src='./src/assets/stopwatch-svgrepo-com.svg'/>Stopwatch
          </div>
        </Link>
        
        <Link to="/timer" className={`${styles.item} ${page.pathname === '/timer' ? styles.active : ''}`}>
          <div className={styles.content}>
            <img src='./src/assets/timer-outline.svg'/>Timer
          </div>
        </Link>

      </div>
    
    
    
    <button className={`${styles.openbtn} ${isOpen ? styles.isopen : ''}`} onClick={()=>setIsOpen(prev => !prev)}>&#9776;</button>
    
    
   
    
    </>
  );
}

export default Sidebar;