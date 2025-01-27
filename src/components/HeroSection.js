import "../styles/component-styles.css";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";
// import FeatureCard from "../components/FeatureCard";

const heroSection = () => {
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
        <button type="submit" style={{ fontFamily: "Inria Serif" }}>
          SEARCH
        </button>
        {/* <FeatureCard/> */}
      </div>
      <AboutUs />
      <Footer />
    </div>
  );
};

export default heroSection;
