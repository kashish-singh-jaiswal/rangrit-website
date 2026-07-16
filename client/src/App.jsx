import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Services from "./pages/Services";
import Packages from "./pages/Packages";
import Booking from "./pages/Booking";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import StoryDetails from "./pages/StoryDetails";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public Layout */}
        <Route element={<MainLayout />}>

          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />

          <Route path="/portfolio" element={<Portfolio />} />

          <Route path="/services" element={<Services />} />

          <Route path="/packages" element={<Packages />} />

          <Route path="/booking" element={<Booking />} />

          <Route path="/contact" element={<Contact />} />

          {/* Story Details */}
          <Route path="/story/:slug" element={<StoryDetails />} />

        </Route>

        {/* Standalone Pages */}
        <Route path="/login" element={<Login />} />

        <Route path="/dashboard" element={<Dashboard />} />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;