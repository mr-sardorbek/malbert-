import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "sonner";

import { Footer, Navbar } from "./components/layout";
import Preloader from "./components/preloader";
import { Home } from "./pages";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      <header className="sticky top-0 z-50">
        <Navbar />
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      <Toaster position="top-center" richColors />
      <Footer />

      {isLoading && <Preloader />}
    </BrowserRouter>
  );
};

export default App;