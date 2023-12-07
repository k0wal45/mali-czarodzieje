import { useState } from 'react'
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
    <section  id="reservation" className="flex flex-col gap-4 w-full p-4 pt-12 pb-0 bg-paper items-center justify-start bg-gradient-to-r from-red-200 to-50% to-base-100">
        <div className="flex justify-start items-center gap-8 w-full lg:w-1/2">
          <p className="font-lato-black whitespace-nowrap uppercase">Kontakt</p>
          <div className="w-1/3 border-2 border-black"></div>
        </div>
      <h5 className="font-lato-black text-6xl">Skontauj się z nami</h5>

      <div className="bg-base-100 p-12 flex flex-col-reverse lg:flex-row gap-8 lg:translate-y-24 mt-12 lg:mt-0">
        <div className="flex flex-col p-4 justify-between items-start gap-4">
          <div className="flex flex-col justify-center items-start gap-4">
            <h6 className="text-3xl font-playfair-semibold flex gap-4">
              <span>Sosnowiec</span>
              <span className="text-red-500">Polska</span>
            </h6>
            <p className="text-xl text-gray-600">ul. Jaroslawa Dudka 56a<br/>Sosnowie 41-200, Polska</p>
            <p className="text-xl text-gray-100 flex gap-2"><span className="text-primary text-bold">Email:</span><a className='text-gray-600' href="mailto:fundacja@maliczarodzieje.eu">fundacja@maliczarodzieje.eu</a></p>
            <p className="text-xl text-gray-100 flex gap-2"><span className="text-primary text-bold">Telefon:</span><a className='text-gray-600' href="tel:+48508331438">+48 508 331 438</a></p>
          </div>
          
            <div className="w-32 border-2 border-black"></div>
          
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
  )
}

export default Contact