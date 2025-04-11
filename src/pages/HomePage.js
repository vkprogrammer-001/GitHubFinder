import React, { useContext } from "react";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import ThemeContext from "../context/ThemeContext";
import "../styles/theme.css";

const HomePage = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className={`home-page ${darkMode ? 'dark-mode' : ''}`}>
      {/* Navigation Bar */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />
    </div>
  );
};

export default HomePage;
