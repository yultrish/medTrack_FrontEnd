import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/navBar'
import Overview from './components/Overview'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar/>
    <Overview/>
    </>
  )
}

export default App
