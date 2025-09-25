// components/PostList.tsx
import Link from "next/link";

interface PostHeadline {
  slug: string;
  title: string;
  date: Date | string;
  excerpt: string;
  link?: string;
  tags?: string[];
}

interface PostListProps {
  posts: PostHeadline[];
  basePath: string;
  formatDate?: boolean;
}

export default function PostList({
  posts,
  basePath,
  formatDate = true,
}: PostListProps) {
  const formatDateDisplay = (date: Date | string): string => {
    if (formatDate && date instanceof Date) {
      return new Intl.DateTimeFormat("en-US", { dateStyle: "long" }).format(
        date
      );
    }
    return String(date); // Convert to string
  };

  return (
    <div>
      {posts.map((post, index) => (
        <article key={index} className="mb-12">
          <p className="uppercase text-foreground-700 text-xxs font-bold my-1">
            {formatDateDisplay(post.date)}
          </p>

          <h2 className="text-lg font-bold">
            <Link
              href={`${basePath}/${post.slug}`}
              className="no-underline hover:underline"
            >
              {post.title}
            </Link>
            {post.link && (
              <Link
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 text-foreground hover:text-foreground-700"
              >
                ↗
              </Link>
            )}
          </h2>
          <p className="text-sm leading-relaxed mt-1">{post.excerpt}</p>
        </article>
      ))}
    </div>
  );
}
