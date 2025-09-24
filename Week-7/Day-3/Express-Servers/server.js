//

// Imports
import express, { request } from "express";
import cors from "cors";
import { db } from "./dbConnection";

// Initialise express
const app = express();

// Configure express with JSON and cors in express
app.use(express.json());
app.use(cors());

// Set up a port
const PORT = 8080;

app.listen(PORT, () => {
  console.info(`Server is running on port ${PORT}`);
});

// Root route
app.get("/", (request, response) => {
  //   response.json({ message: "Welcome to the server. GET comfy!" });
  // Or
  response.send("Welcome!");
});

// Routes

// Read data from horses table
app.get("/horses", async (request, response) => {
  // Error handling
  // try ... catch
  try {
    // Query the db to send me horses data
    const data = await db.query(
      `SELECT breed_name, breed_type, src, description FROM horses;`
    );
    // wrangling the database data Result object
    response.json(data.rows);
  } catch (error) {
    console.error("FATAL! World is about to end.", error);
    response.status(500).json({ success: false });
  }
});

app.get("/horses-and-users", async (request, response) => {
  try {
    const data = await db.query(
      `SELECT horses.breed_name, horses.breed_type, users.username FROM users JOIN horses ON users.id = horses.user_id;`
    );
    response.json(data.rows);
  } catch (error) {
    console.error("FATAL! World is about to end.", error);
    response.status(500).json({ success: false });
  }
});

app.post("/add-horse", (request, response) => {
  const horseData = request.body;
  try {
    const query = db.query(
      `INSERT INTO horses (breed_name, breed_type, src, description, user_id) VALUES ($1, $2, $3, $4, $5);`,
      [
        horseData.breedName,
        horseData.breedType,
        horseData.src,
        horseData.description,
        horseData.userId,
      ]
    );
  } catch (error) {
    console.error("FATAL! World is about to end.", error);
    response.status(500).json({ success: false });
  }
});

// Delete an antry in the database

app.delete("/delete-horse/:id", (request, response) => {
  try {
    // The request has an object called params
    const paramsId = request.params.id;
    const query = db.query(`DELETE FROM horses WHERE id = $1 RETURNING *;`, [
      paramsId,
    ]);
  } catch {}
});

// Update
app.put("/update-horse", (request, response) => {
  try {
    const paramsId = request.params.id;
    const query = db.query(`DELETE FROM horses WHERE id = $1 RETURNING *;`);
  } catch {}
});
