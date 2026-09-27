
import Hero from "@/components/hero"
import { About, Contact, Partners, Products } from "."


const Home = () => {
  return (
    <div >
      <Hero/>
      <About />
      <Products/>
      <Partners />
      <Contact />
    </div>
  )
}

export default Home
