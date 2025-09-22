//
import { useState } from "react";

export default function Form() {
  const [username, setUsername] = useState("");
  const [job, setJob] = useState("");
  //
  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }

  function handleJobChange(event) {
    setJob(event.target.value);
  }
  //
  function handleSubmit(event) {
    event.preventDefault();
    // fetch POST server route
    // add headers and body
  }
  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Personal Info</legend>
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          name="username"
          required
          value={username}
          onChange={handleUsernameChange}
        />
      </fieldset>

      <fieldset>
        <legend>Professional Info</legend>
        <label htmlFor="job">Job:</label>
        <input
          type="text"
          name="job"
          required
          value={job}
          onChange={handleJobChange}
        />
      </fieldset>

      <button type="submit">Submit</button>
    </form>
  );
}
