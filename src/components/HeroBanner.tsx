
import { useUser } from '@/hooks/useUser';
import { ProfileType } from '@/services/userService';

const HeroBanner = () => {
  const { user } = useUser();

  const getHeroContent = (profileType: ProfileType) => {
    switch (profileType) {
      case 'Glide':
        return {
          destination: 'Barcelona',
          title: 'Discover Barcelona\'s Architectural Mastery',
          subtitle: 'Experience the sophisticated blend of Gothic quarters and modernist marvels. Your Glide membership provides exclusive access to premium accommodations and curated cultural experiences.',
          image: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&w=1920&q=80',
          gradient: 'from-slate-900/50 to-slate-700/50'
        };
      case 'Business':
        return {
          destination: 'Chicago',
          title: 'Executive Travel to Chicago',
          subtitle: 'Elevate your business journey with first-class amenities and priority services. Experience the pinnacle of corporate travel with seamless connections and premium lounges.',
          image: 'https://images.unsplash.com/photo-1494522358652-f30e61a60313?auto=format&fit=crop&w=1920&q=80',
          gradient: 'from-amber-900/50 to-amber-700/50'
        };
      case 'Guest':
        return {
          destination: 'Tokyo',
          title: 'Tokyo: Where Tradition Meets Innovation',
          subtitle: 'Embark on a curated journey through Japan\'s capital. Discover ancient temples alongside cutting-edge technology in this remarkable fusion of past and future.',
          image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1920&q=80',
          gradient: 'from-gray-900/50 to-gray-700/50'
        };
      default:
        return {
          destination: 'Tokyo',
          title: 'Tokyo: Where Tradition Meets Innovation',
          subtitle: 'Embark on a curated journey through Japan\'s capital.',
          image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1920&q=80',
          gradient: 'from-gray-900/50 to-gray-700/50'
        };
    }
  };

  const getProfileBadgeColor = (profileType: ProfileType) => {
    switch (profileType) {
      case 'Glide': return 'bg-slate-700';
      case 'Business': return 'bg-amber-700';
      case 'Guest': return 'bg-gray-700';
      default: return 'bg-gray-700';
    }
  };

  if (!user) return null;

  const heroContent = getHeroContent(user.profileType);

  return (
    <section className="relative h-[500px] overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroContent.image})` }}
      />
      
      {/* Reduced gradient overlay */}
      <div className={`absolute inset-0 bg-gradient-to-r ${heroContent.gradient}`} />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            {/* Badges */}
            <div className="flex space-x-4 mb-6">
              <span className={`px-4 py-2 rounded-full text-sm font-semibold text-white ${getProfileBadgeColor(user.profileType)} shadow-lg`}>
                {user.profileType}
              </span>
              <span className="px-4 py-2 rounded-full text-sm font-semibold bg-white/20 text-white backdrop-blur-sm border border-white/30">
                Featured Destination
              </span>
            </div>

            {/* Title and subtitle */}
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              {heroContent.title}
            </h1>
            <p className="text-xl text-white/90 mb-10 leading-relaxed max-w-2xl">
              {heroContent.subtitle}
            </p>

            {/* Enhanced CTA Button */}
            <button className="group relative bg-white text-slate-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-slate-50 transition-all duration-300 shadow-2xl hover:shadow-xl transform hover:-translate-y-0.5 border border-white/20">
              <span className="relative z-10">View Trip Details</span>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
