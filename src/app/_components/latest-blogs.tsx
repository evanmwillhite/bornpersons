import { Post } from "@/interfaces/post";
import { PostPreview } from "./post-preview";
import Link from "next/link";

type Props = {
  posts: Post[];
};

export function LatestBlogs({ posts }: Props) {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4 font-playfair">
            Latest Blogs
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Explore more insights, tips, and stories from my journey
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => {
            return (
            <PostPreview
              key={post.slug}
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              slug={post.slug}
              excerpt={post.excerpt}
              tags={post.tags}
            />
          )})}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link href="/blog">
            <button className="bg-stone-800 hover:bg-stone-900 text-white px-8 py-3 rounded font-medium transition-colors duration-200">
              View All Blogs
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
