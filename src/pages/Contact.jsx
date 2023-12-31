import { useRef, useState } from 'react'
import Recent from '../components/Recent'
import Mapa from '../components/Mapa'
import emailjs from '@emailjs/browser';

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

  const form = useRef();

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

    emailjs.sendForm('mali-czarodzieje', 'template_hcv7k6k', form.current, 'sCzCOtPiqwr9e49zo')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }




  return (
    <main className="max-w-screen overflow-x-hidden">

      <section className="flex flex-col  gap-4 w-full p-4 pt-32 lg:pt-0 pb-12 bg-paper items-center justify-center bg-photo min-h-screen">
        <div className="bg-neutral-400 bg-opacity-75 p-12 flex flex-col-reverse lg:flex-row gap-8">
          <div className="flex flex-col p-4 justify-between items-start gap-4">
            <div className="flex flex-col justify-center items-start gap-4">
              <h6 className="text-3xl font-playfair-semibold flex gap-4 text-white">
                <span>Katowice,</span>
                <span className="text-primary">Polska</span>
              </h6>
              <p className="text-xl text-gray-100">ul. Wojewódzka 15/3<br/>Katowice 40-026, Polska</p>
              <p className="text-xl text-gray-100 flex gap-2"><span className="text-primary text-bold">Email:</span><span>0001019399</span></p>
              <p className="text-xl text-gray-100 flex gap-2"><span className="text-primary text-bold">Email:</span><span><a href="mailto:fundacja@maliczarodzieje.eu">fundacja@maliczarodzieje.eu</a></span></p>
              <p className="text-xl text-gray-100 flex gap-2"><span className="text-primary text-bold">Telefon:</span><span><a href="tel:+48508331438">+48 508 331 438</a></span></p>
            </div>
            
              <div className="w-32 border-2 border-white"></div>
            
          </div>

          <form  ref={form} className="flex flex-col justify-center items-center gap-4" onSubmit={handleSubmit}>
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
      {/* <Stats /> */}
      <Recent />
      <Mapa />

    </main>
  )
}

export default Contact