import { useNavigate, useParams } from 'react-router-dom'

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
        <div className='text-black'>
          Event {data.title}
        </div>
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
