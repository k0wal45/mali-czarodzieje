
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row min-h-screen gap-8 justify-center items-center p-4 lg:p-12 pt-32 bg-photo text-white">
      <div className="flex flex-col gap-8 justify-center items-start flex-1">
        <h1 className="text-6xl lg:text-8xl font-bold">Jutro pełne uśmiechu!</h1>
        <p className="text-xl lg:text-2xl lg:w-2/3">Działamy z determinacją, aby każde dziecko miało szansę na rozwój, zdobycie edukacji i spełnienie marzeń</p>
        <div className="flex justify-start lg:justify-center items-start gap-8 flex-wrap">
          <Link href='/kontakt' className="btn rounded-full text-xl font-bold">Podaruj potrzebującym</Link>
          <Link href='/onas' className="btn btn-outline border-white rounded-full text-white text-xl font-bold">Dowiedz się więcej o fundacji</Link>
        </div>
      </div>
      <div className="flex flex-col gap-8 flex-1 lg:mt-12 py-12 lg:py-0">
        <div className="flex flex-col gap-4">
          <Image width={700} height={1000}  src='/img/logo.webp' alt="Logo Mali Czarodzieje" className='max-h-[60vh] justify-end object-contain'/>
          <p className="font-black text-7xl lg:text-8xl text-center">Mali Czarodzieje</p>
        </div>
        <div className="w-1/3 border-2 border-white"></div>
        <p className="text-xl lg:w-3/4">Razem, jako wspólnota ludzi zaangażowanych, pracujemy nieustannie, aby każde dziecko miało szansę na spełnienie swoich marzeń</p>
      </div>
    </section>
  )
}

export default Hero
