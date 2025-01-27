const AboutUs = () => {
  return (
    <div className="about-us-container" id="about-us">
      <div className="about-us-header">
        <h2 style={{fontFamily: "Inknut Antiqua", fontSize:"42px", fontWeight:"500"}}>Learn more about our platform</h2>
        <br />
        <p style={{fontFamily: "Inria Serif", fontSize:"20px", fontWeight:"normal"}}>
          At GitHub Finder, we harness the power of advanced search technology
          to simplify the process of locating GitHub accounts and repositories.
          Our user-friendly platform is designed to assist developers,
          recruiters, and tech enthusiasts in discovering and connecting with
          the vibrant GitHub community. We are dedicated to providing a seamless
          experience that allows you to explore profiles, delve into projects,
          and understand the contributions of developers.
        </p>
        <br />
        <p style={{fontFamily: "Inria Serif", fontSize:"20px", fontWeight:"normal"}}>
          Whether you're on the hunt for a specific developer, exploring new
          projects, or seeking collaboration opportunities, GitHub Finder is
          your go-to resource. Discover the ease of connecting with the tech
          talent you need.
        </p>
      </div>
      <div className="about-us-image">
        <img src="/assets/aboutus.webp" alt="About us" width={350} height={350} style={{borderRadius:"40px"}}/>
      </div>
    </div>
  );
};

export default AboutUs;
