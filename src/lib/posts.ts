import fs from "fs";
import path from "path";
import matter from "gray-matter";

const baseDirectory = process.cwd(); // Base directory for Markdown files

// Function for fetching blog posts
export function getBlogPosts() {
  const postsDirectory = path.join(baseDirectory, "blogPosts");
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);

    return {
      slug: filename.replace(".md", ""),
      title: data.title,
      date: new Date(data.date), // Convert to Date object for proper sorting
      tags: data.tags,
      excerpt: data.excerpt,
    };
  });

  // Sort blog posts by date in descending order
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
