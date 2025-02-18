export default function Blog() {
  const posts = [
    {
      slug: "gauss-equation",
      title: "Gauss Equation",
      date: "10 February 2025",
      tags: ["geometry", "linear algebra", "Riemannian geometry"],
      excerpt:
        "We take two traces of the Gauss equation to get a scalar relationship between intrinsic and extrinsic curvature quantities.",
    },
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
        "The graph Laplacian is central in spectral graph theory, but its link to the standard Laplacian is often unclear. We show both represent the difference between a function and its local average.",
    },
  ];

  return (
    <div>
      {posts.map((post, index) => (
        <article key={index} className="mb-12">
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
