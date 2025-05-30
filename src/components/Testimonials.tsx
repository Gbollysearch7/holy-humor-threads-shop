
const testimonials = [
  {
    name: "Sarah Johnson",
    image: "👩",
    rating: 5,
    text: "I love my 'Blessed & Caffeinated' shirt! It's so comfortable and always gets compliments at church. Quality is amazing!"
  },
  {
    name: "Mike Thompson",
    image: "👨",
    rating: 5,
    text: "Perfect conversation starter! Wore my 'Faith It Till You Make It' shirt to the gym and had three people ask about it."
  },
  {
    name: "Emma Davis",
    image: "👩‍🦰",
    rating: 5,
    text: "Fast shipping, great quality, and my daughter loves her 'Holy Guacamole' shirt. Will definitely order again!"
  }
];

export const Testimonials = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-6">
            What Our Community Says
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of believers who are spreading joy and faith through our designs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-yellow-50 rounded-2xl p-8 shadow-lg border border-gray-100"
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center text-3xl mr-4">
                  {testimonial.image}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-blue-900">{testimonial.name}</h4>
                  <div className="flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 italic leading-relaxed">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
