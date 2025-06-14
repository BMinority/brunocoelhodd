import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/jsx/Nav'
import Home from './components/jsx/Home'
import FlyersGalery from './components/jsx/FlyersGalery'
import Contact from './components/jsx/Contact'
import Projects from './components/jsx/Projects'

function App() {
  const [count, setCount] = useState(0);

  const currentYear = new Date().getFullYear();

  return (
    <>
      <header>
        <Nav />
        <Home />
        <FlyersGalery />
        <Projects />
        <Contact />
      </header>
      <footer>
        <p>
          <p>&copy; {currentYear} Bruno Coelho. Todos os direitos reservados.</p>
        </p>
      </footer>
    </>
  )
}

export default App
