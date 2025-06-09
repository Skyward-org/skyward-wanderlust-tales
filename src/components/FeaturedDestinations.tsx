import { ArrowRight } from 'lucide-react';

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
      case 'Best Deal': return 'bg-green-100 text-green-800 hover:bg-green-200';
      case 'Popular': return 'bg-blue-100 text-blue-800 hover:bg-blue-200';
      case 'Luxury': return 'bg-purple-100 text-purple-800 hover:bg-purple-200';
      case 'Adventure': return 'bg-orange-100 text-orange-800 hover:bg-orange-200';
      default: return 'bg-gray-100 text-gray-800 hover:bg-gray-200';
    }
  };

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Featured Destinations</h2>
          <p className="text-lg text-slate-600">Discover amazing flight deals to your next adventure</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((destination, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-200">
              <div className="relative">
                <img
                  src={destination.image}
                  alt={destination.city}
                  className="w-full h-48 object-cover"
                />
                <div className={`absolute top-3 left-3 inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent backdrop-blur-sm ${getTagColor(destination.tag)}`}>
                  {destination.tag}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-1">{destination.city}</h3>
                <p className="text-slate-600 mb-4">{destination.country}</p>
                
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <p className="text-sm text-slate-500">Starting from</p>
                    <p className="text-2xl font-bold text-indigo-600">{destination.price}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-slate-500">Best time</p>
                    <p className="font-semibold text-slate-700">{destination.months}</p>
                  </div>
                </div>

                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-primary-foreground h-11 rounded-md px-8 bg-indigo-600 hover:bg-indigo-700 shadow-md hover:shadow-lg transition-all duration-200 w-full">
                  Explore Deal
                  <ArrowRight className="ml-2" size={16} />
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
