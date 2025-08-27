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
              Learn more about my journey, passions, and what drives me to share insights with you
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg mx-auto">
            <h2 className="text-3xl font-bold text-amber-900 mb-6 font-playfair">
              My Story
            </h2>
            
            <p className="text-lg text-amber-700 leading-relaxed mb-6">
              I'm passionate about sharing knowledge and experiences that can help others grow and thrive. 
              Through this blog, I aim to create a community of like-minded individuals who value learning, 
              exploration, and personal development.
            </p>
            
            <p className="text-lg text-amber-700 leading-relaxed mb-6">
              Whether it's insights from my professional journey, travel experiences, or thoughts on 
              technology and wellness, I believe in sharing authentically and creating content that 
              adds value to your life.
            </p>
            
            <h3 className="text-2xl font-bold text-amber-900 mb-4 font-playfair">
              What You'll Find Here
            </p>
            
            <ul className="list-disc list-inside text-lg text-amber-700 space-y-2 mb-6">
              <li>Professional insights and career advice</li>
              <li>Travel stories and tips</li>
              <li>Technology trends and insights</li>
              <li>Wellness and personal growth content</li>
              <li>Authentic stories from my journey</li>
            </ul>
            
            <p className="text-lg text-amber-700 leading-relaxed">
              Thank you for being part of this community. I'm excited to share this journey with you!
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
