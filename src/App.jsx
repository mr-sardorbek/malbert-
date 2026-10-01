import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AnnounceBar, Footer, Navbar } from "./components/layout";
import { Home } from "./pages";
import Preloader from "./components/preloader";
import { Toaster } from "sonner";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log("PRELOADER START");

    const timer = setTimeout(() => {
      console.log("PRELOADER FINISH");
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  console.log("isLoading:", isLoading);

  return (
    <BrowserRouter>
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <AnnounceBar />

          <header className="sticky top-0 z-50">
            <Navbar />
          </header>

          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Toaster position="top-center" richColors />

          <Footer />
        </>
      )}
    </BrowserRouter>
  );
};

export default App;