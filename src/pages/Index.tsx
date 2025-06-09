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
import Footer from '@/components/Footer';
import { useUser } from '@/hooks/useUser';
import { Umbrella, X } from 'lucide-react';

const Index = () => {
  const { user } = useUser();
  const getDestinationCity = () => {
    if (!user) return 'Chicago';
    return user.profileType === 'Guest' ? 'Tokyo' : 'Chicago';
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <HeroBanner />
      
      <div className="container mx-auto px-4 py-8">
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
        
        {/* Main content section */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              {/* Main content - 2 columns */}
              <div className="lg:col-span-2">
                <FlightDetails />
                <TripChecklist />
                <HotelReservation />
              </div>
              
              {/* Sidebar - 1 column */}
              <div className="lg:col-span-1">
                <Sidebar />
              </div>
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
  );
};

export default Index;
