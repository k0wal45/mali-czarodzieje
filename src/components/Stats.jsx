import React from 'react'

const Stats = () => {
  return (
    <ul className="flex flex-wrap justify-around items-center p-4 py-12 lg:p-24  bg-photo text-white gap-24 lg:gap-0">
      <li className="flex flex-col justify-start items-center">
        <span className='text-6xl font-lato-bold'>10 Mln+</span>
        <p className="text-xl">Wpłaconych Pieniędzy</p>
      </li>
      <li className="flex flex-col justify-start items-center">
        <span className='text-6xl font-lato-bold'>120+</span>
        <p className="text-xl">Otrzymanych Dotacji</p>
      </li>
      <li className="flex flex-col justify-start items-center">
        <span className='text-6xl font-lato-bold'>165+</span>
        <p className="text-xl">Akcji Zakończonych sukcesem</p>
      </li>
      <li className="flex flex-col justify-start items-center">
        <span className='text-6xl font-lato-bold'>240+</span>
        <p className="text-xl">Wspartych inicjatyw</p>
      </li>
    </ul>
  )
}

export default Stats
