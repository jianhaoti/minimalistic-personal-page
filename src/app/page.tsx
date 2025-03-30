import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-2xl mx-auto p-8">
      {/* "Header" */}
      <div className="max-w-2xl mx-auto text-center py-8" />
      <ul>
        <h1>Paul Tee</h1>
      </ul>
      <ul>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <Link href="/projects">Projects</Link>
        </li>
      </ul>

      <div className="mt-6">
        <Link
          href="https://www.wwdcscholars.com/s/C5FF7278-C2EC-489A-AEF9-52AE33F6FC7E/2025"
          className="red-blue-shimmer font-mono text-md"
          target="_blank"
          rel="noopener noreferrer"
        >
           WWDC &#39;25 Swift Student Challenge Winner
        </Link>
      </div>
    </div>
  );
}
