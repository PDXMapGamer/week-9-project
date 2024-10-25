import { SignIn } from "@clerk/nextjs";

// todo use sign-in component from clerk
export default function SignInPage() {
  return (
    <>
      <h1>Sign in to use the world&apos;s best social media app</h1>
      <SignIn />
    </>
  );
}
