import SocialSidebar from "./components/SocialSidebar";
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
      <Header />
      <Home />
      <Footer />
    </>
  );
}

export default App;
