
import './App.css'
import Intro from './Intro'
import Navbar from './Navbar'
import About from './About'
import { BrowserRouter as Router ,Routes , Route , Link } from 'react-router-dom'
import Skills from './Skills'
import Projects from './Project'
import Contact from './Contact'
function App() {
 

  return (
    <>
    <Router> 
    <Navbar/>
      <Routes>
 <Route path='/' element={<Intro/>} />
 <Route path='/about' element={<About/>} />
 <Route path='/skills' element={<Skills/>} />
 <Route path='/project' element={<Projects/>} />
 <Route path='/contact' element={<Contact/>} />

      </Routes>

    </Router>
  
    </>
  )
}

export default App
