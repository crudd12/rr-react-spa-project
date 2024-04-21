import './App.css';
import AboutMe from './Components/AboutMe'
import Github from './Components/Github'
import Navbar from './Components/Navbar'
import Projects from './Components/Projects'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <h1>Courtney Rudd's Software Development Portfolio</h1>
        <Routes>
          <Route path='/' element={<AboutMe />} />
          <Route path='/github' element={<Github />} />
          <Route path='/projects' element={<Projects />} />
        </Routes>

      </Router>
    </div>
  );
}

export default App;
