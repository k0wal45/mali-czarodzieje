import Hero from '../components/Hero'
import About from '../components/About'
import Contact from '../components/Contact'
import Mapa from '../components/Mapa'
import TextShow from '../components/TextShow'
import Recent from '../components/Recent'


const Home = () => {
  
  return (
    <main className="max-w-screen overflow-x-hidden">
      <Hero />
      {/* <Stats /> */}
      <Recent />
      <About />
      {/* <Decoration 
        photo={child1}
        title='Wspierajmy Dzieci - Bo Każde Dziecko Jest Ważne'
        text='Otwórzmy wspólnie drzwi do lepszej przyszłości dla każdego dziecka. Wspierajmy dzieci, bo każde zasługuje na radość i szansę na spełnienie marzeń. Dołącz do nas, bo razem możemy zmieniać świat dla nich!'
      /> */}
      <Contact />
      <Mapa />
      <TextShow />
    </main>
  )
}

export default Home
