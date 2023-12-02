import { Link } from 'react-router-dom'


const NotFound = () => {
  return (
    <main className="flex items-center justify-center flex-col max-w-screen h-screen gap-12 bg-neutral-700 text-white p-4 text-center">
      <h1 className="font-gerak text-8xl lg:text-[15rem] ">Ooops!</h1>
      <p className="text-2xl">Coś poszło nie tak i wszedłeś w złe miejsce.</p>
      <Link to='/' className="p-4 px-8 text-xl font-lato-bold uppercase bg-white text-black rounded-full">Wróć na stronę główną</Link>
    </main>
  )
}

export default NotFound
