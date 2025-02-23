import { getProjectPosts } from "../../lib/posts";

export default async function Projects() {
  const projects = await getProjectPosts(); // Fetch project posts

  return (
    <div>
      {projects.map((project, index) => (
        <article key={index} className="mb-12">
          <p className="uppercase text-gray-700 text-xxs font-bold my-1">
            {project.date} {/* Display date range as-is */}
          </p>

          <h2 className="text-lg font-bold">
            <a
              href={`/projects/${project.slug}`}
              className="no-underline hover:underline"
            >
              {project.title}
            </a>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 text-gray-600 hover:text-gray-900"
              >
                ↗
              </a>
            )}
          </h2>
          <p className="text-sm leading-relaxed mt-1">{project.excerpt}</p>

          {project.tags && (
            <p className="text-xs text-gray-500 mt-1">
              <strong>Tags:</strong> {project.tags.join(", ")}
            </p>
          )}
        </article>
      ))}
    </div>
  );
}
