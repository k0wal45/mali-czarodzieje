import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import Data from '../Data'

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
            <li><Link to='/onas' className='w-full h-full'>O Nas</Link></li>
            <li>
              <Link to='/programy' className='w-full h-full' >Programy</Link>
              <ul>
                {
                  earliestEvents.map((event) => (
                    <li><Link to={`/programy/${event.link}`} className='w-full h-full'>{event.title}</Link></li>
                  ))
                }
              </ul>
            </li>

            <Link to='/kontakt' className="btn font-lato-bold text-sm bg-white text-black rounded-full">Skontaktuj się</Link>
          </ul>
        </div>
        {/* title */}
        <Link to='/' className="btn btn-ghost font-w text-3xl lg:text-5xl font-gerak text-white font-medium">Mali Czarodzieje</Link>
      </div>
      {/* middle nav */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-xl">
          <li><Link to='/onas'>O Nas</Link></li>
          <li>
            <details>
              <summary>Programy</summary>
              <ul class="p-2 text-black whitespace-nowrap w-72 rounded-sm bg-opacity-75">
                {
                  earliestEvents.map((event) => (
                    <li><Link to={`/programy/${event.link}`}>{event.title}</Link></li>
                  ))
                }
                <li><Link to='/programy' className='border-2 bg-base-200 rounded-sm'>Wszystkie Programy</Link></li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
      {/* btn */}
      <div className="hidden lg:flex navbar-end ">
        <Link to='/kontakt' className="btn font-lato-bold text-lg bg-white text-black rounded-full">Skontaktuj się</Link>
      </div>
    </nav>
  )
}

export default Navbar
