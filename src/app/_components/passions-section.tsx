import Link from "next/link";

export function PassionsSection() {
  const passions = [
    {
      title: "Living Books",
      description: "Learn to read, write, and think with living books.",
      icon: "📖",
      color: "from-stone-500 to-stone-600"
    },
    {
      title: "Habits",
      description: "Uncover hidden gems and habits tips.",
      icon: "🏋️",
      color: "from-stone-400 to-stone-500"
    },
    {
      title: "Motherhood",
      description: "Motherhood tips and insights.",
      icon: "👶",
      color: "from-stone-600 to-stone-700"
    },
    {
      title: "Catholicism",
      description: "Catholicism tips and insights.",
      icon: "📚",
      color: "from-stone-300 to-stone-400"
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4 font-playfair">
            Explore Subjects
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Discover the areas that inspire.
          </p>
        </div>

        {/* Passions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {passions.map((passion, index) => (
            <div key={index} className="text-center group">
              <div className={`w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br ${passion.color} flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300`}>
                {passion.icon}
              </div>
              
              <h3 className="text-xl font-bold text-stone-800 mb-3 font-playfair">
                {passion.title}
              </h3>
              
              <p className="text-stone-600 text-sm leading-relaxed">
                {passion.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
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
