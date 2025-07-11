import { useState } from 'react'
import './App.css'
import Card from './components/Card'


function App() {
  //App is parent to card
  // The entire creation, management, change is taken care by the parent which makes it easy to sync the state among all the children
  
  const[name,setName] = useState('');
  const[count,setCount] = useState(0);
  let handleOnClick = ()=>{
    setCount(count+1);
  }
  return (
    <div>
      {/* Attributes added in the <Card> tag are considered as props */}
      {/* Content added inside the opening and closing tags of Card are considered as props.children */}
      {/* They are considered as children attribute */}
      <Card handleOnClick={handleOnClick} count={count} setName={setName} name={name}>
        <h1>Hellos and welcomes</h1>
      </Card>
      <Card setName={setName} name={name}/>
      // change in the name attribute from any of the child card, helps all the childs to be in sync
      // Because the Parent manages the state
    </div>
  )
}

export default App
