export function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-6 font-playfair">
              hi!
            </h2>
            
            <div className="space-y-6 text-lg text-stone-600 leading-relaxed">
              <p>
                I'm Amanda Willhite, a homeschooling mom of 4. I have been homeschooling using the Charlotte Mason method for 10 years. My famil joined the Catholic Church in 2020.
              </p>
              
              <p>
                I find the connections between Charlotte Mason and Catholicism to be fascinating. I'm excited to share my journey and insights with you.
              </p>
            </div>
            
            <div className="mt-8 space-y-4">
              <button className="bg-stone-700 hover:bg-stone-800 text-white px-8 py-3 rounded font-medium transition-colors duration-200">
                More About Me
              </button>
            </div>
          </div>
          
          {/* Image/Visual */}
          <div className="text-center lg:text-right">
            <div className="bg-gradient-to-br from-stone-100 to-stone-200 rounded-2xl p-8 lg:p-12">
              <div className="text-6xl mb-4">👋</div>
              <h3 className="text-2xl font-bold text-stone-800 mb-4 font-playfair">
                Want to get in touch?
              </h3>
              <p className="text-stone-600 mb-6">
                The newsletter is a great way to stay up to date with my latest posts and insights.
              </p>
              
              {/* Subscribe Form */}
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h4 className="font-semibold text-stone-800 mb-4">Subscribe to my newsletter</h4>
                <div className="flex space-x-2">
                  <input
                    type="email"
                    placeholder="Add your e-mail"
                    className="flex-1 px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-stone-500 focus:border-transparent"
                  />
                  <button className="bg-stone-700 hover:bg-stone-800 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
