import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const normalizeTag = (tag: string): string => {
  return tag
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};

export const getUniqueTags = (posts: { tags?: string[] }[]): string[] => {
  const tagMap = new Map<string, string>();

  posts.forEach((post) => {
    post.tags?.forEach((tag) => {
      const lower = tag.toLowerCase();
      if (!tagMap.has(lower)) {
        tagMap.set(lower, normalizeTag(tag));
      }
    });
  });

  return Array.from(tagMap.values()).sort();
};
