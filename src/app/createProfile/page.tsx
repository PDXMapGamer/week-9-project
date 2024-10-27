// toDo The sign up page needs:
//todo connection with db.
//todo auth() and userID
// todo form to collect user's profile data.
// todo SQL query to insert user's data into the database.
// todo redirect user to the homepage once they submit the profile form.
// todo suggestion: Try/Catch for SQL query.
import { currentUser } from "@clerk/nextjs/server";
import { db } from "@/utils/dbConnection";

export default async function CreateProfile() {
  const user = await currentUser();
  const username = user?.username;
  const userID = user?.id;
  const query = await db.query(`SELECT clerk_id FROM users WHERE clerk_id = $1`, [userID]);
  const queryResult = query.rows[0]?.clerk_id;
  if (!queryResult) {
    db.query(`INSERT INTO users(clerk_id, username) VALUES($1, $2)`, [userID, username]);
  }

  return (
    <>
      <p>Hello {username}, Welcome to mY social media. Y are you here?</p>
    </>
  );
}
