import Link from "next/link";

const Header = () => {
  return (
    <div className="bg-secondary">
      <div className="w-10/12 m-auto gap-5 flex justify-between items-center py-6 container">
        <Link href="/" className="font-bold text-xl">
          DaringPage
        </Link>
        <menu className="flex gap-5 sm:gap-10">
          <Link href="/">Home</Link>
          <Link href="/contact">Contact</Link>
        </menu>
      </div>
    </div>
  );
};

export default Header;
