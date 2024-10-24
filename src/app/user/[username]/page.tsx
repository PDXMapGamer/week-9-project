//todo set up profile page.
// import { currentUser } from "@clerk/nextjs/server";
//! We need auth() -> userID and currentUser -> username, emailaddress from clerk
export default async function UserPage() {
  // const user = await currentUser()
  return (
    <h1>
      <p>User page.</p>
      {/* <h2>Welcome. {user.username}</h2> */}
    </h1>
  );
}
