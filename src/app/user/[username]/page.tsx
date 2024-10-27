import { paramsType } from "@/utils/types";

export default async function UserProfilePage({ params }: paramsType) {
  const username = await params.username;
  return (
    <>
      <p>{username}</p>
    </>
  );
}
