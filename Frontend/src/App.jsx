import { useState } from 'react'
import './App.css'
import NavBar from './NavBar/navbar'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <NavBar></NavBar>
    </>
  )
}

