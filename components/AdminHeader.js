import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

const Header = () => {
  const { data: session, status } = useSession();

  return (
    <div className="bg-secondary">
      <div className="w-10/12 m-auto gap-5 flex justify-between items-center py-6 container">
        <Link href="/" className="font-bold text-xl">
          DaringPage
        </Link>
        {session?.user.role === "admin" && status === "authenticated" ? (
          <menu className="flex gap-5 sm:gap-10">
            <Link href="/admin">Dashboard</Link>
            <Link href="/admin/posts">Posts</Link>
            <Link href="/admin/categories">Categories</Link>
            <button onClick={() => signOut()}>Sign out</button>
          </menu>
        ) : (
          <menu className="flex gap-5 sm:gap-10">
            <button onClick={() => signIn()}>Sign in</button>
          </menu>
        )}
      </div>
    </div>
  );
};

export default Header;
