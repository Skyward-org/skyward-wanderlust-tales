
const FeaturedDestinations = () => {
  const destinations = [
    {
      city: 'Paris',
      country: 'France',
      price: '$599',
      months: 'Apr - Jun',
      tag: 'Best Deal',
      image: 'https://images.unsplash.com/photo-1431274172761-fca41d930114?auto=format&fit=crop&w=400&q=80'
    },
    {
      city: 'London',
      country: 'United Kingdom',
      price: '$729',
      months: 'May - Jul',
      tag: 'Popular',
      image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=400&q=80'
    },
    {
      city: 'Dubai',
      country: 'UAE',
      price: '$849',
      months: 'Mar - May',
      tag: 'Luxury',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=400&q=80'
    },
    {
      city: 'Sydney',
      country: 'Australia',
      price: '$1,299',
      months: 'Sep - Nov',
      tag: 'Adventure',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=400&q=80'
    }
  ];

  const getTagColor = (tag: string) => {
    switch (tag) {
      case 'Best Deal': return 'bg-green-500';
      case 'Popular': return 'bg-blue-500';
      case 'Luxury': return 'bg-purple-500';
      case 'Adventure': return 'bg-orange-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Destinations</h2>
          <p className="text-lg text-gray-600">Discover amazing flight deals to your next adventure</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((destination, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative">
                <img
                  src={destination.image}
                  alt={destination.city}
                  className="w-full h-48 object-cover"
                />
                <div className={`absolute top-3 left-3 px-2 py-1 rounded-full text-xs font-medium text-white ${getTagColor(destination.tag)}`}>
                  {destination.tag}
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{destination.city}</h3>
                <p className="text-gray-600 mb-3">{destination.country}</p>
                
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <p className="text-sm text-gray-500">Starting from</p>
                    <p className="text-2xl font-bold text-blue-600">{destination.price}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">Best time</p>
                    <p className="font-semibold">{destination.months}</p>
                  </div>
                </div>

                <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Explore Deal
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedDestinations;
