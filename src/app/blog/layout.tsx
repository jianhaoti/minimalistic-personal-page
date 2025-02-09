"use client";
import { usePathname } from "next/navigation";

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
          <a
            href="/"
            className={`text-gray-700 hover:text-gray-500 ${
              pathname === "/" ? "underline" : "no-underline"
            }`}
          >
            Home
          </a>
          <a
            href="/blog"
            className={`text-gray-700 hover:text-gray-500 ${
              pathname === "/blog" ? "underline" : "no-underline"
            }`}
          >
            Blog
          </a>
          <a
            href="/projects"
            className={`text-gray-700 hover:text-gray-500 ${
              pathname === "/projects" ? "underline" : "no-underline"
            }`}
          >
            Projects
          </a>
        </nav>
      </header>
      <main className="max-w-4xl mx-auto p-8">{children}</main>
    </div>
  );
}
