import './App.css'
import { resume } from './data/resume'
import Resume from './components/Resume'

function App() {
  return <Resume data={resume} />
}

export default App
