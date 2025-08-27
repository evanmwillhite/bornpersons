import Avatar from "@/app/_components/avatar";
import CoverImage from "@/app/_components/cover-image";
import { type Author } from "@/interfaces/author";
import Link from "next/link";
import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

export function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4 font-playfair">
            My Featured Blog
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Discover insights and inspiration from my latest adventures and experiences
          </p>
        </div>

        {/* Featured Post */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <div className="relative">
              <CoverImage title={title} src={coverImage} slug={slug} />
              <div className="absolute top-4 left-4">
                <span className="bg-stone-700 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Featured
                </span>
              </div>
            </div>
            
            <div className="p-8">
              <div className="mb-4">
                <span className="text-stone-600 text-sm font-semibold uppercase tracking-wide">
                  Lifestyle
                </span>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-stone-800 mb-4 leading-tight font-playfair">
                <Link href={`/posts/${slug}`} className="hover:text-stone-600 transition-colors">
                  {title}
                </Link>
              </h3>
              
              <p className="text-stone-600 text-lg leading-relaxed mb-6">
                {excerpt}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Avatar name={author.name} picture={author.picture} />
                  <div>
                    <div className="text-sm text-stone-500">
                      <DateFormatter dateString={date} />
                    </div>
                  </div>
                </div>
                
                <Link 
                  href={`/posts/${slug}`}
                  className="inline-flex items-center px-6 py-3 bg-stone-700 hover:bg-stone-800 text-white font-medium rounded-full transition-colors duration-200"
                >
                  Read More
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
