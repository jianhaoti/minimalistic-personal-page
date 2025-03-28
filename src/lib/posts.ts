import fs from "fs";
import path from "path";
import matter from "gray-matter";

const baseDirectory = process.cwd(); // Base directory for Markdown files

export function getBlogPost(slug: string) {
  const folders = ["blogPosts", "blogDrafts"];
  for (const folder of folders) {
    const filePath = path.join(baseDirectory, folder, `${slug}.md`);
    try {
      const fileContent = fs.readFileSync(filePath, "utf8");
      const { data, content } = matter(fileContent);
      return {
        frontMatter: data,
        content,
        source: folder,
      };
    } catch {
      continue;
    }
  }
  return null;
}

// Function for fetching blog posts [FROM TWO DIFFERNET DIRECTORIES!]
export function getBlogPosts() {
  const postsDirectories = [
    path.join(baseDirectory, "blogPosts"),
    path.join(baseDirectory, "blogDrafts"),
  ];

  const posts = postsDirectories.flatMap((directory) => {
    if (!fs.existsSync(directory)) return [];

    const filenames = fs.readdirSync(directory);

    return filenames.map((filename) => {
      const filePath = path.join(directory, filename);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data } = matter(fileContents);

      return {
        slug: filename.replace(".md", ""),
        title: data.title,
        date: new Date(data.date), // Date object
        tags: data.tags,
        excerpt: data.excerpt,
        isDraft: directory.includes("Draft"), // optional: flag as draft
      };
    });
  });

  return posts.sort((a, b) => b.date.getTime() - a.date.getTime());
}
// Function for fetching project posts
export function getProjectPosts() {
  const postsDirectory = path.join(baseDirectory, "projectPosts");
  const filenames = fs.readdirSync(postsDirectory);

  const projects = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);

    return {
      slug: filename.replace(".md", ""),
      title: data.title,
      date: data.date, // Keep as string since project posts have date ranges
      tags: data.languages, // Convert languages to tags
      link: data.link || null,
      excerpt: data.description,
    };
  });

  // Sort projects by start date (first date in range)
  return projects.sort((a, b) => {
    const dateA = new Date(a.date.split(" - ")[0]).getTime(); // Extract start date
    const dateB = new Date(b.date.split(" - ")[0]).getTime();
    return dateB - dateA; // Sort descending
  });
}
