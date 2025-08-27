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
                I'm Sophia Ellis—a marketing professional passionate about exploring the world, 
                embracing technology, enhancing personal growth, and nurturing wellness. Here, 
                I share my adventures, insights, and tips to inspire and empower you.
              </p>
              
              <p>
                Whether you're seeking travel inspiration, tech updates, self-improvement strategies, 
                or wellness advice, you're in the right place.
              </p>
              
              <p>
                Technology is another realm I'm deeply fascinated by. I enjoy diving into the latest 
                innovations and understanding how they shape our lives and industries. Through my writing, 
                I aim to demystify tech trends and provide practical insights that can enhance your 
                daily life and career.
              </p>
              
              <p>
                This blog is more than just a collection of thoughts—it's a community. Whether you're 
                here for travel tips, tech knowledge, or wellness advice, you'll find a space that 
                welcomes curiosity and encourages growth.
              </p>
            </div>
            
            <div className="mt-8 space-y-4">
              <button className="bg-stone-700 hover:bg-stone-800 text-white px-8 py-3 rounded-full font-medium transition-colors duration-200">
                More About Me
              </button>
              
              <div className="flex items-center space-x-4">
                <span className="text-stone-600">Follow me on Instagram</span>
                <a href="#" className="text-stone-700 hover:text-stone-800 font-medium">
                  @Sophia_e
                </a>
              </div>
            </div>
          </div>
          
          {/* Image/Visual */}
          <div className="text-center lg:text-right">
            <div className="bg-gradient-to-br from-stone-100 to-stone-200 rounded-2xl p-8 lg:p-12">
              <div className="text-6xl mb-4">👋</div>
              <h3 className="text-2xl font-bold text-stone-800 mb-4 font-playfair">
                Let's learn, explore, and thrive together!
              </h3>
              <p className="text-stone-600 mb-6">
                Connect with 4000+ like-minded individuals and be part of a community that values 
                growth, curiosity, and empowerment.
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
