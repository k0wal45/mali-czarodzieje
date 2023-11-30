import { Link } from 'react-router-dom'

import child1 from '../assets/img/child1.webp'
import child2 from '../assets/img/child2.webp'

const About = () => {
  return (
    <section id="onas" className="flex flex-col lg:flex-row gap-24 lg:gap-4 p-4 py-12">
      <div className="relative h-[50vh] lg:w-[50vw]">
        <img src={child1} alt="Biedne Dziecko" className=' absolute top-0 right-0 h-[85%]'/>
        <img src={child2} alt="Biedne Dziecko" className=' absolute top-[20%] right-[25%] h-[85%]'/>
      </div>
      <div className=" flex flex-col justify-center items-start gap-8 lg:max-w-[50vw]">
        <div className="flex justify-start items-center gap-8 w-full">
          <p className="font-lato-black whitespace-nowrap uppercase">O nas</p>
          <div className="w-1/6 border-2 border-black"></div>
        </div>
        <h5 className="font-lato-bold text-5xl">Pomóż nam coś zmienić</h5>
        <p className="text-xl mt-4 lg:max-w-[70%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus hic quidem aut tempora fugiat. Neque nostrum excepturi facere. Libero suscipit ipsum voluptate provident laborum optio quod totam aliquid autem numquam.</p>
        <Link to='/kontakt' className='btn btn-primary text-white font-lato-bold uppercase mt-4 rounded-full'>Skontaktuj sie z nami</Link>
      </div>
    </section>
  )
}

export default About
