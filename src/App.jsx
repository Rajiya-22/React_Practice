import './App.css'
import Card from './components/Card'


function App() {

  return (
    <div>
      {/* Attributes added in the <Card> tag are considered as props */}
      {/* Content added inside the opening and closing tags of Card are considered as props.children */}
      <Card>
        <h1>Hellos and welcomes</h1>
      </Card>
    </div>
  )
}

export default App
