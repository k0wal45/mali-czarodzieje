import { Link, useNavigate, useParams } from 'react-router-dom'

import Data from '../Data'
import { useEffect, useState } from 'react'
import Spinner from '../components/Spinner'

const Event = () => {

  const { id } = useParams()
  const navigate = useNavigate()

  const [data, setData] = useState()
  const [loading, setLoading] = useState(true)


  const findElementById = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].link === id) {
        setData(arr[i]);
        setLoading(false)
        return
      }
    }
    setLoading(false)
    return
  }

  // const idToFind = Data.map((e) => (e.title));

  useEffect(() => {
    findElementById(Data)
  }, [data, id])
  




  if (!loading) {

    if (data) {
      return (
        <main className="max-w-screen overflow-x-hidden">
          <section className="flex flex-col lg:flex-row gap-8 justify-center items-center p-4 py-32 bg-program text-white">
            <div className="flex flex-col gap-8 justify-center items-start lg:max-w-[50vw]">
              <h1 className="text-5xl lg:text-8xl font-lato-bold">{data.title}</h1>
              <p className="text-xl lg:text-2xl lg:w-2/3">{data.shortDescription}</p>
              <div className="flex justify-start lg:justify-center items-start gap-8 flex-wrap">
                <Link to='/kontakt' className="btn rounded-full text-xl font-lato-bold">Skontaktuj się z nami</Link>
                <Link to='/' className="btn btn-outline border-white rounded-full text-white text-xl font-lato-bold">Wróć na stronę główną</Link>
              </div>
            </div>
            <div className=" w-[10vw]"></div>
          </section>
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
