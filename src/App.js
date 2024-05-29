import AboutUs from "./pages/AboutUs"
import DigitalMarketing from "./pages/DigitalMarketing";
import Services from "./pages/Services"
import NavBar from "./components/NavBar";
import Blog from "./pages/Blog"
import Contact from "./pages/Contact";
import { Route, Routes } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "./Context/AppContext";

function App() {
  const {active} = useContext(AppContext);
  return (
    <div className="App">
      <div>
        <NavBar />
      </div>
      <div className={`component-body ${active ? 'nav-open' : ''}`}>
        <Routes>
          <Route path="/" element={<DigitalMarketing />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;