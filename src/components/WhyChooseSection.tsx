
const WhyChooseSection = () => {
  const features = [
    {
      icon: '🏆',
      title: 'Award-Winning',
      description: 'Recognized globally for excellence in travel services'
    },
    {
      icon: '⏰',
      title: 'Punctual Flights',
      description: 'On-time performance that you can rely on'
    },
    {
      icon: '🛡️',
      title: 'Safety First',
      description: 'Your safety is our top priority, always'
    },
    {
      icon: '📞',
      title: '24/7 Support',
      description: 'Round-the-clock assistance for all your needs'
    }
  ];

  const testimonials = [
    {
      quote: "Skyyyer consistently delivers exceptional travel experiences with unmatched service quality.",
      author: "Travel + Leisure Magazine"
    },
    {
      quote: "The gold standard in modern aviation and customer service excellence.",
      author: "Condé Nast Traveler"
    },
    {
      quote: "Skyyyer redefines what premium travel should be in the 21st century.",
      author: "National Geographic Traveler"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Skyyyer?</h2>
          <p className="text-lg text-gray-600">Experience the difference that makes us the preferred choice</p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="bg-gray-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">What Travel Experts Say</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
                <p className="font-semibold text-blue-600">— {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
