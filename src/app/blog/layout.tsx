"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const fullpathname = usePathname();
  const pathname = fullpathname.startsWith("/blog") ? "/blog" : fullpathname;
  console.log(pathname);

  return (
    <div>
      <header className="max-w-2xl mx-auto p-8 flex justify-between items-center">
        <nav className="space-x-4">
          <Link
            href="/"
            className={`text-gray-700 hover:text-gray-500 ${
              pathname === "/" ? "underline" : "no-underline"
            }`}
          >
            Home
          </Link>
          <Link
            href="/blog"
            className={`text-gray-700 hover:text-gray-500 ${
              pathname === "/blog" ? "underline" : "no-underline"
            }`}
          >
            Blog
          </Link>
          <Link
            href="/projects"
            className={`text-gray-700 hover:text-gray-500 ${
              pathname === "/projects" ? "underline" : "no-underline"
            }`}
          >
            Projects
          </Link>
        </nav>
      </header>
      <main className="max-w-4xl mx-auto p-8">{children}</main>
    </div>
  );
}
