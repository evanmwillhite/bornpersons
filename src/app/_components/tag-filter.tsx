'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

interface TagFilterProps {
  allTags: string[];
  currentTag?: string;
}

export function TagFilter({ allTags, currentTag }: TagFilterProps) {
  const searchParams = useSearchParams();

  return (
    <div className="mb-12 text-center">
      <div className="flex flex-wrap justify-center gap-4">
        {/* All Posts button */}
        <Link
          href="/blog"
          className={`px-8 py-3 rounded font-medium transition-colors duration-200 ${
            !currentTag
              ? 'bg-stone-900 text-white'
              : 'bg-stone-700 hover:bg-stone-900 text-white'
          }`}
        >
          All Posts
        </Link>
        
        {/* Tag buttons */}
        {allTags.map((tag) => (
          <Link
            key={tag}
            href={`/blog?tag=${encodeURIComponent(tag)}`}
            className={`px-8 py-3 rounded font-medium transition-colors duration-200 ${
              currentTag === tag
                ? 'bg-stone-900 text-white'
                : 'bg-stone-700 hover:bg-stone-900 text-white'
            }`}
          >
            {tag}
          </Link>
        ))}
      </div>
    </div>
  );
}
