import { Link } from 'react-router-dom'

const ProgramCard = ({photo, title, goal, form, desc}) => {
  return (
    <li className="flex flex-col rounded-xl shadow-xl w-[30rem]">
      <img src={photo} alt="" className="aspect-[3/2] object-cover rounded-lg" />
      <div className="flex flex-col p-4 gap-2">
        <h9 className="text-3xl font-lato-black py-4">{title}</h9>
        <span className="font-lato-bold text-xl">Cel Akcji:</span>
        <p className="font-lato text-lg text-gray-600 pl-4 ">{goal}.</p>
        <span className="font-lato-bold text-xl">Formy Pomocy:</span>
      
        <ul className="flex gap-4 flex-wrap max-w-full pt-2">
          {
            form.map((item) => (
              <li className="rounded-full px-4 py-[3px] bg-primary text-white font-lato-bold">{item}</li>
            ))
          }
        </ul>
        <span className="font-lato-bold text-xl">Opis Akcji:</span>
        <p className="font-lato text-lg text-neutral-900 pl-4 ">{desc}</p>

        <Link to='kontakt' className=' p-4 rounded-full border-4 border-primary text-black text-xl uppercase text-center '>Pomóż w następnej akcji</Link>
        
        
      </div>
    </li>
  )
}

export default ProgramCard
