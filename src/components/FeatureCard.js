const featureCard = ({ user }) => {
  return (
    <div className="feature-card">
      <div className="feature-card__image">
        <img src={user.avatar} alt="User Avatar" />
      </div>
      <div className="feature-card__content">
        <h3>{user.name}</h3>
        <p>{user.bio}</p>
        <a href={user.html_url} target="_blank" rel="noopener noreferrer">
          Visit Profile
        </a>
      </div>
    </div>
  );
};

export default featureCard;
