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
      <h7 className="font-lato-black text-6xl text-end">Nasze niedawne akcje</h7>
      <div className="flex flex-wrap gap-12 justify-around items-center mt-12 w-full">
        <ProgramCard 
          title='Edukacja dla Każdego Dziecka'
          photo={child1}
          goal='Zapewnienie dostępu do edukacji dla dzieci z ubogich rodzin'
          form={['Donacje Finansowe', 'Wolontariat Nauczycieli', 'Udział w aukcjach charytatywnych']}
          desc='Zbieramy fundusze na zakup podręczników, materiałów szkolnych i stypendiów dla dzieci z trudnych warunków finansowych'
        />
        <ProgramCard 
          title='Uśmiech na Twarzy Dziecka'
          photo={child1}
          goal='Zapewnienie radości i rozrywki dzieciom przebywającym w szpitalach'
          form={['Donacje zabawek', 'Datki na organizację wydarzeń rozrywkowych', 'Udział w maratonie charytatywnym']}
          desc='Organizujemy wizyty artystów, dostarczamy zabawki i gry planszowe, tworzymy kąciki rozrywki w szpitalach'
        />
        <ProgramCard 
          title='Zdrowie od Początku'
          photo={child1}
          goal='Poprawa opieki zdrowotnej dla noworodków i małych dzieci'
          form={['Datki na sprzęt medyczny', 'Wolontariat w placówkach zdrowia', 'Udział w akcjach informacyjnych']}
          desc='Zakup sprzętu medycznego, organizacja szkoleń dla personelu medycznego, wsparcie programów szczepień'
        />
      
      </div>
    </section>
  )
}

export default Recent
