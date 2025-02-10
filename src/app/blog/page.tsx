export default function Blog() {
  const posts = [
    {
      slug: "no-cloning",
      title: "A Simple Proof of No Cloning",
      date: "11 December 2024",
      tags: ["quantum computing", "linear algebra"],
      excerpt:
        "We provide a simple proof of the no cloning theorem from quantum computing.",
    },
    {
      slug: "geometers-derivation-graph-laplacian",
      title: "A Geometer's Derivation of the Graph Laplacian",
      date: "26 October 2024",
      tags: ["graph theory", "linear algebra"],
      excerpt:
        "The graph Laplacian is the central object of study in spectral graph theory, but its ties to the standard Laplacian isn’t apparent in standard references. In this article, we bridge this gap by showing both Laplacians can be interpreted as the difference between a function value and its local average.",
    },
  ];

  return (
    <div className="space-y-8">
      {posts.map((post, index) => (
        <article key={index} className="mb-16">
          <p className="uppercase text-gray-700 text-xxs font-bold my-1">
            {post.date}
          </p>

          <h2 className="text-lg font-bold">
            <a
              href={`/blog/${post.slug}`}
              className="no-underline hover:underline"
            >
              {post.title}
            </a>
          </h2>
          <p className="text-sm leading-relaxed mt-1">{post.excerpt}</p>
        </article>
      ))}
    </div>
  );
}
