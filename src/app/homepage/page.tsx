import LikeButton from "@/components/LikeButton";
import { db } from "@/utils/dbConnection";
import { currentUser } from "@clerk/nextjs/server";
import Link from "next/link";

export default async function Homepage() {
  const user = currentUser();
  const postsQuery = await db.query(`SELECT * FROM posts
    JOIN users ON posts.user_id = users.clerk_id;`);
  const posts = postsQuery.rows;
  console.log(posts);
  return (
    <>
      <h1>Hello homepage</h1>
      <nav>
        <Link className="mr-4" href={`/search-user`}>
          Search User
        </Link>
        <Link href={`/make-post`}>Post something</Link>
      </nav>
      <div className="bg-gray-500">
        {posts.map((post) => (
          <div className="m-2" key={post.id}>
            <p>
              {post.username} says: {post.post}
            </p>
            <LikeButton id={post.id} />
          </div>
        ))}
      </div>
    </>
  );
}
