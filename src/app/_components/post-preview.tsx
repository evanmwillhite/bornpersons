import Link from "next/link";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  slug: string;
  tags?: string[];
};

export function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  slug,
  tags,
}: Props) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
      <div className="relative overflow-hidden">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
      
      <div className="p-6">
        {tags && tags.length > 0 && (
          <div className="mb-3 flex flex-wrap gap-2">
            {tags.slice(0, 3).map((tag) => (
              <span 
                key={tag}
                className="text-xs font-semibold px-2 py-1 bg-stone-100 text-stone-600 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        
        <h3 className="text-xl font-bold text-stone-800 mb-3 leading-tight group-hover:text-stone-600 transition-colors font-playfair">
          <Link href={`/posts/${slug}`}>
            {title}
          </Link>
        </h3>
        
        <div className="text-sm text-stone-500 mb-3">
          <DateFormatter dateString={date} />
        </div>
        
        <p className="text-stone-600 text-sm leading-relaxed mb-4 line-clamp-3">
          {excerpt}
        </p>
        
        <div className="flex items-center justify-between">
          {/* <Avatar name={author.name} picture={author.picture} /> */}
          
          <Link 
            href={`/posts/${slug}`}
            className="text-stone-600 hover:text-stone-700 text-sm font-medium group-hover:underline transition-colors"
          >
            Read More →
          </Link>
        </div>
      </div>
    </div>
  );
}
