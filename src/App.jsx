import MyButton from './components/Button'
import Counter from './components/Counter'
import { Description } from './components/Description'
import ReactLogo from './assets/react.svg'
import './App.css'

const descripton = "Esta es la descripcion"

function App() {

  return (
    <div className="App">
      <h1>Aprendiendo React</h1>
      <img src={ReactLogo} alt="react-logo" width={100} />
      <Counter />
      <Counter customCount={10} title="Counter 2 la venganza" />
      <Description desc={descripton}/>
    </div>
  )
}

export default App
