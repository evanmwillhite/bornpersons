import { type Author } from "@/interfaces/author";
import Link from "next/link";
import Avatar from "./avatar";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

export function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
      <div className="relative overflow-hidden">
        <CoverImage slug={slug} title={title} src={coverImage} />
        <div className="absolute top-4 left-4">
          <span className="bg-stone-700 text-white px-3 py-1 rounded text-xs font-medium">
            Blog
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="mb-3">
          <span className="text-stone-600 text-xs font-semibold uppercase tracking-wide">
            Lifestyle
          </span>
        </div>
        
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
          <Avatar name={author.name} picture={author.picture} />
          
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
