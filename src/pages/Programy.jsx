import React from 'react'
import { Link } from 'react-router-dom'
import Recent from '../components/Recent'


const Programy = () => {
  return (
    <main className="max-w-screen overflow-x-hidden">
      <section className="flex flex-col lg:flex-row gap-8 justify-center items-center p-4 py-32 bg-program text-white">
        <div className="flex flex-col gap-8 justify-center items-start lg:max-w-[50vw]">
          <h1 className="text-6xl lg:text-8xl font-lato-bold">Dla nich to dużo znaczy</h1>
          <p className="text-xl lg:text-2xl lg:w-2/3">Twoje wsparcie dla nich to nieoceniona wartość. Dla nich to ogromne wsparcie. Dziękujemy!</p>
          <div className="flex justify-start lg:justify-center items-start gap-8 flex-wrap">
            <Link to='/kontakt' className="btn rounded-full text-xl font-lato-bold">Skontaktuj się z nami</Link>
            <Link to='/' className="btn btn-outline border-white rounded-full text-white text-xl font-lato-bold">Wróć na stronę główną</Link>
          </div>
        </div>
        <div className=" w-[10vw]"></div>
      </section>

      <section className="flex justify-center items-center flex-col gap-8 p-4 py-24">
        <h2 className="text-5xl font-lato-black">Możesz pomóc dzieciom wspomagając naszą <span className="text-primary">fundacje</span></h2>
      </section>

      {/* dogadac jak dokladnie ma wygladac administrowanie strona i albo tutaj wrzucac ostantie akcje albo poprzez Data.js ktore beda sie stamtad fetchowaly iu tylko 1 zdj tytul i opis, albo tak samo zdjecie opis itp tylko razem z przyciskiem z przekierowaniem do kolejnej strony ktora bedzie zawierala wiecej info wiecej zdjec tez fetchowana z pliku Data.js dla wygody */}

      {/* mozna tez zmienic sekcje <Recent /> i tam tez fetchowac dane z Data.js i poprostu dodac tam date w kazdym elemencie i zeby fetchowaly sie najnowsze akcje automatycznie z tamtego pliku edytowalnego */}

    </main>

  )
}

export default Programy
