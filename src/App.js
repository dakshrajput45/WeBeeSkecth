import AboutUs from "./pages/AboutUs"
import DigitalMarketing from "./pages/DigitalMarketing";
import Services from "./pages/Services"
import NavBar from "./components/NavBar";
import Team from "./pages/Team"
import Blog from "./pages/Blog"
import Contact from "./pages/Contact";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div>
        <NavBar />
      </div>
      <div className="App">
        <Routes>
          <Route path="/" element={<DigitalMarketing />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Team" element={<Team />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/contac" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;