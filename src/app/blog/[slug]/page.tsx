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

// Cache for blog posts
const postCache = new Map<string, { frontMatter: any; content: string }>();

async function getBlogPost(slug: string) {
  if (postCache.has(slug)) {
    return postCache.get(slug);
  }

  const filePath = path.join(process.cwd(), "blogPosts", `${slug}.md`);

  try {
    const fileContent = await fs.readFile(filePath, "utf8");
    const { data, content } = matter(fileContent);

    const post = { frontMatter: data, content };
    postCache.set(slug, post);
    return post;
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
    <div className="max-w-3xl mx-auto px-6">
      <header className="border-b border-gray-300 pb-8 mb-8">
        <h1 className="text-3xl font-bold">{post.frontMatter.title}</h1>
        <p className="text-gray-500 text-sm mb-2">{post.frontMatter.excerpt}</p>
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

// ✅ Enable ISR for better performance
export const revalidate = 60;
