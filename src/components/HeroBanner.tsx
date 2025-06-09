import { useUser } from '@/hooks/useUser';
import { ProfileType } from '@/services/userService';
import { Plane, Calendar, Star } from 'lucide-react';

const HeroBanner = () => {
  const { user } = useUser();

  const getHeroContent = (profileType: ProfileType) => {
    switch (profileType) {
      case 'Glide':
        return {
          destination: 'Chicago',
          title: 'Chicago awaits you',
          subtitle: 'Enhance your upcoming journey with premium add-ons just for Glide members.',
          image: 'https://images.unsplash.com/photo-1494522358652-f30e61a60313?q=80&auto=format&fit=crop',
          tierBadge: 'GLIDE TIER PERKS'
        };
      case 'Business':
        return {
          destination: 'New York',
          title: 'New York awaits you',
          subtitle: 'Experience executive travel with first-class amenities and priority services.',
          image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&auto=format&fit=crop',
          tierBadge: 'BUSINESS PERKS'
        };
      case 'Guest':
        return {
          destination: 'Tokyo',
          title: 'Elevate Your Journey',
          subtitle: 'Experience premium travel with personalized service and unparalleled comfort.',
          image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&auto=format&fit=crop',
          tierBadge: 'SKYWARD AIRLINES'
        };
      default:
        return {
          destination: 'Tokyo',
          title: 'Elevate Your Journey',
          subtitle: 'Experience premium travel with personalized service and unparalleled comfort.',
          image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&auto=format&fit=crop',
          tierBadge: 'SKYWARD AIRLINES'
        };
    }
  };

  if (!user) return null;

  const heroContent = getHeroContent(user.profileType);

  return (
    <div className="relative h-[45vh] min-h-[400px] max-h-[550px] overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroContent.image})` }}
        />
        
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 to-slate-800/40" />
        
        {/* Top glow effect */}
        <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-64 h-20 bg-gradient-to-r from-blue-500/10 via-sky-400/5 to-blue-500/10 blur-xl" />
        
        {/* Bottom fade */}
        <div className="absolute bottom-10 w-full h-32 bg-gradient-to-t from-slate-900/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-xl text-white">
            <div className="flex flex-col">
              {/* Badges */}
              <div className="flex flex-wrap gap-2 mb-4">
                {user.profileType === 'Guest' ? (
                  <>
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/15 backdrop-blur-sm border border-white/20 rounded-full">
                      <span className="text-white/90">
                        <Plane size={18} />
                      </span>
                      <span className="text-xs font-medium text-white/90">Skyward Airlines</span>
                    </div>
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-indigo-600/80 backdrop-blur-sm border border-indigo-500/30 rounded-full">
                      <span className="text-white/90">
                        <Star size={16} />
                      </span>
                      <span className="text-xs font-medium text-white/90">Featured</span>
                    </div>
                    <span className="inline-flex items-center px-3 py-1.5 bg-indigo-600/90 text-white text-xs font-medium rounded-full">
                      {heroContent.tierBadge}
                    </span>
                  </>
                ) : (
                  <>
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/15 backdrop-blur-sm border border-white/20 rounded-full">
                      <span className="text-white/90">
                        <Plane size={18} />
                      </span>
                      <span className="text-xs font-medium text-white/90">Upcoming Trip</span>
                    </div>
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-indigo-600/80 backdrop-blur-sm border border-indigo-500/30 rounded-full">
                      <span className="text-white/90">
                        <Calendar size={16} />
                      </span>
                      <span className="text-xs font-medium text-white/90">Departing Soon</span>
                    </div>
                    <span className="inline-flex items-center px-3 py-1.5 bg-indigo-600/90 text-white text-xs font-medium rounded-full">
                      {heroContent.tierBadge}
                    </span>
                  </>
                )}
              </div>

              {/* Title and subtitle */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
                {heroContent.title}
              </h1>
              <p className="text-base md:text-lg mb-6 opacity-90">
                {heroContent.subtitle}
              </p>

              {/* CTA Button */}
              <div>
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-primary-foreground h-11 rounded-md px-8 bg-indigo-600 hover:bg-indigo-700 shadow-md hover:shadow-lg transition-all duration-200">
                  {user.profileType === 'Guest' ? 'Book a Flight' : 'View Trip Details'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
