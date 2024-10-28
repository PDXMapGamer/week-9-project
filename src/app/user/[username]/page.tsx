import { paramsType } from "@/utils/types";
import { PageProps } from "../../../../.next/types/app/layout";

export default async function UserProfilePage({ params }: PageProps) {
  // not sure why "PageProps" type worked just put it in from Type error: Type 'paramsType' does not satisfy the constraint 'PageProps'. Types of property 'params' are incompatible error.
  // export default async function UserProfilePage() {
  const username = (await params).username;
  // todo: promise stuff with params.
  //! Lack of promise type with params break the vercel deployment.
  //todo load bio and all posts that the user has posted
  return (
    <>
      <p>{username}</p>
      <p>
        Dynamic route for displaying a specific user&apos;s profile is under construction and had to be removed due to
        promises breaking vercel deployment
      </p>
    </>
  );
}
