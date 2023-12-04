import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'



const ProgramCard = ({event}) => {
  return (
    <li className="flex flex-col shadow-xl max-w-[30rem] flex-1" key={event.link}>
      <img src={event.photo[0]} alt="" className="aspect-[3/2] object-cover" />
      <div className="flex flex-col p-8 gap-4 justify-center text-center">
        <h3 className="text-3xl font-lato-black">{event.title}</h3>

        <p className="font-lato text-xl text-neutral-500 pl-4 ">{event.shortDescription}</p>

        <Link to={`/programy/${event.link}`} className=' flex justify-center items-center gap-8 mt-4 p-4 rounded-full border-4 border-primary text-black text-xl uppercase text-center '><span>czytaj wiecej</span><FontAwesomeIcon icon={faArrowRight}/></Link>

      </div>
    </li>
  )
}

export default ProgramCard
