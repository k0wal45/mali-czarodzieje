'use client'
import React, { useEffect, useState } from 'react'
import ProgramCard from './ProgramCard'
import Data from './Data'

const Recent = () => {

  const [earliestEvents, setEarliestEvents] = useState([]);

  const Events = (data) => {

      const sortedData = [...data].sort((a, b) => b.date - a.date);

      const threeEarliestEvents = sortedData.slice(0, 3);

      setEarliestEvents(threeEarliestEvents);
  }

    useEffect(() => {
      Events(Data)
    }, [])
    
  return (
    <section id="programy" className="flex flex-col justify-center items-center mx-auto p-8 lg:py-24 gap-4">
      <div className="flex justify-center items-center gap-8 w-full lg:w-1/2">
        <div className="w-1/3 border-2 border-black"></div>
        <p className="font-black whitespace-nowrap uppercase ">Programy</p>
      </div>
      <h6 className="font-black text-6xl text-end">Nasze ostatnie akcje</h6>
      <div className="flex flex-wrap gap-12 justify-around items-center mt-12 w-full">
        {earliestEvents.map((event) => (
          <ProgramCard 
            event={event}
          />
        ))}
        
      
      </div>
    </section>
  )

}

export default Recent
