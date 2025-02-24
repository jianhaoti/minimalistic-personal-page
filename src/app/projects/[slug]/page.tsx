import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math"; // Add this import
import "katex/dist/katex.min.css"; // Ensure Katex CSS is loaded
import { notFound } from "next/navigation";
import SideBySideImages from "@/components/SideBySideImages";
import rehypeRaw from "rehype-raw";
import Link from "next/link";

export default async function ProjectPost({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), "projectPosts", `${slug}.md`);

  // Check if the file exists, or redicted to page not found
  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContent);

  return (
    <div>
      {/* Header Section */}
      <header className="border-b border-gray-300 pb-8 mb-8">
        <div className="flex">
          <h1 className="text-2xl font-bold mb-4">{data.title}</h1>
          <Link
            href={data.link}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 text-gray-600 hover:text-gray-900 text-2xl"
          >
            {" "}
            ↗
          </Link>
        </div>
        <p className="text-gray-500 text-sm mb-2">{data.excerpt}</p>
      </header>

      {/* Project Post */}
      <article className="prose">
        <ReactMarkdown
          remarkPlugins={[remarkMath]} // Use remark-math to parse math expressions
          rehypePlugins={[rehypeKatex, rehypeRaw]} // Render them with rehype-katex
          components={{
            img: ({ src, alt }) => {
              // Define a case for side-by-side images
              if (alt?.includes("|")) {
                const [src1, caption1, src2, caption2] = alt.split("|");
                return (
                  <SideBySideImages
                    src1={`/images/${src1.trim()}`}
                    src2={`/images/${src2.trim()}`}
                    caption1={caption1}
                    caption2={caption2}
                  />
                );
              }
              return (
                <img src={src || ""} alt={alt || ""} className="mx-auto" />
              );
            },
          }}
        >
          {content}
        </ReactMarkdown>
      </article>
    </div>
  );
}
