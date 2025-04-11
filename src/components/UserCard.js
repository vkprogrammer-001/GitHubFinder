import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import "../styles/theme.css";

const UserCard = ({ user }) => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className="user-card-container">
      <div className={`user-card ${darkMode ? 'dark-mode' : ''}`}>
        <div className="user-image">
          <img
            src={user.avatar_url}
            alt={user.login}
            loading="lazy"
          />
        </div>
        <div className="user-content">
          <h3
            style={{
              fontFamily: "Inknut Antiqua",
              fontSize: "24px",
              fontWeight: "500",
              marginBottom: "8px",
              color: "var(--text-primary)"
            }}
          >
            {user.login}
          </h3>
          
          <p
            style={{
              color: "var(--accent-color)",
              fontFamily: "Inria Serif",
              fontSize: "16px",
              fontWeight: "normal",
              marginBottom: "12px"
            }}
          >
            {user.name || user.login} | <a href={user.html_url} target="_blank" rel="noopener noreferrer">Visit Profile</a>
          </p>
          
          <div className="user-stats">
            <span>👥 {user.followers} followers</span>
            <span>📚 {user.public_repos} repos</span>
          </div>

          <p
            style={{
              fontFamily: "Inria Serif",
              fontSize: "14px",
              fontWeight: "normal",
              color: "var(--text-secondary)",
              marginTop: "12px",
              flexGrow: 1
            }}
          >
            {user.bio || "No biography available"}
          </p>
          
          <div className="user-location">
            {user.location && <p>📍 {user.location}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
