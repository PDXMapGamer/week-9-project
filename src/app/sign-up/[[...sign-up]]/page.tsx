import { SignUp } from "@clerk/nextjs";
// todo Here I can use clerk sign-up component
// todo then redirect to createProfile to complete the profile.
export default function SignUpPage() {
  return (
    <>
      <h1>Welcome to the world&apos;s greatest social media app!</h1>
      <SignUp />
    </>
  );
}
