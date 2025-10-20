import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import LandingPage from './pages/LandingPage'

function App() {
  const [showHome, setShowHome] = useState(false)
  return (
    <div>
    {/* <Home /> */}
    {/* <LandingPage /> */}
    {showHome ? <Home /> : <LandingPage onSkip={() => setShowHome(true)} />}
    </div>
  )
}

export default App
