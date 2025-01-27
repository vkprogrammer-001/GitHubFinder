import React from "react";

const UserCard = ({ user }) => {
  return (
    <div style={{ border: "1px solid #ccc", padding: "20px", margin: "20px" }}>
      <img
        src={user.avatar_url}
        alt={user.login}
        style={{ width: "150px", borderRadius: "50%" }}
      />
      <h2>{user.name}</h2>
      <p>{user.bio}</p>
      <a href={user.html_url} target="_blank" rel="noopener noreferrer">
        Visit Profile
      </a>
    </div>
  );
};

export default UserCard;
