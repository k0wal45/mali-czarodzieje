import React from 'react'
import { Link } from 'react-router-dom'
import Data from '../Data'


const Programy = () => {

  const getDate = (date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1; 
    const year = date.getFullYear();

    const formattedDay = day < 10 ? `0${day}` : day;
    const formattedMonth = month < 10 ? `0${month}` : month;

    return `${formattedDay}-${formattedMonth}-${year}`;

  }
  return (
    <main className="max-w-screen overflow-x-hidden">
      <section className="flex flex-col lg:flex-row gap-8 justify-center items-center p-4 py-32 bg-program text-white">
        <div className="flex flex-col gap-8 justify-center items-start lg:max-w-[50vw]">
          <h1 className="text-5xl lg:text-8xl font-lato-bold">Zorganizowane przez nas akcje</h1>
          <p className="text-xl lg:text-2xl lg:w-2/3">Jako fundacja organizujemy wiele kacji pomagające innym. Każde wsparcie jest ważne</p>
          <div className="flex justify-start lg:justify-center items-start gap-8 flex-wrap">
            <Link to='/kontakt' className="btn rounded-full text-xl font-lato-bold">Skontaktuj się z nami</Link>
            <Link to='/' className="btn btn-outline border-white rounded-full text-white text-xl font-lato-bold">Wróć na stronę główną</Link>
          </div>
        </div>
        <div className=" w-[10vw]"></div>
      </section>

      <section className="flex justify-center items-center flex-col gap-8 p-4 py-24">
        <h2 className="text-5xl font-lato-black">Możesz pomóc dzieciom wspomagając naszą <span className="text-primary">fundacje</span></h2>
        <ul className="flex flex-col gap-12 w-full items-center justify-center">
          {
            Data.map((event) => (
              <li className="flex flex-col lg:flex-row border-2 border-neutral-300 w-full lg:w-3/4">
                <img src={event.photo[0]} alt={`${event.title} Mali Czarodzieje`} className='h-[25rem] aspect-square object-cover'/>
                <div className="flex flex-col w-full justify-around items-center text-center p-4 gap-4">
                  <h4 className="text-4xl font-lato-black">{event.title}</h4>
                  
                  <p className="text-xl lg:text-2xl lg:w-2/3">{event.shortDescription}</p>

                  <div className="flex flex-col lg:flex-row gap-2 lg:gap-16">
                    <p className="text-xl lg:text-2xl ">Data: {getDate(event.date)}</p>
                    <p className="whitespace-nowrap text-xl lg:text-2xl">Miejsce: {event.place}</p>
                  </div>

                  <Link to={`/programy/${event.link}`} className='my-4 p-4 rounded-sm border-4 border-primary text-black text-xl uppercase text-center w-full lg:w-64'><span>czytaj wiecej</span></Link>

                </div>
              </li>
            ))
          }
        </ul>
      </section>

      

      {/* dogadac jak dokladnie ma wygladac administrowanie strona i albo tutaj wrzucac ostantie akcje albo poprzez Data.js ktore beda sie stamtad fetchowaly iu tylko 1 zdj tytul i opis, albo tak samo zdjecie opis itp tylko razem z przyciskiem z przekierowaniem do kolejnej strony ktora bedzie zawierala wiecej info wiecej zdjec tez fetchowana z pliku Data.js dla wygody */}

      {/* mozna tez zmienic sekcje <Recent /> i tam tez fetchowac dane z Data.js i poprostu dodac tam date w kazdym elemencie i zeby fetchowaly sie najnowsze akcje automatycznie z tamtego pliku edytowalnego */}

    </main>

  )
}

export default Programy
