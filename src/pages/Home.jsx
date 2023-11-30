import React from 'react'
import Hero from '../components/Hero'
import Stats from '../components/Stats'
import About from '../components/About'
import Contact from '../components/Contact'
import Mapa from '../components/Mapa'
import TextShow from '../components/TextShow'

const Home = () => {
  return (
    <main className="max-w-screen overflow-x-hidden">
      <Hero />
      <Stats />
      <About />
      <Contact />
      <Mapa />
      <TextShow />
    </main>
  )
}

export default Home
