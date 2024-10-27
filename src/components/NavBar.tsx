import { UserButton, SignInButton, SignUpButton, SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";
// import { auth } from "@clerk/nextjs/server";

export default async function NavBar() {
  //   const { userId } = await auth();
  return (
    <header>
      <SignedIn>
        <UserButton />
        <Link className="ml-4" href={`/user`}>
          Profile
        </Link>
        <Link className="ml-4" href={`/homepage`}>
          Homepage
        </Link>
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
