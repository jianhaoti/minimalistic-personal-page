import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import remarkHtml from "remark-html";
import "katex/dist/katex.min.css";
import { notFound } from "next/navigation";
import rehypeRaw from "rehype-raw";

// ✅ Define the interface for front matter metadata
interface BlogFrontMatter {
  title: string;
  excerpt?: string;
  date?: string;
  tags?: string[];
}

// ✅ Async function to fetch blog data with explicit types
async function getBlogPost(
  slug: string
): Promise<{ frontMatter: BlogFrontMatter; content: string } | null> {
  const filePath = path.join(process.cwd(), "blogPosts", `${slug}.md`);

  try {
    const fileContent = await fs.readFile(filePath, "utf8");
    const { data, content } = matter(fileContent);

    return { frontMatter: data as BlogFrontMatter, content }; // ✅ Explicitly type `data`
  } catch {
    return null;
  }
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) return notFound();

  return (
    <div>
      <header className="border-b border-gray-300 pb-8 mb-8">
        <h1 className="text-3xl font-bold">{post.frontMatter.title}</h1>
        <p className="text-gray-500 text-sm mb-2">{post.frontMatter.excerpt}</p>
        <p className="uppercase text-gray-700 text-xxs font-bold">
          {post.frontMatter.date}
        </p>
      </header>

      <article className="prose max-w-none">
        <ReactMarkdown
          remarkPlugins={[remarkMath, remarkHtml]}
          rehypePlugins={[rehypeKatex, rehypeRaw]}
        >
          {post.content}
        </ReactMarkdown>
      </article>
    </div>
  );
}
