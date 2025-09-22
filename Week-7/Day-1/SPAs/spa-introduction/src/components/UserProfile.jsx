// This component will show data dynamically
// We will have access to the params values so we can update it with the actual user's data

import { Outlet, useParams, Link } from "react-router";

export default function UserProfile() {
  // Destructuring a variable to store value of the params
  const { username } = useParams();
  return (
    <>
      <h1>User Profile: {username}</h1>
      {/* Eventually we will render data from the database */}
      <Outlet />
      <Link to={`/users/${username}`}>User's Profile</Link> <br />
      <Link to={`/users/${username}/pigeon-collection`}>
        User's Pigeon Collection
      </Link>
    </>
  );
}
