// TODO: set up a form to create new data in the pigeons' table
// - submit action --> server function
// - store the form values
// - insert the values in the database
// - extras (UX) --> refreshes the cache and redirect the user to the pigeons' page

import { db } from "@/utils/dbConnection";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export default function NewPigeonPage() {
  // We have to handle the submit
  // Server function --> async, and also needs  "use server"

  async function handleSubmit(formData) {
    //!!! Remember this directive !!!
    // We want this function to be executed in the server, so -->
    "use server";

    console.log(formData);

    // Store the form's data
    const formValues = {
      breedName: formData.get("breedName"),
      breedLink: formData.get("breedLink"),
      breedDescription: formData.get("breedDescription"),
    };
    console.log(formValues);

    // Insert the data into the database
    db.query(
      `INSERT INTO pigeonbreeds (breedName, breedLink, breedDescription) VALUES($1, $2, $3)`,
      [formValues.breedName, formValues.breedLink, formValues.breedDescription]
    );

    // Refresh the cache
    revalidatePath("/pigeon-breeds");

    // Then redirect the user to the rollercoasters page
    redirect("pigeon-breeds");
  }

  return (
    <>
      <h1>Add a new pigeon breed!</h1>
      <form action={handleSubmit}>
        <fieldset>
          <legend>Breed Info</legend>

          <label htmlFor="breedName">Breed name: </label>
          <input type="text" name="breedName" required />

          <label htmlFor="breedLink">Image link: </label>
          <input
            type="text"
            name="breedLink"
            required
            placeholder="Add a link to the image"
          />

          <label htmlFor="breedDescription">
            Breed description and extra info:{" "}
          </label>
          <input type="text" name="breedDescription" required />
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
