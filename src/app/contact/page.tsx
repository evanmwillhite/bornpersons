import Container from "@/app/_components/container";

export default function ContactPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="py-40">
        <Container>
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-playfair leading-tight text-stone-800">
              Get In Touch
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-stone-600">
              I'd love to hear from you! Let's connect and start a conversation about Charlotte Mason, Catholicism, and the beautiful journey of homeschooling.
            </p>
          </div>
        </Container>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-white">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-8 font-playfair">
                  Send Me a Message
                </h2>
                
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-stone-500 focus:border-transparent bg-white"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-stone-500 focus:border-transparent bg-white"
                      placeholder="your@email.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-stone-500 focus:border-transparent bg-white"
                      placeholder="What would you like to share?"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="bg-stone-700 hover:bg-stone-800 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200"
                  >
                    Send Message
                  </button>
                </form>
              </div>
              
              {/* Contact Info */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-8 font-playfair">
                  Other Ways to Connect
                </h2>
                
                <div className="space-y-8">
                  <div className="bg-gradient-to-br from-stone-100 to-stone-200 rounded-2xl p-8">
                    <h3 className="text-xl font-semibold text-stone-800 mb-3 font-playfair">Email</h3>
                    <p className="text-stone-600">hello@bornpersons.com</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-stone-100 to-stone-200 rounded-2xl p-8">
                    <h3 className="text-xl font-semibold text-stone-800 mb-3 font-playfair">Newsletter</h3>
                    <p className="text-stone-600 mb-4">
                      Subscribe to my newsletter for weekly insights on Charlotte Mason homeschooling and Catholic family life.
                    </p>
                    
                    {/* Newsletter Subscribe Form */}
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
                  
                  <div className="bg-gradient-to-br from-stone-100 to-stone-200 rounded-2xl p-8">
                    <h3 className="text-xl font-semibold text-stone-800 mb-3 font-playfair">Let's Connect</h3>
                    <p className="text-stone-600">
                      I'm always excited to meet fellow homeschooling families and those interested in Charlotte Mason's educational philosophy.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
