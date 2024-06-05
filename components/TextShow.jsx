import Link from 'next/link'
import React from 'react'

const TextShow = () => {
  return (
    <section className="flex flex-col justify-center items-center gap-4 p-24 w-full text-center bg-display">
      <p className="font-bold text-primary text-xl">Zmieńmy świat razem</p>
      <h6 className="font-black text-5xl lg:text-6xl">Razem dla Dzieci, Razem dla Przyszłości</h6>
      <div className="flex justify-center lg:justify-center items-center gap-8 flex-wrap mt-16">
        <Link href='/kontakt' className="btn rounded-full text-xl font-bold bg-primary text-white">Podaruj potrzebującym</Link>
        <Link href='/#onas' className="btn btn-outline border-primary rounded-full text-black text-xl font-bold">Dowiedz się więcej o fundacji</Link>
      </div>
    </section>
  )
}

export default TextShow
