'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import Data from './Data';

const Navbar = () => {

  const [earliestEvents, setEarliestEvents] = useState([]);

  const Events = (data) => {

      const sortedData = [...data].sort((a, b) => b.date - a.date);

      const threeEarliestEvents = sortedData.slice(0, 4);

      setEarliestEvents(threeEarliestEvents);
  }

    useEffect(() => {
      Events(Data)
    }, [])

    
  
  return (
    <nav className=" absolute top-0 left-0 navbar text-xl text-white lg:px-12 p-4 px-2 z-30">
      <div className="navbar-start">
        {/* mobile */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black ">
            <li><Link href='/onas'>O Nas</Link></li>
            <li>
              <Link href='/programy'>Programy</Link>
              <ul>
                {
                  earliestEvents.map((event) => (
                    <li key={event.title}><Link href={'/programy/' + event.slug}>{event.title}</Link></li>
                  ))
                }
              </ul>
            </li>

            <Link href='/kontakt' className="btn font-bold text-sm bg-white text-black rounded-full">Skontaktuj się</Link>
          </ul>
        </div>
        {/* title */}
        <Link href='/' className="btn btn-ghost text-3xl lg:text-5xl text-white font-black">Mali Czarodzieje</Link>
      </div>
      {/* middle nav */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-xl">
          <li><Link href='/onas'>O Nas</Link></li>
          <li>
            <details>
              <summary>Programy</summary>
              <ul className="p-2 text-black whitespace-nowrap w-72 rounded-sm bg-opacity-75">
                {
                  earliestEvents.map((event) => (
                    <li><Link href={'/programy/' + event.slug}>{event.title}</Link></li>
                  ))
                }
                <li><Link href='/programy' className='border-2 bg-base-200 rounded-sm'>Wszystkie Programy</Link></li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
      {/* btn */}
      <div className="hidden lg:flex navbar-end ">
        <Link href='/kontakt' className="btn font-bold text-lg bg-white text-black rounded-full">Skontaktuj się</Link>
      </div>
    </nav>
  )
}

export default Navbar
