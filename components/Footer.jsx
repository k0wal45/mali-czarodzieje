function Footer() {
  const date = new Date()
  const year = date.getFullYear()

  return (
    

    <footer className="flex flex-col lg:flex-row justify-between px-8 p-4 bg-base-200 shadow-inner z-70 text-lg">
      <div className="items-center grid-flow-col">
        <p>Copyright © {year} - All right reserved</p>
      </div> 
      <section>
        <p>Created by: <a href="https://lunarisweb.pl/" className="underline">Lunaris Web</a></p>
      </section> 
    </footer>

  )
}

export default Footer