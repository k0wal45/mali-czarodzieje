import React from 'react'
import { Link } from 'react-router-dom'


const Programy = () => {
  return (
    <main className="max-w-screen overflow-x-hidden">
      <section className="flex flex-col lg:flex-row gap-8 justify-center items-center p-4 py-32 bg-program text-white">
        <div className="flex flex-col gap-8 justify-center items-start lg:max-w-[50vw]">
          <h1 className="text-6xl lg:text-8xl font-lato-bold">Dla nich to dużo znaczy</h1>
          <p className="text-xl lg:text-2xl lg:w-2/3">Twoje wsparcie dla nich to nieoceniona wartość. Dla nich to ogromne wsparcie. Dziękujemy!</p>
          <div className="flex justify-start lg:justify-center items-start gap-8 flex-wrap">
            <Link to='/kontakt' className="btn rounded-full text-xl font-lato-bold">Podaruj potrzebującym</Link>
            <Link to='/#onas' className="btn btn-outline border-white rounded-full text-white text-xl font-lato-bold">Dowiedz się więcej o fundacji</Link>
          </div>
        </div>
        <div className=" w-[10vw]"></div>
      </section>

      <section className="flex justify-center items-center flex-col gap-8 p-4 py-24">
        <h2 className="text-5xl font-lato-black">Możesz pomóc dzieciom wspomagając naszą <span className="text-primary">fundacje</span></h2>
      </section>

    </main>

  )
}

export default Programy
