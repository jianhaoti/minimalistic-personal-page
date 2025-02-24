import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-2xl mx-auto text-center py-16">
      <h1 className="text-4xl font-bold"> Page Not Found</h1>
      <p className="text-gray-700 mb-8">
        The page you’re looking for doesn’t exist.
      </p>
      <Link href="/" className="">
        Go Back Home
      </Link>
    </div>
  );
}
