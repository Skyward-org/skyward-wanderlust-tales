import Header from '@/components/Header';
import HeroBanner from '@/components/HeroBanner';
import FlightDetails from '@/components/FlightDetails';
import TripChecklist from '@/components/TripChecklist';
import HotelReservation from '@/components/HotelReservation';
import Sidebar from '@/components/Sidebar';
import FeaturedDestinations from '@/components/FeaturedDestinations';
import WhyChooseSection from '@/components/WhyChooseSection';
import StratusStatusTracker from '@/components/StratusStatusTracker';
import StratusSection from '@/components/StratusSection';
import FeaturedOffers from '@/components/FeaturedOffers';
import HeroOffer from '@/components/HeroOffer';
import Footer from '@/components/Footer';
import { useUser } from '@/hooks/useUser';
import { Umbrella, X, CircleAlert } from 'lucide-react';
import { FeaturedOffersProvider, HeroOffersProvider } from '@/contexts/FeaturedOffersContext';

const Index = () => {
  const { user } = useUser();
  const getDestinationCity = () => {
    if (!user) return 'Chicago';
    return user.profileType === 'Guest' ? 'Tokyo' : 'Chicago';
  };

  const renderMainContent = () => {
    switch (user?.profileType) {
      case 'Business':
        return (
          <div className="lg:col-span-2">
            <HeroOffer />
            <FeaturedOffers />
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900">Hello Business</h2>
              <p className="text-gray-600 mt-2">Welcome to your business travel dashboard.</p>
            </div>
          </div>
        );
      case 'Guest':
        return (
          <div className="lg:col-span-3">
            <HeroOffer />
            <div className="mb-12">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Welcome to Skyward Airlines</h2>
                <p className="mb-4 text-gray-600">Join our Stratus rewards program for personalized offers, exclusive discounts, and premium travel benefits.</p>
              </div>
              <div className="mb-6">
                <div className="rounded-lg border bg-card text-card-foreground shadow-sm bg-gradient-to-r from-blue-50 to-sky-50 border-blue-100 overflow-hidden">
                  <div className="flex flex-col space-y-1.5 p-6 pb-2">
                    <div className="flex items-center gap-2">
                      <CircleAlert className="text-blue-600 h-[18px] w-[18px]" />
                      <h3 className="font-semibold tracking-tight text-lg">Personalized Travel Alerts</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">Get tailored alerts based on your status level and travel preferences</p>
                  </div>
                  <div className="p-6 pt-0">
                    <div className="p-3 bg-white/80 rounded-md shadow-sm mb-4 border border-blue-50">
                      <p className="text-sm text-gray-700">Sign up for Stratus rewards to receive personalized travel alerts like:</p>
                      <ul className="mt-2 space-y-1.5 text-sm">
                        <li className="flex items-center">
                          <span className="w-2 h-2 rounded-full bg-blue-500 mr-2"></span>
                          Weather notifications for your destinations
                        </li>
                        <li className="flex items-center">
                          <span className="w-2 h-2 rounded-full bg-blue-500 mr-2"></span>
                          Flight delays and gate changes
                        </li>
                        <li className="flex items-center">
                          <span className="w-2 h-2 rounded-full bg-blue-500 mr-2"></span>
                          Price drops for destinations in your wishlist
                        </li>
                      </ul>
                    </div>
                    <div className="flex justify-end">
                      <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border bg-background hover:text-accent-foreground h-10 px-4 py-2 text-blue-600 border-blue-200 hover:bg-blue-50">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="rounded-lg border bg-card text-card-foreground shadow-sm mb-6">
                  <div className="flex flex-col space-y-1.5 p-6 pb-2">
                    <h3 className="text-2xl font-semibold leading-none tracking-tight">Stratus Rewards Program</h3>
                    <p className="text-sm text-muted-foreground">Our three-tiered membership program</p>
                  </div>
                  <div className="p-6 pt-2">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      <div className="p-3 border rounded-md bg-gradient-to-r from-slate-50 to-blue-50">
                        <div className="flex items-center mb-1">
                          <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-primary/80 bg-blue-100 text-blue-800 mr-2">Lift</div>
                          <h3 className="font-medium">Entry Level</h3>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">Start your journey with instant benefits and exclusive member rates.</p>
                        <div className="text-xs text-gray-500">0 – 25,000 points per year</div>
                      </div>
                      <div className="p-3 border rounded-md bg-gradient-to-r from-slate-50 to-indigo-50">
                        <div className="flex items-center mb-1">
                          <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-primary/80 bg-indigo-100 text-indigo-800 mr-2">Glide</div>
                          <h3 className="font-medium">Mid-Tier Status</h3>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">Enjoy priority service, extra baggage allowance, and lounge access discounts.</p>
                        <div className="text-xs text-gray-500">25,000 – 50,000 points per year</div>
                      </div>
                      <div className="p-3 border rounded-md bg-gradient-to-r from-indigo-50 to-purple-50">
                        <div className="flex items-center mb-1">
                          <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-primary/80 bg-purple-100 text-purple-800 mr-2">Soar</div>
                          <h3 className="font-medium">Elite Status</h3>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">Experience premium travel with dedicated service, complimentary upgrades, and global lounge access.</p>
                        <div className="text-xs text-gray-500">50,000+ points per year</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center p-6 pt-0">
                    <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground h-10 px-4 py-2 w-full bg-indigo-600 hover:bg-indigo-700">
                      Join Stratus Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return (
          <div className="lg:col-span-2">
            <FeaturedOffers />
            <FlightDetails />
            <TripChecklist />
            <HotelReservation />
          </div>
        );
    }
  };

  return (
    <FeaturedOffersProvider>
      <HeroOffersProvider>
        <div className="min-h-screen bg-slate-50">
          <Header />
          <HeroBanner />
          
          <div className="container mx-auto px-4 py-8">
            {user?.profileType !== 'Guest' && (
              <>
                {/* Trip Title Section */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 mb-8">
                  <div className="flex justify-between items-center">
                    <div>
                      <h2 className="text-2xl font-bold">Your Trip to {getDestinationCity()}</h2>
                      <p className="text-gray-600">Departing in 3 days</p>
                    </div>
                    <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-primary/80 bg-indigo-100 text-indigo-800">
                      {user?.profileType || 'Guest'} Member
                    </div>
                  </div>
                </div>

                {/* Weather Advisory */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-md flex items-start">
                    <div className="bg-amber-100 rounded-full p-2 mr-3">
                      <Umbrella className="h-5 w-5 text-amber-700" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-medium text-amber-900">Weather Advisory: {getDestinationCity()}</h3>
                      <p className="text-sm text-amber-800 mt-1">Rain forecasted for your arrival day. Pack accordingly and check your flight status regularly.</p>
                    </div>
                    <button className="text-amber-700 hover:text-amber-900">
                      <X className="h-[18px] w-[18px]" />
                    </button>
                  </div>
                </div>
              </>
            )}
            
            {/* Main content section */}
            <section className="py-12">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                  {renderMainContent()}
                  
                  {/* Sidebar - 1 column */}
                  {user?.profileType !== 'Guest' && (
                    <div className="lg:col-span-1">
                      <Sidebar />
                    </div>
                  )}
                </div>
              </div>
            </section>

            <FeaturedDestinations />
            <WhyChooseSection />
            <StratusStatusTracker />
            <StratusSection />
          </div>

          <Footer />
        </div>
      </HeroOffersProvider>
    </FeaturedOffersProvider>
  );
};

export default Index;
