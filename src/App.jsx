import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AnnounceBar, Footer, Navbar } from "./components/layout";
import { Home } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <header className="sticky top-0 z-50">
        <AnnounceBar />
        <Navbar />
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;