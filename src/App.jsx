import { useState } from 'react'
import './App.css'
import ToDo from './components/ToDo'

function App() {
  const [display, setDisplay] = useState(true)  


  return (
    <>
    <h1>Display or Not Display</h1>
     <button onClick={()=>setDisplay(!display)}>Toggle</button>
     
     {display ? <pre>hello beta kaise ho 
      
      <ToDo />
      </pre>
       : ''}
     
    </>
  )
}

export default App
