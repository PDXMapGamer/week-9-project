//todo set up profile page.
import { db } from "@/utils/dbConnection";
import { currentUser } from "@clerk/nextjs/server";
import Link from "next/link";
//! We need auth() -> userID and currentUser -> username, emailaddress from clerk
export default async function UserPage() {
  const user = await currentUser();
  const query = await db.query(`SELECT bio FROM users WHERE clerk_id = $1`, [user?.id]);
  const bio = query.rows[0].bio;
  console.log(bio);
  return (
    <>
      <p>User page.</p>
      <h1>Welcome {user?.username}</h1>
      <div id="bio-area">
        <p>Bio:</p>
        <h2>{bio}</h2>
      </div>
      <nav>
        <Link className="mr-4" href={`/user/edit-bio`}>
          Edit Your Bio
        </Link>
        <Link className="mr-4" href={`/user/delete-post`}>
          Delete A Post
        </Link>
        <Link className="mr-4" href={`/user/view-followers`}>
          View Your Followers
        </Link>
        <Link className="mr-4" href={`/user/view-followings`}>
          View Who You Are Following
        </Link>
        <Link className="mr-4" href={`/user/view-liked-posts`}>
          View Liked Posts
        </Link>
      </nav>
    </>
  );
}
