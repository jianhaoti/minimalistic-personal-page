import ReactMarkdown from "react-markdown";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import remarkGfm from "remark-gfm";
import "katex/dist/katex.min.css";
import { notFound } from "next/navigation";
import { getBlogPost } from "@/lib/posts";
import rehypeRaw from "rehype-raw";

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) return notFound();

  return (
    <div>
      <header className="border-b border-foreground-300 pb-4 mb-6">
        <h1 className="text-3xl font-bold">{post.frontMatter.title}</h1>
        <p className="text-foreground-500 text-sm mb-2">
          {post.frontMatter.excerpt}
        </p>
        <p className="uppercase text-foreground-700 text-xxs font-bold">
          {post.frontMatter.date}
        </p>
      </header>

      <div className="markdown-body">
        <ReactMarkdown
          remarkPlugins={[remarkMath, remarkGfm]}
          rehypePlugins={[rehypeRaw, rehypeKatex]}
        >
          {post.content}
        </ReactMarkdown>
      </div>
    </div>
  );
}
