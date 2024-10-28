import { PageProps } from "../../../../.next/types/app/layout";
import { db } from "@/utils/dbConnection";
import LikeButton from "@/components/LikeButton";
import { notFound } from "next/navigation";

export default async function UserProfilePage({ params }: PageProps) {
  // not sure why "PageProps" type worked just put it in from Type error: Type 'paramsType' does not satisfy the constraint 'PageProps'. Types of property 'params' are incompatible error.
  // todo: promise stuff with params.
  const username = (await params).username;

  //! Lack of promise type with params break the vercel deployment.
  //todo load bio and all posts that the user has posted
  const userQuery = await db.query(`SELECT username FROM users WHERE username = '${username}'`); // $1 username doesnt work here either,
  const user = userQuery.rows;
  const userExist = user[0]?.username;
  if (!userExist) {
    notFound();
  }
  const query = await db.query(`SELECT * FROM posts
    JOIN users ON posts.user_id = users.clerk_id WHERE username = '${username}';`); //For some reason when using $1 it seperates onto differant lines and not work
  const posts = query.rows;
  return (
    <>
      <div className="bg-gray-500">
        <h2>{username}&apos;s Timeline:</h2>
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
