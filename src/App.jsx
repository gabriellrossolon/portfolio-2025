// Hooks -->
import { useState } from 'react'

// Componentes -->
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'
import Rain from './components/Rain'

function App() {
  return (
    <div className="flex flex-col min-h-screen">

      <Header />
      <Rain />
      <Body />
      <Footer />
    </div>
  )
}

export default App
