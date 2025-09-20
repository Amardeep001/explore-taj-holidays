import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import GuideService from "./pages/GuideService";
import CarRentalPage from "./pages/CarRental";
import Itineraries from "./pages/Itineraries";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/guides" element={<GuideService />} />
          <Route path="/car-rental" element={<CarRentalPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/itineraries" element={<Itineraries />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
