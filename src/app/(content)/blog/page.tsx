// app/(content)/blog/page.tsx
import { getBlogPosts } from "@/lib/posts";
import PostList from "@/app/components/PostList";
import { getUniqueTags } from "@/lib/utils";
import TagFilter from "@/app/components/TagFilter";

export default async function Blog({
  searchParams,
}: {
  searchParams: Promise<{ tag?: string }>;
}) {
  const { tag } = await searchParams;
  const allPosts = getBlogPosts();

  const posts = tag
    ? allPosts.filter((post) =>
        post.tags?.some((t: string) => t.toLowerCase() === tag.toLowerCase())
      )
    : allPosts;

  const allTags = getUniqueTags(allPosts);

  return (
    <div>
      <TagFilter tags={allTags} />
      <PostList posts={posts} basePath="/blog" formatDate={true} />
    </div>
  );
}
