import { useState } from "react";
import { AnimatePresence } from "motion/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AnnounceBar, Footer, Navbar, } from "./components/layout";
import { Home } from "./pages";
import Preloader from "./components/preloader";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <BrowserRouter>
      <AnimatePresence mode="wait">
        {isLoading && (
          <Preloader onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      <AnnounceBar />

      <header className="sticky top-0 z-50">
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