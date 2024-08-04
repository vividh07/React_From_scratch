import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
   let [counter,setCounter] =  useState(5)

  //let counter = 5

  const addValue = () =>{
    // counter = counter + 1
    // setCounter(counter)
    setCounter(counter + 1)
  }
  const decValue = ()=>{
    setCounter(counter - 1)
  }

  return (
    <>
    <h1>counter </h1>
    <h2>counter value : {counter}</h2>
    <button onClick={addValue}>Add value</button>
    <br />
    <button onClick={decValue}>Decrease value</button>
    </>
  )
}

export default App
