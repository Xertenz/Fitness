import { navItems } from "@/app/lib/constants";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full backdrop-blur-md border-b py-3">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-black text-primary text-red-500">
					<Link href="/">ProFit</Link>
					</h2>
        </div>

        <div className="hidden sm:block">
          <ul className="flex justify-center items-center">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link href={item.href} className="px-1.5">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <button className="bg-red-500 hover:bg-red-600 transition-colors text-white font-bold rounded px-4 py-2 cursor-pointer">
            Join Now
          </button>
        </div>
      </div>
    </nav>
  );
}
