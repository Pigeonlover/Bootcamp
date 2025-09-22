import { Link } from "react-router";

export default function NotFound() {
  return (
    <>
      <h1>404 Not Found</h1>
      <p>You seem to have lost sight of the pigeon you were following...</p>
      <Link to={"/"}>Go Home</Link>
    </>
  );
}
