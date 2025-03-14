import React, { useEffect, useState } from "react";
import UserCard from "./UserCard";
import { fetchUsers } from "../api/githubApi";

const UserList = ({ searchTerm }) => {
  const [user, setUser] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const res = await fetchUsers(searchTerm);
        setUser(res);
      } catch (error) {
        console.error("Error in fetchUser:", error);
        setError(error.message);
      }
    };

    if (searchTerm) {
      loadUsers();
    }
  }, [searchTerm]);

  if (error) {
    return <p className="error-message">Error: {error}</p>;
  }

  return (
    <div className="search-results-list">
        {!user?<UserCard key={user.id} user={user} />:<p id="Empty" >Find a GitHub Account</p>}
    </div>
  );
};

export default UserList;