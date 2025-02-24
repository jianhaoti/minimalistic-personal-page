import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-2xl mx-auto p-8">
      {/* "Header" */}
      <div className="max-w-2xl mx-auto text-center py-8" />
      <h1>Paul Tee</h1>
      <ul>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <Link href="/projects">Projects</Link>
        </li>
        <p className="font-mono mt-1 pt-1">jianhaoti@gmail.com</p>{" "}
      </ul>
    </div>
  );
}
