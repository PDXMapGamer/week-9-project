import { db } from "@/utils/dbConnection";
import { currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function MakePost() {
  const user = await currentUser();
  async function sendPost(formValues: FormData) {
    "use server";
    const formData = formValues.get("post");
    console.log(formData);
    await db.query(`INSERT INTO posts(user_id, post) VALUES ($1, $2)`, [user?.id, formData]);
    revalidatePath(`/homepage`);
    redirect(`/homepage`);
  }
  return (
    <>
      <form action={sendPost}>
        <label htmlFor="post">Post:</label>
        <textarea
          name="post"
          id="post"
          required
          placeholder={`Share your amazing thoughts with the world ${user?.username} :), personally I don't care.`}
        ></textarea>
        <button type="submit">Sent Post</button>
      </form>
    </>
  );
}
