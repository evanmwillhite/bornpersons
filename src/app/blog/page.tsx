import { getAllPosts, getPostsByTag, getAllTags } from "@/lib/api";
import { PostPreview } from "@/app/_components/post-preview";
import { TagFilter } from "@/app/_components/tag-filter";

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ tag?: string }>;
}) {
  const { tag } = await searchParams;
  const allPosts = getAllPosts();
  const allTags = getAllTags();
  
  // Filter posts by tag if one is selected
  const postsToShow = tag ? getPostsByTag(tag) : allPosts;

  return (
    <main>
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-playfair">
              {tag ? `${tag} Posts` : 'All Blog Posts'}
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              {tag 
                ? `Explore my insights on ${tag.toLowerCase()}.`
                : 'Explore all my insights, stories, and tips on living books, habits, motherhood, and Catholicism.'
              }
            </p>
            {tag && (
              <div className="mt-4">
                <a 
                  href="/blog" 
                  className="inline-flex items-center text-stone-600 hover:text-stone-800 transition-colors"
                >
                  ← Back to all posts
                </a>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tag Filter */}
          <TagFilter allTags={allTags} currentTag={tag} />

          {/* Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {postsToShow.map((post) => (
              <PostPreview
                key={post.slug}
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                slug={post.slug}
                excerpt={post.excerpt}
                tags={post.tags}
              />
            ))}
          </div>

          {/* No posts message */}
          {postsToShow.length === 0 && (
            <div className="text-center py-16">
              <p className="text-lg text-stone-600">
                No posts found for the selected tag.
              </p>
            </div>
          )}

          {/* Pagination or Load More */}
          {postsToShow.length > 9 && (
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
