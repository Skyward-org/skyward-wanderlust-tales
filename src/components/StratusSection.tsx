
const StratusSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text content */}
          <div className="text-white">
            <h2 className="text-5xl font-bold mb-8 leading-tight">Join Stratus Today</h2>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed">
              Elevate your travel experience with exclusive benefits and rewards that redefine luxury travel.
            </p>

            <div className="space-y-6 mb-12">
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <span className="text-xl font-medium">Exclusive Member Rates</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <span className="text-xl font-medium">Points That Take You Further</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <span className="text-xl font-medium">Premium Travel Benefits</span>
              </div>
            </div>

            <button className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-5 px-10 rounded-lg text-xl transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
              Join Stratus Now
            </button>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-video rounded-xl overflow-hidden shadow-2xl border border-slate-700">
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
