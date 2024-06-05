import Link from "next/link"


const ProgramCard = ({event}) => {
  return (
    <li className="flex flex-col shadow-xl max-w-[30rem] flex-1" key={event.slug}>
      <img src={'/img/mikolajoweRozdanie/' + event.photo[0]} alt="" className="aspect-[3/2] object-cover" />
      <div className="flex flex-col p-8 gap-4 justify-center text-center">
        <h3 className="text-3xl font-black">{event.title}</h3>

        <p className=" text-xl text-neutral-500 pl-4 ">{event.shortDescription}</p>

        <Link href={`/programy/${event.slug}`} className=' flex justify-center items-center gap-8 mt-4 p-4 rounded-full border-4 border-primary text-black text-xl uppercase text-center '><span>czytaj wiecej</span><faArrowRight /></Link>

      </div>
    </li>
  )
}

export default ProgramCard
