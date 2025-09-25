// app/(content)/projects/[slug]/page.tsx
import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import MarkdownPost from "@/app/components/MarkdownPost";

export default async function ProjectPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), "projectPosts", `${slug}.md`);

  try {
    const fileContent = await fs.readFile(filePath, "utf8");
    const { data, content } = matter(fileContent);

    return (
      <MarkdownPost
        title={data.title}
        description={data.description}
        date={data.date}
        content={content}
        showImages={true} // Projects show optimized images
      />
    );
  } catch {
    return notFound();
  }
}
