import { getBlogPosts } from "../../lib/posts";
import Link from "next/link";

export default async function Blog() {
  const posts = getBlogPosts();

  return (
    <div>
      {posts.map((post, index) => (
        <article key={index} className="mb-12">
          <p className="uppercase text-gray-700 text-xxs font-bold my-1">
            {new Intl.DateTimeFormat("en-US", { dateStyle: "long" }).format(
              post.date
            )}
          </p>

          <h2 className="text-lg font-bold">
            <Link
              href={`/blog/${post.slug}`}
              className="no-underline hover:underline"
            >
              {post.title}
            </Link>
          </h2>
          <p className="text-sm leading-relaxed mt-1">{post.excerpt}</p>
        </article>
      ))}
    </div>
  );
}
