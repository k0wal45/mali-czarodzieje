import { Link } from 'react-router-dom'
import photo from '../assets/img/help.webp'

const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row min-h-screen gap-8 justify-center items-center p-4 lg:p-12 pt-32 bg-photo text-white">
      <div className="flex flex-col gap-8 justify-center items-start flex-1">
        <h1 className="text-6xl lg:text-8xl font-lato-bold">Dla nich to dużo znaczy</h1>
        <p className="text-xl lg:text-2xl lg:w-2/3">Twoje wsparcie dla nich to nieoceniona wartość. Dla nich to ogromne wsparcie. Dziękujemy!</p>
        <div className="flex justify-start lg:justify-center items-start gap-8 flex-wrap">
          <Link to='/kontakt' className="btn rounded-full text-xl font-lato-bold">Podaruj potrzebującym</Link>
          <Link to='/#onas' className="btn btn-outline border-white rounded-full text-white text-xl font-lato-bold">Dowiedz się więcej o fundacji</Link>
        </div>
      </div>
      <div className="flex flex-col gap-8 flex-1 lg:mt-48 py-12 lg:py-0">
        <img src={photo} alt="Child that need help" className='max-h-[60vh] justify-end object-contain'/>
        <div className="w-1/3 border-2 border-white"></div>
        <p className="text-xl lg:w-3/4">Twoje serce liczy się dla nich najbardziej. Twoja pomoc to dla nich nieocenione wsparcie. Dziękujemy z całego serca!</p>
      </div>
    </section>
  )
}

export default Hero
