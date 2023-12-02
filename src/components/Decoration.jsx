import React from 'react'
import { Link } from 'react-router-dom'

const Decoration = ({photo, title, text}) => {
  return (
    <section className="flex flex-col lg:flex-row gap-8 mx-auto lg:w-3/4 justify-center items-center p-4 py-12">
      <img src={photo} alt='Mali Czarodzieje Zdjęcia' className="max-h-[50vh] object-contain flex-1" />
      <div className="flex flex-col justify-center gap-8 items-start flex-1">
        <h6 className="text-6xl font-lato-black">{title}</h6>
        <p className="text-lg text-neutral-500">{text}</p>
        <Link to='/kontakt' className=' p-4 px-8 rounded-full bg-primary text-white text-xl uppercase text-center font-lato-bold'>Skontaktuj się z nami</Link>
      </div>
    </section>
  )
}

export default Decoration
