import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Clock from "./DigitalClock/Clock"
import Stopwatch from './Stopwatch/Stopwatch';
import Sidebar from "./Sidebar/Sidebar"
import Timer from './Timer/Timer';

function App() {

  return (
    <Router>
      <div>
        <Sidebar />
        <div>
          <Routes>
            <Route path="/" element={<Navigate to="/clock" />} />
            <Route path="/clock" element={<Clock />} />
            <Route path="/stopwatch" element={<Stopwatch />} />
            <Route path="/timer" element={<Timer />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
