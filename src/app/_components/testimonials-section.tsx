export function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Sophia's blog is a treasure trove of inspiration and insight. Her travel stories transport you to new worlds, while her tech tips and wellness advice have genuinely improved my daily routine. I always look forward to her latest posts. It's like getting a dose of motivation straight to my inbox!",
      author: "Emily Thompson",
      role: "Marketing Professional"
    }
  ];

  return (
    <section className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4 font-playfair">
            What Readers Say
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Join thousands of readers who find inspiration and value in my content
          </p>
        </div>

        {/* Testimonials */}
        <div className="max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-8 md:p-12 text-center">
              <div className="mb-6">
                <svg className="w-12 h-12 text-stone-600 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              
              <blockquote className="text-lg md:text-xl text-stone-600 leading-relaxed mb-8 italic">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="text-center">
                <div className="font-semibold text-stone-800 text-lg font-playfair">
                  {testimonial.author}
                </div>
                <div className="text-stone-500 text-sm">
                  {testimonial.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
