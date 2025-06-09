import { Award, TrendingUp, Plane, ArrowRight } from 'lucide-react';

const StratusSection = () => {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-xl overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 md:p-10 lg:p-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Join Stratus Today</h2>
              <p className="text-blue-100 mb-6">
                Elevate your travel experience with our premium loyalty program. Enjoy exclusive benefits, priority service, and personalized offers.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="bg-white/20 p-2 rounded-full mr-3 mt-1">
                    <Award className="text-white" size={16} />
                  </div>
                  <div>
                    <p className="text-white font-medium">Exclusive Member Rates</p>
                    <p className="text-blue-100 text-sm">Save up to 15% on flights and hotel bookings</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-white/20 p-2 rounded-full mr-3 mt-1">
                    <TrendingUp className="text-white" size={16} />
                  </div>
                  <div>
                    <p className="text-white font-medium">Points That Take You Further</p>
                    <p className="text-blue-100 text-sm">Earn and redeem on flights, upgrades, and experiences</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-white/20 p-2 rounded-full mr-3 mt-1">
                    <Plane className="text-white" size={16} />
                  </div>
                  <div>
                    <p className="text-white font-medium">Premium Travel Benefits</p>
                    <p className="text-blue-100 text-sm">From priority boarding to complimentary upgrades</p>
                  </div>
                </div>
              </div>

              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-11 rounded-md px-8 bg-white text-indigo-700 hover:bg-blue-50">
                Join Stratus Now
                <ArrowRight className="ml-2" size={16} />
              </button>
            </div>

            <div className="relative hidden lg:block">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: 'url("https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&auto=format&fit=crop")',
                  backgroundPosition: 'center center'
                }}
              />
              <div className="absolute inset-0 bg-indigo-900/30" />

              {/* Lift Tier Card */}
              <div className="absolute top-1/4 left-1/4 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-blue-700 font-semibold">L</span>
                  </div>
                  <div>
                    <div className="font-semibold">Lift Tier</div>
                    <div className="text-xs text-gray-600">Start your journey</div>
                  </div>
                </div>
              </div>

              {/* Glide Tier Card */}
              <div className="absolute top-1/2 left-2/3 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
                    <span className="text-indigo-700 font-semibold">G</span>
                  </div>
                  <div>
                    <div className="font-semibold">Glide Tier</div>
                    <div className="text-xs text-gray-600">Elevated benefits</div>
                  </div>
                </div>
              </div>

              {/* Soar Tier Card */}
              <div className="absolute bottom-1/4 left-1/3 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                    <span className="text-purple-700 font-semibold">S</span>
                  </div>
                  <div>
                    <div className="font-semibold">Soar Tier</div>
                    <div className="text-xs text-gray-600">Ultimate luxury</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StratusSection;
