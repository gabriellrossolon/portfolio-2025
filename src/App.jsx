// Hooks -->
import { useState, useMemo } from 'react'
import { AnimatePresence } from "framer-motion";


// Componentes -->
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'
import Rain from './components/Rain'

function App() {
  const [showForm, setShowForm] = useState(false);
  const handleSetShowForm = () => {
    setShowForm(!showForm);
  }

  const [darkTheme, setDarkTheme] = useState(true);
  const handleChangeTheme = () => {
    setDarkTheme(!darkTheme);
  }

  const [aboutMe, setAboutMe] = useState(false);
  const [projects, setProjects] = useState(false);
  const closeOpenedSections = () => {
    aboutMe && (setAboutMe(false));
    projects && (setProjects(false))
  } 

  const memorizedRain = useMemo(() => <Rain />, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header handleSetShowForm={handleSetShowForm} darkTheme={darkTheme} handleChangeTheme={handleChangeTheme} closeOpenedSections={closeOpenedSections}/>
      {memorizedRain}
      <Body aboutMe={aboutMe} setAboutMe={setAboutMe} projects={projects} setProjects={setProjects} closeOpenedSections={closeOpenedSections}/>
      <Footer />

      {/* <AnimatePresence>
        {showForm && <ContactForm handleSetShowForm={handleSetShowForm} />}
      </AnimatePresence> */}
    </div>
  )
}

export default App
