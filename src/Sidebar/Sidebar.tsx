import { Link } from 'react-router-dom';
import styles from './Sidebar.module.css';

function Sidebar() {
  return (
    <div className={styles.sidebar}>
        <Link to="/clock" className={styles.item}><img src='./src/assets/time-outline.svg'/>Time</Link>
        <Link to="/stopwatch" className={styles.item}>Stopwatch</Link>
        <Link to="/timer" className={styles.item}>Timer</Link>
        
    </div>
  );
}

export default Sidebar;