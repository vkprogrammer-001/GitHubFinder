const features = [
  {
    title: "Advanced search capabilities",
    description:
      "Our advanced search feature enables you to pinpoint specific GitHub accounts and repositories with ease. No matter the complexity of your search, our tools are designed to deliver precise results tailored to your needs.",
    image: "/assets/feature_card/Advanced_search.webp",
  },
  {
    title: "Personalized recommendations",
    description:
      "With our tailored suggestions, you can discover new projects and developers that align with your interests and goals, enhancing your GitHub experience.",
    image: "/assets/feature_card/personalised_recommend.webp",
  },
  {
    title: "Community engagement",
    description:
      "By connecting you with the vibrant GitHub community, we provide opportunities for collaboration and networking, fostering a supportive environment for all users.",
    image: "/assets/feature_card/Community_engagement.webp",
  },
];

const FeatureCard = () => {
  return (
    <div id="features">
    <div className="feature-container" >
      <h1 style={{fontFamily: "Inknut Antiqua", fontSize:"40px", fontWeight:"bold"}}>Features We Provide At GitHubFinder</h1>
    <div className="feature-card-container">
      {features.map(({ title, description, image }, index) => (
        <div key={index} className="feature-card" id="feature-card">
          <div className="feature_image">
            <img src={image} alt={title} width={300} height={250} style={{borderRadius:"40px"}}/>
          </div>
          <br />
          <div className="feature-content">
            <h3 style={{fontFamily: "Inknut Antiqua", fontSize:"20px", fontWeight:"bold"}}>{title}</h3>
            <br />
            <p style={{fontFamily: "Inria Serif", fontSize:"16px", fontWeight:"normal"}}>{description}</p>
          </div>
        </div>
      ))}
    </div>
    </div>
    </div>
  );
};

export default FeatureCard;
