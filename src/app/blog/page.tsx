import { getAllPosts } from "@/lib/api";
import { PostPreview } from "@/app/_components/post-preview";

export default function BlogPage() {
  const allPosts = getAllPosts();

  return (
    <main>
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-playfair">
              All Blog Posts
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Explore all my insights, stories, and tips on marketing, travel, technology, and wellness
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter (Optional) */}
          <div className="mb-12 text-center">
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-6 py-2 rounded font-medium hover:bg-amber-700 transition-colors">
                All Posts
              </button>
              <button className="px-6 py-2 rounded border-2 border-primary font-medium hover:bg-primary hover:text-white transition-colors">
                Marketing
              </button>
              <button className="px-6 py-2 rounded border-2 border-primary font-medium hover:bg-primary hover:text-white transition-colors">
                Travel
              </button>
              <button className="px-6 py-2 rounded border-2 border-primary font-medium hover:bg-primary hover:text-white transition-colors">
                Technology
              </button>
              <button className="px-6 py-2 rounded border-2 border-primary font-medium hover:bg-primary hover:text-white transition-colors">
                Wellness
              </button>
            </div>
          </div>

          {/* Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allPosts.map((post) => (
              <PostPreview
                key={post.slug}
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
                slug={post.slug}
                excerpt={post.excerpt}
              />
            ))}
          </div>

          {/* Pagination or Load More */}
          {allPosts.length > 9 && (
            <div className="text-center mt-12">
              <button className="bg-primary hover:bg-amber-700 text-white px-8 py-3 rounded font-medium transition-colors duration-200">
                Load More Posts
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
