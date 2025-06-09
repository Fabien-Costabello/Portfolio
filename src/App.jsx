import { Route, Routes } from "react-router-dom";
import SocialSidebar from "./components/SocialSidebar";
import CV from "./pages/CV";
import Home from "./pages/Home";
import Footer from "./partials/Footer";
import Header from "./partials/Header";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <>
      <SocialSidebar />
     <Header/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cv" element={<CV />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
