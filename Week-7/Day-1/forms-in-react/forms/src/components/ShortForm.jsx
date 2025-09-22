//
// Refactoring the form to make it more DRY
//

import { useState } from "react";

export default function Form() {
  //   const [username, setUsername] = useState("");
  //   const [job, setJob] = useState("");
  //

  const [formData, setFormData] = useState({
    username: "",
    job: "",
  });

  //
  //   function handleUsernameChange(event) {
  //     setUsername(event.target.value);
  //   }

  //   function handleJobChange(event) {
  //     setJob(event.target.value);
  //   }
  //

  function handleInputChange(event) {
    // The spread operator ... can be used to merge multiple objects into a new object
    setFormData({ ...formData, [event.target.name]: event.target.value });
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
          value={formData.username}
          onChange={handleInputChange}
        />
      </fieldset>

      <fieldset>
        <legend>Professional Info</legend>
        <label htmlFor="job">Job:</label>
        <input
          type="text"
          name="job"
          required
          value={formData.job}
          onChange={handleInputChange}
        />
      </fieldset>

      <button type="submit">Submit</button>
    </form>
  );
}
