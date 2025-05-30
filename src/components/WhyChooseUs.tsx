
const benefits = [
  {
    icon: "👕",
    title: "Premium Quality Materials",
    description: "100% cotton, pre-shrunk, and built to last through countless washes and life's adventures."
  },
  {
    icon: "✝️",
    title: "Faith-Inspired Designs",
    description: "Every design is carefully crafted to honor God while bringing smiles and sparking meaningful conversations."
  },
  {
    icon: "💬",
    title: "Conversation Starters",
    description: "Wear your faith proudly and watch as your shirt opens doors to share God's love with others."
  }
];

export const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-yellow-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-6">
            Why Choose HOLYHUMOR?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're more than just a t-shirt company - we're a community of believers spreading joy, one shirt at a time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center border border-gray-100"
            >
              <div className="text-6xl mb-6">{benefit.icon}</div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
