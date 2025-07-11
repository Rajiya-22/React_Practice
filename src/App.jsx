import { useState } from 'react'
import './App.css'
import Card from './components/Card'


function App() {
  const[count,setCount] = useState(0);
  let handleOnClick = ()=>{
    setCount(count+1);
  }
  return (
    <div>
      {/* Attributes added in the <Card> tag are considered as props */}
      {/* Content added inside the opening and closing tags of Card are considered as props.children */}
      {/* They are considered as children attribute */}
      <Card handleOnClick={handleOnClick} count={count}>
        <h1>Hellos and welcomes</h1>
      </Card>
    </div>
  )
}

export default App
