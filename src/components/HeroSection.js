import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import ThemeContext from "../context/ThemeContext";
import "../styles/component-styles.css";
import "../styles/theme.css";
import AboutUs from "./AboutUs";
import BackToTop from "./BackToTop";
import ContactUs from "./ContactUs";
import FeatureCard from "./FeatureCard";
import Footer from "./Footer";

const HeroSection = () => {
  const navigate = useNavigate();
  const { darkMode } = useContext(ThemeContext);

  const handleClick = () => {
    navigate('/search');
  };

  return (
    <div className={`hero-section ${darkMode ? "dark-mode" : ""}`}>
      <div className="hero-content">
        <h1
          style={{
            fontFamily: "Inknut Antiqua",
            fontSize: "95px",
            fontWeight: "500",
            color: "var(--text-primary)"
          }}
        >
          GitHub Finder
        </h1>
        <h4
          style={{
            fontFamily: "Inria Serif",
            fontSize: "20px",
            fontWeight: "normal",
            marginBottom: "30px"
          }}
        >
          Find GitHub Accounts Effortlessly!
        </h4>
        <button 
          type="submit" 
          onClick={handleClick} 
          style={{ 
            fontFamily: "Inria Serif",
            border: "none",
            padding: "12px 36px",
            borderRadius: "30px",
            fontSize: "18px",
            fontWeight: "500",
            cursor: "pointer",
            boxShadow: "var(--shadow)",
            transition: "all 0.3s ease"
          }}
        >
          SEARCH
        </button>
      </div>
      <AboutUs />
      <FeatureCard />
      <ContactUs />
      <Footer />
      <BackToTop />
    </div>
  );
};

export default HeroSection;
