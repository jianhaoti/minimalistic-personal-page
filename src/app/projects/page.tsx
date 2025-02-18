export default function Projects() {
  const projects = [
    {
      slug: "vsm800",
      title: "VSM 800",
      date: "July 2024 - October 2024",
      languages: ["Swift"],
      link: "https://apps.apple.com/us/app/vsm-800/id6670715249",
      description:
        "An iOS music sampler for the iPad which allows users to create their own beats.",
    },
    {
      slug: "graphviz",
      title: "GraphViz",
      date: "January 2024 - May 2024",
      languages: ["React", "Typescript", "JavaScript", "Python", "Node.js"],
      link: "https://graphvisual.vercel.app/",
      description:
        "A web app which allow users to create their own graphs, and step-through common graph algorithms alongside its pseudocode.",
    },
  ];

  return (
    <div>
      {projects.map((post, index) => (
        <article key={index} className="mb-12">
          <p className="uppercase text-gray-700 text-xxs font-bold my-1">
            {post.date}
          </p>

          <h2 className="text-lg font-bold">
            <a
              href={`/projects/${post.slug}`}
              className="no-underline hover:underline"
            >
              {post.title}
            </a>
            <a
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 text-gray-600 hover:text-gray-900"
            >
              ↗
            </a>
          </h2>
          <p className="text-sm leading-relaxed mt-1">{post.description}</p>
        </article>
      ))}
    </div>
  );
}
