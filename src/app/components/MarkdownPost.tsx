// components/MarkdownPost.tsx
import ReactMarkdown from "react-markdown";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import Image from "next/image";
import "katex/dist/katex.min.css";

interface MarkdownPostProps {
  title: string;
  description?: string;
  date: string;
  content: string;
  showImages?: boolean; // Only projects need custom image handling
}

export default function MarkdownPost({
  title,
  description,
  date,
  content,
  showImages = false,
}: MarkdownPostProps) {
  return (
    <div>
      <header className="border-b border-foreground-300 pb-4 mb-6">
        <h1 className="text-3xl font-bold">{title}</h1>
        {description && (
          <p className="text-foreground-500 text-sm mb-2">{description}</p>
        )}
        <p className="uppercase text-foreground-700 text-xxs font-bold">
          {date}
        </p>
      </header>

      <div className="markdown-body">
        <ReactMarkdown
          remarkPlugins={[remarkMath, remarkGfm]}
          rehypePlugins={[rehypeRaw, rehypeKatex]}
          components={
            showImages
              ? {
                  img: ({ src, alt }) => {
                    if (!src) return null;
                    return (
                      <div className="flex justify-center my-4">
                        <Image
                          src={src}
                          alt={alt || "Image"}
                          width={600}
                          height={400}
                          className="rounded-lg shadow-md"
                        />
                      </div>
                    );
                  },
                }
              : undefined
          }
        >
          {content}
        </ReactMarkdown>
      </div>
    </div>
  );
}
