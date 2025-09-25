import { getProjectPosts } from "../../lib/posts";
import Link from "next/link";

export default async function Projects() {
  const projects = getProjectPosts(); // Fetch project posts

  return (
    <div>
      {projects.map((project, index) => (
        <article key={index} className="mb-12">
          <p className="uppercase text-foreground-700 text-xxs font-bold my-1">
            {project.date} {/* Display date range as-is */}
          </p>

          <h2 className="text-lg font-bold">
            <Link
              href={`/projects/${project.slug}`}
              className="no-underline hover:underline"
            >
              {project.title}
            </Link>
            {project.link && (
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 text-foreground hover:text-foreground-700"
              >
                ↗
              </Link>
            )}
          </h2>
          <p className="text-sm leading-relaxed mt-1">{project.excerpt}</p>

          {project.tags && (
            <p className="text-xs text-foreground-500 mt-1">
              <strong>Tags:</strong> {project.tags.join(", ")}
            </p>
          )}
        </article>
      ))}
    </div>
  );
}
