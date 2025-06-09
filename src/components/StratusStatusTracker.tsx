import { Plane, ShoppingCart, Map } from 'lucide-react';

const StratusStatusTracker = () => {
  return (
    <div className="my-16">
      <h2 className="text-2xl font-semibold text-center mb-2">Track Your Stratus Status</h2>
      <p className="text-center mb-6 text-gray-600">Watch your benefits grow as you fly with us</p>
      
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm max-w-lg mx-auto overflow-hidden">
        <div className="p-4 bg-gradient-to-r from-indigo-50 to-violet-50 rounded-lg">
          <div className="flex justify-between mb-4">
            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent text-primary-foreground hover:bg-primary/80 bg-indigo-600">
              Status: Silver
            </div>
            <div className="text-sm font-semibold text-violet-700">75 days left</div>
          </div>

          <h4 className="font-medium mb-3">Your Elite Status Progress</h4>
          
          <div>
            <div className="flex justify-between text-xs mb-1">
              <span>Current: Silver</span>
              <span>Next: Gold</span>
            </div>
            
            <div className="relative w-full bg-gray-200 rounded-full h-2 mb-1">
              <div className="bg-gradient-to-r from-indigo-500 to-violet-500 h-2 rounded-full" style={{ width: '65%' }}></div>
              
              {/* Status markers */}
              <div className="absolute top-1/2 transform -translate-y-1/2" style={{ left: '25%' }}>
                <div className="w-3 h-3 rounded-full bg-green-500 ring-2 ring-white"></div>
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs whitespace-nowrap">Silver</div>
              </div>
              
              <div className="absolute top-1/2 transform -translate-y-1/2" style={{ left: '60%' }}>
                <div className="w-3 h-3 rounded-full bg-gray-400 ring-2 ring-white"></div>
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs whitespace-nowrap">Gold</div>
              </div>
              
              <div className="absolute top-1/2 transform -translate-y-1/2" style={{ left: '90%' }}>
                <div className="w-3 h-3 rounded-full bg-gray-400 ring-2 ring-white"></div>
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs whitespace-nowrap">Platinum</div>
              </div>
            </div>
            
            <div className="flex justify-between text-xs mb-4">
              <span>15,450 points</span>
              <span className="text-gray-500">25,000 points needed</span>
            </div>
          </div>

          <div className="bg-white rounded p-3 mb-4">
            <h5 className="text-sm font-medium mb-2">Ways to reach Gold faster:</h5>
            <div className="space-y-3">
              <div className="flex justify-between text-sm px-2 py-1 rounded-md cursor-pointer">
                <div className="flex items-center">
                  <Plane className="mr-2 text-indigo-600" size={14} />
                  <span>NYC-LDN Business Class</span>
                </div>
                <span>+2,500 pts</span>
              </div>
              
              <div className="flex justify-between text-sm px-2 py-1 rounded-md cursor-pointer">
                <div className="flex items-center">
                  <ShoppingCart className="mr-2 text-indigo-600" size={14} />
                  <span>Partner purchases</span>
                </div>
                <span>+750 pts/$250</span>
              </div>
              
              <div className="flex justify-between text-sm px-2 py-1 rounded-md cursor-pointer">
                <div className="flex items-center">
                  <Map className="mr-2 text-indigo-600" size={14} />
                  <span>Book hotel through app</span>
                </div>
                <span>+1,000 pts</span>
              </div>
            </div>
          </div>

          <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-primary-foreground h-10 px-4 py-2 w-full bg-indigo-600 hover:bg-indigo-700 group">
            <span className="mr-0 group-hover:mr-2 transition-all duration-300">Explore Status Boost Options</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-award ml-0 w-0 opacity-0 group-hover:w-5 group-hover:ml-1 group-hover:opacity-100 transition-all duration-300">
              <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
              <circle cx="12" cy="8" r="6"></circle>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default StratusStatusTracker; 