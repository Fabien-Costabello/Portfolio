import { Route, Routes } from "react-router-dom";
import SocialSidebar from "./components/SocialSidebar";
import Technologies from "./components/Technologies";
import CV from "./pages/CV";
import Home from "./pages/Home";
import Footer from "./partials/Footer";
import Header from "./partials/Header";

function App() {
  return (
    <>
      <SocialSidebar />
      <Header />

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/cv" element={<CV/>} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
