import { useState } from 'react'
import './App.css'
import Nav from './components/jsx/Nav'
import Home from './components/jsx/Home'
import FlyersGalery from './components/jsx/FlyersGalery'
import Contact from './components/jsx/Contact'
import Projects from './components/jsx/Projects'
import WhatsAppButton from './components/jsx/WhatsAppButton'

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const renderSection = () => {
    switch (activeSection) {
      case 'galery':
        return <FlyersGalery />;
      case 'projects':
        return <Projects />;
      case 'contact':
        return <Contact />;
      case 'home':
      default:
        return <Home />;
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <>
      <WhatsAppButton />
      <Nav onNavigate={setActiveSection} />

      <main>
        {renderSection()}

        <footer>
          &copy; {currentYear} Bruno Coelho. Todos os direitos reservados.
        </footer>
      </main>

    </>
  )
}

export default App
