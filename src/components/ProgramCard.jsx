import { Link } from 'react-router-dom'

const ProgramCard = ({photo, title, desc}) => {
  return (
    <li className="flex flex-col shadow-xl w-[30rem]" key={title}>
      <img src={photo} alt="" className="aspect-[3/2] object-cover" />
      <div className="flex flex-col p-8 gap-4 justify-center text-center">
        <h3 className="text-3xl font-lato-black">{title}</h3>

        <p className="font-lato text-xl text-neutral-500 pl-4 ">{desc}</p>

        <Link to='/kontakt' className='mt-4 p-4 rounded-full border-4 border-primary text-black text-xl uppercase text-center '>Pomóż w następnej akcji</Link>
        
        
      </div>
    </li>
  )
}

export default ProgramCard
