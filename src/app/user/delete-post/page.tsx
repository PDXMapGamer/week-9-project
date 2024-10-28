import DeletePostButton from "@/components/DeletePostButton";
import { currentUser } from "@clerk/nextjs/server";

export default async function DeletePage() {
  const user = await currentUser();
  //todo add delete.
  //todo delete from posts where post_id = id.
  return (
    <>
      <DeletePostButton username={user?.username} />
    </>
  );
}
