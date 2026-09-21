import { BrowserRouter, Route, Routes } from "react-router-dom"

import Products from "./pages/products"
import About from "./pages/about"
import { AnnounceBar, Footer, Navbar } from "./components/layout"
import { Home } from "./pages"


const App = () => {
  return (
    <BrowserRouter>
    <AnnounceBar />
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route  path="/products" element={<Products />}/>
      <Route  path="/about" element={<About />}/>
    </Routes>

    <Footer />
    </BrowserRouter>
  )
}

export default App
