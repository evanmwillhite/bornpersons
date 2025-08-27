export default function ContactPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-playfair">
              Get In Touch
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              I'd love to hear from you! Let's connect and start a conversation
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-amber-900 mb-6 font-playfair">
                Send Me a Message
              </h2>
              
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-amber-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-amber-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-amber-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="What would you like to share?"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200"
                >
                  Send Message
                </button>
              </form>
            </div>
            
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-amber-900 mb-6 font-playfair">
                Other Ways to Connect
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-amber-800 mb-2">Email</h3>
                  <p className="text-amber-700">hello@lifestyleblogger.com</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-amber-800 mb-2">Social Media</h3>
                  <div className="space-y-2">
                    <p className="text-amber-700">Instagram: @lifestyleblogger</p>
                    <p className="text-amber-700">Twitter: @lifestyleblogger</p>
                    <p className="text-amber-700">LinkedIn: /in/lifestyleblogger</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-amber-800 mb-2">Newsletter</h3>
                  <p className="text-amber-700">
                    Subscribe to my newsletter for weekly insights and updates delivered straight to your inbox.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
