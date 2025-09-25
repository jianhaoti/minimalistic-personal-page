// app/(content)/blog/[slug]/page.tsx
import { notFound } from "next/navigation";
import { getBlogPost } from "@/lib/posts";
import MarkdownPost from "@/app/components/MarkdownPost";

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) return notFound();

  return (
    <MarkdownPost
      title={post.frontMatter.title}
      description={post.frontMatter.excerpt}
      date={post.frontMatter.date}
      content={post.content}
    />
  );
}
