
import Link from 'next/link'
import Image from 'next/image'

const About = () => {
  return (
    <section id="onas" className="flex flex-col lg:flex-row gap-24 lg:gap-4 p-4 py-12">
      <div className="relative h-[50vh] lg:w-[50vw]">
        <Image width={500} height={500} src='/img/child1.webp' alt="Biedne Dziecko" className=' absolute top-0 right-0 h-[85%] object-contain'/>
        <Image width={500} height={500} src='/img/child2.webp' alt="Biedne Dziecko" className=' absolute top-[20%] right-[25%] h-[85%] object-contain'/>
      </div>
      <div className=" flex flex-col justify-center items-start gap-8 lg:max-w-[50vw]">
        <div className="flex justify-start items-center gap-8 w-full">
          <p className="font-black whitespace-nowrap uppercase">O nas</p>
          <div className="w-1/6 border-2 border-black"></div>
        </div>
        <h5 className="font-bold text-5xl">Pomóż nam coś zmienić</h5>
        <p className="text-xl mt-4 lg:max-w-[70%]">Fundacja 'Mali Czarodzieje' jest miejscem, gdzie magia staje się rzeczywistością dla każdego dziecka. Nasza misja to nie tylko pomoc w trudnych chwilach, ale także tworzenie magicznych chwil pełnych uśmiechu i radości. Razem z nami dzieci stają się małymi czarodziejami, odkrywając moc swoich marzeń.</p>
        <Link href='/kontakt' className='btn btn-primary text-white font-bold uppercase mt-4 rounded-full'>Skontaktuj sie z nami</Link>
      </div>
    </section>
  )
}

export default About
