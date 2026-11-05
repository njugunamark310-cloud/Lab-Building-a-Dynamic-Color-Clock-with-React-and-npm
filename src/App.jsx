import { useState, useEffect } from 'react'
import { format } from 'date-fns'
import './App.css'


function App() {
  const [currentTime, setCurrentTime] = useState(new Date())
  useEffect(() => {
  const timer = setInterval(() => {
    setCurrentTime(new Date())
  }, 1000)

  return () => clearInterval(timer)
}, [])
 return (
  <main className="clock-container">
    <div className="clock-card">
      <p className="greeting">WELCOME TO YOUR DASHBOARD</p>

      <h1>Color Clock</h1>

      <div className="time-display">
        {format(currentTime, 'hh:mm:ss')}
        <span>{format(currentTime, 'a')}</span>
      </div>

      <p className="date-display">
        {format(currentTime, 'EEEE, MMMM do, yyyy')}
      </p>

      <p className="status"> LIVE TIME</p>
    </div>
  </main>
)
}
export default App
