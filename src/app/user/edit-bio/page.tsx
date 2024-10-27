import Link from "next/link";
import { currentUser } from "@clerk/nextjs/server";
import { db } from "@/utils/dbConnection";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function EditBio() {
  const user = await currentUser();
  const query = await db.query(`SELECT bio FROM users WHERE clerk_id = $1`, [user?.id]);
  const bio = query.rows[0].bio;
  async function onUpdate(formValues: FormData) {
    "use server";
    const formData = formValues.get("bio");
    await db.query(`UPDATE users SET bio = $1 WHERE clerk_id = $2`, [formData, user?.id]);
    revalidatePath(`/user`);
    redirect(`/user`);
  }
  return (
    <>
      <Link href={`/user`}>Wait go back.</Link>
      <p>Edit bio here</p>
      <form action={onUpdate}>
        <textarea
          name="bio"
          id="bio"
          required
          defaultValue={bio}
          placeholder="Please enter a bio for yourself :)"
        ></textarea>
        <button className="ml-4" type="submit">
          Update Bio
        </button>
      </form>
    </>
  );
}
