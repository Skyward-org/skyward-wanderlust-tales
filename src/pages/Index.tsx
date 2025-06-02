
import Header from '@/components/Header';
import HeroBanner from '@/components/HeroBanner';
import FlightDetails from '@/components/FlightDetails';
import TripChecklist from '@/components/TripChecklist';
import HotelReservation from '@/components/HotelReservation';
import Sidebar from '@/components/Sidebar';
import FeaturedDestinations from '@/components/FeaturedDestinations';
import WhyChooseSection from '@/components/WhyChooseSection';
import StratusSection from '@/components/StratusSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <HeroBanner />
      
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
      <StratusSection />
      <Footer />
    </div>
  );
};

export default Index;
