// components/TagFilter.tsx
"use client";
import { useRouter, useSearchParams } from "next/navigation";

interface TagFilterProps {
  tags: string[];
}

export default function TagFilter({ tags }: TagFilterProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeTag = searchParams.get("tag");

  const handleTagClick = (tag: string | null) => {
    if (tag) {
      router.push(`/blog?tag=${tag}`);
    } else {
      router.push("/blog");
    }
  };

  return (
    <div className="border-b border-foreground-300 pb-4 mb-8">
      <button
        onClick={() => handleTagClick(null)}
        className={`text-foreground-700 hover:text-foreground-500 mr-4 ${
          !activeTag ? "underline" : "no-underline"
        }`}
      >
        All
      </button>
      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => handleTagClick(tag)}
          className={`text-foreground-700 hover:text-foreground-500 mr-4 ${
            activeTag === tag ? "underline" : "no-underline"
          }`}
        >
          {tag}
        </button>
      ))}
    </div>
  );
}
