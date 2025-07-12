import { useState } from 'react'
import './App.css'
import Login from './components/Login'


function App() {
  const[loggedIn,setLogin] = useState(true)
  return (
    <div>
      <Login login={loggedIn} setLogin={setLogin}/>
    </div>
  )
}

export default App
