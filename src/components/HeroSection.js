import "../styles/component-styles.css";
import Footer from "./Footer";
import AboutUs from "./AboutUs";
import FeatureCard from "./FeatureCard";
import ContactUs from "./ContactUs";
import BackToTop from "./BackToTop";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/search');
  };

  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1
          style={{
            fontFamily: "Inknut Antiqua",
            fontSize: "95px",
            fontWeight: "500",
          }}
        >
          GitHub Finder
        </h1>
        <h4
          style={{
            fontFamily: "Inria Serif",
            fontSize: "20px",
            fontWeight: "normal",
          }}
        >
          Find GitHub Accounts Effortlessly!
        </h4>
        <button type="submit" onClick={handleClick} style={{ fontFamily: "Inria Serif" }}>
          SEARCH
        </button>
        {/* <FeatureCard/> */}
      </div>
      <AboutUs />
      <FeatureCard/>
      <ContactUs/>
      <Footer />
      <BackToTop/>
    </div>
  );
};

export default HeroSection;
