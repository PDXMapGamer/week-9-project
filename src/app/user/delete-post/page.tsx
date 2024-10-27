import DeletePostButton from "@/components/DeletePostButton";
import { currentUser } from "@clerk/nextjs/server";

export default async function DeletePage() {
  const user = await currentUser();
  return (
    <>
      <DeletePostButton username={user?.username} />
    </>
  );
}
