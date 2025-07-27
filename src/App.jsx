import { useEffect, useState } from 'react'
import './App.css'
import Login from './components/Login'


function App() {
  const[count,setCount]=useState(0)
  const[total,setTotal]=useState(0)
  //variation 1: no dependency list
  useEffect(()=>{
    //side effect code
    alert("on all renders");
  })
  //variation 2: empty dependency list
  useEffect(()=>{
    alert("on first render");
  },[])
  //variation 3: with dependency list
  useEffect(()=>{
    alert("on all state change of dependency list");

    return()=>{
      //clean up code
      alert("count is unmounted from ui")
    }
  },[count])
  //variation 4: Multiple dependencies
  useEffect(()=>{
    //side effect code
    alert("change in dependency list");
    

  },[count,total])
  return (
    <>
      <button onClick={()=>{setCount(count+1)}}>Click for count</button>
      <p>count:{count}</p>
      <button onClick={()=>{setTotal(total+1)}}>Click for total</button>
      <p>total:{total}</p>
    </>
  )
}

export default App
