import { Award, Clock, Shield, Headset } from 'lucide-react';

const WhyChooseSection = () => {
  const features = [
    {
      icon: Award,
      title: 'Award-Winning Service',
      description: 'Consistently rated among the top airlines for exceptional service quality.'
    },
    {
      icon: Clock,
      title: 'Punctual Flights',
      description: '93% on-time departure record, getting you to your destination when expected.'
    },
    {
      icon: Shield,
      title: 'Safety First',
      description: 'Exceeding industry safety standards with our modern fleet and rigorous protocols.'
    },
    {
      icon: Headset,
      title: '24/7 Support',
      description: 'Round-the-clock assistance through our dedicated customer support team.'
    }
  ];

  return (
    <div className="my-16 bg-gradient-to-r from-indigo-50 to-blue-50 py-16 rounded-xl">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold">Why Choose Skyward</h2>
          <p className="text-gray-600 mt-2">We go above and beyond to ensure your journey is exceptional</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="text-indigo-600 mb-4">
                <feature.icon size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-indigo-700 font-medium italic">
            "Skyward transformed my travel experience. Their attention to detail and personalized service is unmatched."
          </p>
          <p className="text-gray-600 mt-2">— Travel + Leisure Magazine</p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseSection;
