// app/(content)/projects/page.tsx
import { getProjectPosts } from "@/lib/posts";
import PostList from "@/app/components/PostList";

export default async function Projects() {
  const projects = getProjectPosts();
  return <PostList posts={projects} basePath="/projects" formatDate={false} />;
}
