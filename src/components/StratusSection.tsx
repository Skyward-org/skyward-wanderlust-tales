
const StratusSection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="text-white">
            <h2 className="text-4xl font-bold mb-6">Join Stratus Today</h2>
            <p className="text-xl text-blue-100 mb-8">
              Elevate your travel experience with exclusive benefits and rewards that take you further.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span className="text-lg">Exclusive Member Rates</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span className="text-lg">Points That Take You Further</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span className="text-lg">Premium Travel Benefits</span>
              </div>
            </div>

            <button className="bg-amber-500 hover:bg-amber-600 text-black font-bold py-4 px-8 rounded-lg text-lg transition-colors">
              Join Stratus Now
            </button>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-video rounded-lg overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80"
                alt="Sunrise view from airplane window"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StratusSection;
