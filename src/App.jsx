import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Services from "./pages/Services";
import Team from "./pages/Team";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <div className="h-screen">
        <Navbar />
        <Routes>
          <Route path="samiajannatevent/" element={<Home />} />
          <Route path="samiajannatevent/about" element={<About />} />
          <Route path="samiajannatevent/services" element={<Services />} />
          <Route path="samiajannatevent/team" element={<Team />} />
          <Route path="samiajannatevent/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
