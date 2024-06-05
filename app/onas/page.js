import React from 'react'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Mapa from '@/components/Mapa'
import Image from 'next/image'
import Link from 'next/link'

const AboutPage = () => {
  return (
    <main className="max-w-screen overflow-x-hidden">

      <section className="flex flex-col lg:flex-row gap-8 justify-center items-center p-4 py-32 bg-program text-white">
        <div className="flex flex-col gap-8 justify-center items-start lg:max-w-[50vw]">
          <h1 className="text-5xl lg:text-8xl font-bold">Fundacja Mali Czarodzieje</h1>
          <p className="text-xl lg:text-2xl lg:w-2/3">Jako fundacja organizujemy wiele akcji pomagających innym. Każde wsparcie jest ważne</p>
          <div className="flex justify-start lg:justify-center items-start gap-8 flex-wrap">
            <Link href='/kontakt' className="btn rounded-full text-xl font-bold">Skontaktuj się z nami</Link>
            <Link href='/' className="btn btn-outline border-white rounded-full text-white text-xl font-bold">Wróć na stronę główną</Link>
          </div>
        </div>
        <Image width={300} height={700} src='/img/logo.webp' alt="Logo Mali Czarodzieje" className="h-[40vh]" />
      </section>
      
      <About />
      <Contact />
      <Mapa />

    </main>
  )
}

export default AboutPage
