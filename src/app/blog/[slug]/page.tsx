import fs from "fs/promises"; // Use the promise-based API
import path from "path";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import "katex/dist/katex.min.css";
import { notFound } from "next/navigation";
import rehypeRaw from "rehype-raw";

interface BlogPostProps {
  params: Promise<{ slug: string }>; // params is now a Promise
}

export default async function BlogPost({ params }: BlogPostProps) {
  const { slug } = await params; // Await the params to get the slug

  const filePath = path.join(process.cwd(), "blogPosts", `${slug}.md`);

  try {
    const fileContent = await fs.readFile(filePath, "utf8");
    const { data, content } = matter(fileContent);

    const formattedDate = data.date
      ? new Intl.DateTimeFormat("en-US", { dateStyle: "long" }).format(
          new Date(data.date)
        )
      : "Unknown Date";

    return (
      <div className="max-w-3xl mx-auto px-6">
        <header className="border-b border-gray-300 pb-8 mb-8">
          <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
          <p className="text-gray-500 text-sm mb-2">{data.excerpt}</p>
          <p className="uppercase text-gray-700 text-xs font-bold">
            {formattedDate}
          </p>
        </header>

        <article className="prose max-w-none">
          <ReactMarkdown
            remarkPlugins={[remarkMath]}
            rehypePlugins={[rehypeKatex, rehypeRaw]}
          >
            {content}
          </ReactMarkdown>
        </article>
      </div>
    );
  } catch {
    return notFound();
  }
}
