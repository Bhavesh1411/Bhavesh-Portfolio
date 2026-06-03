import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  AchievementsShowcase,
} from "./components";
import Banner from "./components/banner";
import Footer from "./components/footer";

const MainPortfolio = ({ hide }: { hide: boolean }) => (
  <div className="relative z-0 bg-primary">
    <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
      <Navbar hide={hide} />
      <Hero />
    </div>
    <About />
    <Experience />
    <Tech />
    <Works />

    {/* Contact */}
    <div className="relative z-0">
      <Contact />
      <StarsCanvas />
    </div>
    <Footer />
  </div>
);

// App
const App = () => {
  const [hide, setHide] = useState(true);

  return (
    <BrowserRouter>
      <Banner hide={hide} setHide={setHide} />
      <Routes>
        <Route path="/" element={<MainPortfolio hide={hide} />} />
        <Route path="/achievements" element={
          <div className="relative z-0 bg-primary min-h-screen pb-10">
            <Navbar hide={hide} />
            <div className="pt-20">
              <AchievementsShowcase />
            </div>
            <Footer />
          </div>
        } />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
