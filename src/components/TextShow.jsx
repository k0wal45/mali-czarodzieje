import React from 'react'
import { Link } from 'react-router-dom'

const TextShow = () => {
  return (
    <section className="flex flex-col justify-center items-center gap-4 p-24 w-full text-center bg-display">
      <p className="font-lato-bold text-primary text-xl">Zmieńmy świat razem</p>
      <h6 className="font-lato-black text-5xl lg:text-6xl">Razem dla Dzieci, Razem dla Przyszłości</h6>
      <div className="flex justify-center lg:justify-center items-center gap-8 flex-wrap mt-16">
        <Link to='/kontakt' className="btn rounded-full text-xl font-lato-bold bg-primary text-white">Podaruj potrzebującym</Link>
        <Link to='/#onas' className="btn btn-outline border-primary rounded-full text-black text-xl font-lato-bold">Dowiedz się więcej o fundacji</Link>
      </div>
    </section>
  )
}

export default TextShow
