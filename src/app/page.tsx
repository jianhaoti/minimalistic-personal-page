export default function Home() {
  return (
    <div className="max-w-2xl mx-auto p-8">
      {/* "Header" */}
      <div className="max-w-2xl mx-auto text-center py-8" />
      <h1>Paul Tee</h1>
      <ul>
        <li>
          <a href="/blog">Blog</a>
        </li>
        <li>
          <a href="/projects">Projects</a>
        </li>
        <p className="font-mono mt-1 pt-1">jianhaoti@gmail.com</p>{" "}
      </ul>
    </div>
  );
}
