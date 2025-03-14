// import React, { useState, useEffect } from "react";
// import { fetchUserData } from "../api/githubApi.js";

const UserCard = ({ user }) => {
  return (
    <div className="user-card-container">
      <div className="user-card" id="user-card">
        <div className="user-image">
          <img
            src={user.avatar_url}
            alt={user.login}
            width={300}
            height={250}
            style={{ borderRadius: "40px" }}
          />
        </div>
        <br />
        <div className="user-content">
          <h3
            style={{
              fontFamily: "Inknut Antiqua",
              fontSize: "28px",
              fontWeight: "500",
            }}
          >
            {user.login}
          </h3>
          <br />
          <p
            style={{
              color: "#045C82",
              fontFamily: "Inria Serif",
              fontSize: "18px",
              fontWeight: "normal",
            }}
          >
            {user.name} | <a href="user.url">visit</a>
          </p>
          <br />

          <p
            style={{
              fontFamily: "Inria Serif",
              fontSize: "16px",
              fontWeight: "normal",
            }}
          >
            {user.bio}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
