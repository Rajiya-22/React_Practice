import './App.css'
import UserCard from './components/UserCard'

function App() {

  return (
    <div className='container' >
      <UserCard name="a" style={{"border-radius":"10px"}}/>
      <UserCard name="b"/>
      <UserCard name="c"/>
    </div>
  )
}

export default App
