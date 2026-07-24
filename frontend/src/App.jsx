import { Route, Routes } from "react-router-dom";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import About from "./pages/About";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import EquipmentPage from "./pages/EquipmentPage";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import News from "./pages/News";
import PlaceholderPage from "./pages/PlaceholderPage";
import ProjectsPage from "./pages/ProjectsPage";
import Quote from "./pages/Quote";
import ServicesPage from "./pages/ServicesPage";
import Team from "./pages/Team";
import Wash from "./pages/Wash";

function App() {
  return (
    <div className="app">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="/services" element={<ServicesPage />} />
        <Route
          path="/services/:slug"
          element={<PlaceholderPage title="Service Details" />}
        />

        <Route path="/wash" element={<Wash />} />

        <Route path="/projects" element={<ProjectsPage />} />
        <Route
          path="/projects/:slug"
          element={<PlaceholderPage title="Project Details" />}
        />

        <Route path="/equipment" element={<EquipmentPage />} />
        <Route path="/team" element={<Team />} />
        <Route path="/careers" element={<Careers />} />

        <Route path="/news" element={<News />} />
        <Route
          path="/news/:slug"
          element={<PlaceholderPage title="News Article" />}
        />

        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/quote" element={<Quote />} />

        <Route
          path="*"
          element={<PlaceholderPage title="Page Not Found" />}
        />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;