import fs from "fs/promises"; // ✅ Use async-friendly fs
import path from "path";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import "katex/dist/katex.min.css";
import { notFound } from "next/navigation";
import SideBySideImages from "@/components/SideBySideImages";
import rehypeRaw from "rehype-raw";
import Link from "next/link";
import Image from "next/image"; // ✅ Use Next.js optimized Image

interface ProjectPostProps {
  params: Promise<{ slug: string }>; // ✅ Awaitable params in Next.js 15
}

export default async function ProjectPost({ params }: ProjectPostProps) {
  const { slug } = await params; // ✅ Await params before using

  const filePath = path.join(process.cwd(), "projectPosts", `${slug}.md`);

  try {
    // ✅ Use async file reading
    const fileContent = await fs.readFile(filePath, "utf8");
    const { data, content } = matter(fileContent);

    return (
      <div className="max-w-3xl mx-auto px-6">
        {/* Header Section */}
        <header className="border-b border-gray-300 pb-4 mb-6">
          <div className="flex items-center">
            <h1 className="text-3xl font-bold">{data.title}</h1>
            {data.link && (
              <Link
                href={data.link}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-4 text-gray-600 hover:text-gray-900 text-2xl"
              >
                ↗
              </Link>
            )}
          </div>
          <p className="text-gray-500 text-sm mb-2">
            {data.excerpt || data.description}
          </p>
          <p className="uppercase text-gray-700 text-xxs font-bold">
            {data.date}
          </p>
        </header>

        {/* Project Content */}
        <article className="prose max-w-none">
          <ReactMarkdown
            remarkPlugins={[remarkMath]}
            rehypePlugins={[rehypeKatex, rehypeRaw]}
            components={{
              // ✅ Custom Next.js Image Component for Markdown
              img: ({ src, alt }) => {
                if (!src) return null; // Ensure src exists

                // ✅ Side-by-side image handling
                if (alt?.includes("|")) {
                  const [src1, caption1, src2, caption2] = alt.split("|");
                  return (
                    <SideBySideImages
                      src1={`/images/${src1.trim()}`}
                      src2={`/images/${src2.trim()}`}
                      caption1={caption1.trim()}
                      caption2={caption2.trim()}
                    />
                  );
                }

                return (
                  <div className="flex justify-center my-4">
                    <Image
                      src={src}
                      alt={alt || "Project Image"}
                      width={600} // Adjust as needed
                      height={400}
                      className="rounded-lg shadow-md"
                    />
                  </div>
                );
              },
            }}
          >
            {content}
          </ReactMarkdown>
        </article>
      </div>
    );
  } catch {
    return notFound(); // ✅ Handle missing projects correctly
  }
}
