import { useState } from 'react'
import Stats from '../components/Stats'
import Recent from '../components/Recent'
import Mapa from '../components/Mapa'
const Contact = () => {

  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    phone: '',
    email: '',
    text: ''

  })

  const {
    name,
    surname,
    phone,
    email,
    text
  } = formData

  const onMutate = (e) => {
    let boolean = null

    if (e.target.value === 'true') {
      boolean = true
    }
    if (e.target.value === 'false') {
      boolean = false
    }

    // Text/Booleans/Numbers
    if (!e.target.files) {
      setFormData((prevState) => ({
        ...prevState,
        [e.target.id]: boolean ?? e.target.value,
      }))
    }   
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData)
    setFormData({
      name: '',
      surname: '',
      phone: '',
      email: '',
      text: ''

    })
  }


  return (
    <main className="max-w-screen overflow-x-hidden">

      <section className="flex flex-col  gap-4 w-full p-4 pt-32 lg:pt-0 pb-12 bg-paper items-center justify-center bg-photo min-h-screen">
        <div className="bg-neutral-400 bg-opacity-75 p-12 flex flex-col-reverse lg:flex-row gap-8">
          <div className="flex flex-col p-4 justify-between items-start gap-4">
            <div className="flex flex-col justify-center items-start gap-4">
              <h6 className="text-3xl font-playfair-semibold flex gap-4 text-white">
                <span>Sosnowiec</span>
                <span className="text-primary">Polska</span>
              </h6>
              <p className="text-xl text-gray-100">ul. Jaroslawa Dudka 56a<br/>Sosnowiec 41-200, Polska</p>
              <p className="text-xl text-gray-100 flex gap-2"><span className="text-primary text-bold">Email:</span><span>info@mali-czarodzieje.pl</span></p>
              <p className="text-xl text-gray-100 flex gap-2"><span className="text-primary text-bold">Phone:</span><span>32 352 12 35</span></p>
            </div>
            
              <div className="w-32 border-2 border-white"></div>
            
          </div>

          <form action="" className="flex flex-col justify-center items-center gap-4" onSubmit={handleSubmit}>
            <div className="flex gap-4">
              <input onChange={onMutate} type="text" name="imie" id="name" className="p-4 w-1/2" placeholder='Imię' required value={name}/> 
              <input onChange={onMutate} type="text" name="nazwisko" id="surname" className="p-4 w-1/2" placeholder='Nazwisko' required value={surname}/> 
            </div>
            <input onChange={onMutate} type="text" name="telefon" id="phone" className="p-4 w-full" placeholder='Numer Telefonu' required value={phone}/> 
            <input onChange={onMutate} type="email" name="email" id="email" className="p-4 w-full" placeholder='E-mail (opcjonalne)' value={email}/>
            <textarea onChange={onMutate} type="text" name="wiadomosc" id="text" className="p-4 w-full h-48" placeholder='Treść Wiadomości' value={text}></textarea>
            <button className="p-4 w-full bg-primary text-xl uppercase font-lato-bold" >Napisz do nas</button>
          </form>
        </div>
      </section>
      <Stats />
      <Recent />
      <Mapa />

    </main>
  )
}

export default Contact