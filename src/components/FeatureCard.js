import { features } from "../data/features";

const FeatureCard = () => {
  return (
    <div id="features">
    <div className="feature-container" >
      <h1 style={{fontFamily: "Inknut Antiqua", fontSize:"40px", fontWeight:"bold"}}>Features We Provide At GitHubFinder</h1>
    <div className="feature-card-container">
      {features.map(({ title, description, image }, index) => (
        <div key={index} className="feature-card" id="feature-card">
          <div className="feature-image">
            <img src={image} alt={title} width={300} height={250} style={{borderRadius:"40px"}}/>
          </div>
          <br />
          <div className="feature-content">
            <h3 style={{fontFamily: "Inknut Antiqua", fontSize:"20px", fontWeight:"bold", color: "var(--text-tertiary)"}}>{title}</h3>
            <br />
            <p style={{fontFamily: "Inria Serif", fontSize:"16px", fontWeight:"normal", color: "var(--text-tertiary)"}}>{description}</p>
          </div>
        </div>
      ))}
    </div>
    </div>
    </div>
  );
};

export default FeatureCard;
