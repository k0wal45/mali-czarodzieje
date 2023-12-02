import React from 'react'
import ProgramCard from './ProgramCard'
import child1 from '../assets/img/child1.webp'

const Recent = () => {
  return (
    <section id="programy" className="flex flex-col justify-center items-center mx-auto p-8 lg:py-24 gap-4">
      <div className="flex justify-center items-center gap-8 w-full lg:w-1/2">
        <div className="w-1/3 border-2 border-black"></div>
        <p className="font-lato-black whitespace-nowrap uppercase ">Programy</p>
      </div>
      <h6 className="font-lato-black text-6xl text-end">Nasze niedawne akcje</h6>
      <div className="flex flex-wrap gap-12 justify-around items-center mt-12 w-full">
        <ProgramCard 
          title='Edukacja dla Każdego Dziecka'
          photo={child1}
          desc='Zbieramy fundusze na zakup podręczników, materiałów szkolnych i stypendiów dla dzieci z trudnych warunków finansowych'
        />
        <ProgramCard 
          title='Uśmiech na Twarzy Dziecka'
          photo={child1}
          desc='Organizujemy wizyty artystów, dostarczamy zabawki i gry planszowe, tworzymy kąciki rozrywki w szpitalach'
        />
        <ProgramCard 
          title='Zdrowie od Początku'
          photo={child1}
          desc='Zakup sprzętu medycznego, organizacja szkoleń dla personelu medycznego, wsparcie programów szczepień'
        />
      
      </div>
    </section>
  )
}

export default Recent
