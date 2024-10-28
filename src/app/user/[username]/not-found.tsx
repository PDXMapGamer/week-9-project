import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h1 className="font-black text-4xl" lang="jp">
        申し訳ございません
      </h1>
      <h2>We can not find the user in our database.</h2>
      <Link href={`/homepage`}>return to homepage</Link>
    </div>
  );
}
