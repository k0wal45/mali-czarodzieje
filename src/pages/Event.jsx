import { Link, useNavigate, useParams } from 'react-router-dom'
import Decoration from '../components/Decoration'
import Contact from '../components/Contact'
import Mapa from '../components/Mapa'

import Data from '../Data'
import { useCallback, useEffect, useState } from 'react'
import Spinner from '../components/Spinner'

const Event = () => {

  const { id } = useParams()
  const navigate = useNavigate()

  const [data, setData] = useState()
  const [loading, setLoading] = useState(true)


  const findElementById = useCallback((arr) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].link === id) {
        setData(arr[i]);
        setLoading(false)
        return
      }
    }
    setLoading(false)
    return
  }, [id])

  useEffect(() => {
    findElementById(Data)
  }, [data, id, findElementById])


  const getDate = (date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1; 
    const year = date.getFullYear();

    const formattedDay = day < 10 ? `0${day}` : day;
    const formattedMonth = month < 10 ? `0${month}` : month;

    return `${formattedDay}-${formattedMonth}-${year}`;

  }

  if (!loading) {

    if (data) {
      return (
        <main className="max-w-screen overflow-x-hidden">
          <section className="relative flex flex-col lg:flex-row gap-8 justify-center items-center p-4 py-32 text-white z-20">
            <img src={data.photo[0]} alt="Akcja Mali Czarodzieje" className='absolute w-full h-full -z-10 object-cover top-0 left-0'/>
            <div className='absolute w-full h-full -z-[5] bg-black bg-opacity-50 top-0 left-0'></div>
            <div className="flex flex-col gap-2 justify-start items-start lg:max-w-[50vw]">
              <div className="flex justify-start items-start gap-8 border-b-2 p-2">
                <p className="text-xl lg:text-2xl">{getDate(data.date)}</p>
                <p className="text-xl lg:text-2xl">{data.place}</p>
              </div>
              <h1 className="text-5xl lg:text-8xl font-lato-bold pb-8">{data.title}</h1>
              <p className="text-xl lg:text-2xl lg:w-2/3">{data.shortDescription}</p>
              
            
              <div className="flex justify-start lg:justify-center items-start gap-8 flex-wrap my-8">
                <Link to='/kontakt' className="btn rounded-full text-xl font-lato-bold">Skontaktuj się z nami</Link>
                <Link to='/' className="btn btn-outline border-white rounded-full text-white text-xl font-lato-bold">Wróć na stronę główną</Link>
              </div>
            </div>
            <div className=" w-[10vw]"></div>
          </section>

          <Decoration 
            photo={data.photo[1]}
            title='Opis Akcji'
            text={data.description}
          />
          
          <section className="flex flex-col justify-center items-center p-4 mx-auto">
            <h3 className="text-5xl font-lato-black py-12">Zobacz zdjęcia z akcji "<span className='text-primary'>{data.title}</span>"</h3>
            <ul className='columns-1 lg:columns-3 px-4 lg:px-16'>
              {
                data.photo.map((photo) => (
                  <li className='p-4'>
                    <img src={photo} alt="Zdjęcie z akcji Mali Czarodzieje" />
                  </li>
                ))
              }
            </ul>

          </section>

          <Contact />
          <Mapa />
        </main>
      )
    } 
    
    navigate('/notfound')

  } return (
      <section className="
        min-h-screen pt-24 lg:pt-0
        bg-gradient-to-t from-neutral-400  to-neutral-700  
        flex flex-col lg:flex-row gap-8 justify-center items-center
      ">
        <Spinner />
      </section>
  )
  
  
}

export default Event
