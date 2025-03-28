import ReactMarkdown from "react-markdown";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import remarkHtml from "remark-html";
import "katex/dist/katex.min.css";
import { notFound } from "next/navigation";
import rehypeRaw from "rehype-raw";
import { getBlogPost } from "@/lib/posts";

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
      <header className="border-b border-gray-300 pb-4 mb-6">
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
