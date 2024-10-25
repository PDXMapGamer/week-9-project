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
  return (
    <>
      <p>Hello, {username}</p>
      <p>Your clark id is {userID}</p>
    </>
  );
}
