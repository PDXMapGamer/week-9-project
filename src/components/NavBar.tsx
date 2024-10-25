import { UserButton, SignInButton, SignUpButton, SignedIn, SignedOut } from "@clerk/nextjs";
// import { auth } from "@clerk/nextjs/server";

export default async function NavBar() {
  //   const { userId } = await auth();
  return (
    <header>
      <SignedIn>
        <UserButton />
      </SignedIn>
      <SignedOut>
        <span className="mr-4">
          <SignInButton mode="modal">Sign In</SignInButton>
        </span>
        <SignUpButton mode="modal">Sign Up</SignUpButton>
      </SignedOut>
    </header>
  );
}
