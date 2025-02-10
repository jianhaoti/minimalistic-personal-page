import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math"; // Add this import
import "katex/dist/katex.min.css"; // Ensure Katex CSS is loaded

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const filePath = path.join(process.cwd(), "blogPosts", `${slug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContent);

  return (
    <div>
      {/* Header Section */}
      <header className="border-b border-gray-300 pb-8 mb-8">
        <h1 className="text-2xl font-bold mb-4">{data.title}</h1>
        <p className="text-gray-600 mb-2">{data.excerpt}</p>
        <p className="uppercase text-gray-700 text-xxs font-bold">
          {data.date}
        </p>
      </header>

      {/* Blog Post */}
      <article className="prose ">
        <ReactMarkdown
          remarkPlugins={[remarkMath]} // Use remark-math to parse math expressions
          rehypePlugins={[rehypeKatex]} // Render them with rehype-katex
        >
          {content}
        </ReactMarkdown>
      </article>
    </div>
  );
}
