import { Client } from 'pg';
tsc 
// Async function to insert data into a table
async function insertData(username: string, email: string, password: string) {
  const client = new Client({
    connectionString:
      "postgresql://zaid25akhter:VgZ7b3DmzpxS@ep-steep-dawn-a55xyvxz.us-east-2.aws.neon.tech/test?sslmode=require",
  });

  try {
    await client.connect(); // Ensure client connection is established
    // const insertQuery =
    //   "INSERT INTO users (username, email, password) VALUES ('username2', 'user3@example.com', 'user_password');";
    const insertQuery =
      "INSERT INTO users (username, email, password) VALUES ($1, $2, $3)";
    const values = [username, email, password];
    const res = await client.query(insertQuery);
    console.log("Insertion success:", res); // Output insertion result
  } catch (err) {
    console.error("Error during the insertion:", err);
  } finally {
    await client.end(); // Close the client connection
  }
}

insertData("zaid", "abc@gmail.com", "abc");
