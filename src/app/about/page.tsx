export default function AboutPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-playfair">
              About Me
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            I'm Amanda Willhite, a homeschooling mom of 4. I have been homeschooling using the Charlotte Mason method for 10 years. My famil joined the Catholic Church in 2020.
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg mx-auto">
            <h2 className="text-3xl font-bold text-stone-800 mb-6 font-playfair">
              My Story
            </h2>
            
            <p className="text-lg text-stone-800 leading-relaxed mb-6">
            I find the connections between Charlotte Mason and Catholicism to be fascinating. I'm excited to share my journey and insights with you.
            </p>
            
            <p className="text-lg text-stone-800 leading-relaxed">
            I'm excited to share this journey with you!
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
