import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ResponsiveAppBar from "./NavBar/ResponsiveAppBar";
import HomePage from "./Home/HomePage";
import AboutPage from "./About/AboutPage";
import Services from "./Services/Services";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import WhatWeOffer from "./WhatWeOffer/WhatWeOffer";
import Blog from "./Blog/Blog";
import GetQuote from "./GetQuote/GetQuote";
import LiveChat from "./LiveChat/LiveChat"; // Doğru import

function App() {
  const { i18n } = useTranslation();

  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <Router>
      <div>
        <ResponsiveAppBar changeLanguage={changeLang} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/what-we-offer" element={<WhatWeOffer />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/get-quote" element={<GetQuote />} />
        </Routes>
        <Footer />
        <LiveChat /> {/* Canlı destek */}
      </div>
    </Router>
  );
}

export default App;
