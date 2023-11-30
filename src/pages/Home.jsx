import Hero from '../components/Hero'
import Stats from '../components/Stats'
import About from '../components/About'
import Contact from '../components/Contact'
import Mapa from '../components/Mapa'
import TextShow from '../components/TextShow'
import Recent from '../components/Recent'

const Home = () => {
  return (
    <main className="max-w-screen overflow-x-hidden">
      <Hero />
      <Stats />
      <About />
      <Recent />
      <Contact />
      <Mapa />
      <TextShow />
    </main>
  )
}

export default Home
