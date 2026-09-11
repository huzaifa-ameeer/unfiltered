import Navbar from "../navbar/Navbar"

export default function ContainerLayout({children}: {children : React.ReactNode

}) {
  return (
    <section className="xl:w-[75%] w-[95%] overflow-hidden mx-auto">
        <Navbar/>
        <div className="mt-20 px-7 sm:px-0">
            {children}
        </div>
    </section>
  )
}
