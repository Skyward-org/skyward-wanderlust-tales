
import { useUser } from '@/hooks/useUser';
import { ProfileType } from '@/services/userService';

const HeroBanner = () => {
  const { user } = useUser();

  const getHeroContent = (profileType: ProfileType) => {
    switch (profileType) {
      case 'Glide':
        return {
          destination: 'Barcelona',
          title: 'Discover the Magic of Barcelona',
          subtitle: 'Experience the perfect blend of culture, architecture, and Mediterranean charm. Your Glide membership unlocks exclusive deals to this vibrant Spanish city.',
          image: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=1920&q=80',
          gradient: 'from-blue-600/80 to-purple-600/80'
        };
      case 'Business':
        return {
          destination: 'Chicago',
          title: 'Business Class to the Windy City',
          subtitle: 'Elevate your travel experience with premium business class service to Chicago. Perfect for the discerning business traveler seeking comfort and efficiency.',
          image: 'https://images.unsplash.com/photo-1477414348463-c0eb7f1359b6?auto=format&fit=crop&w=1920&q=80',
          gradient: 'from-amber-600/80 to-orange-600/80'
        };
      case 'Guest':
        return {
          destination: 'Tokyo',
          title: 'Welcome to Tokyo Adventure',
          subtitle: 'Immerse yourself in the future while honoring the past. Tokyo offers an incredible journey for first-time visitors with unforgettable experiences.',
          image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1920&q=80',
          gradient: 'from-gray-600/80 to-slate-600/80'
        };
      default:
        return {
          destination: 'Tokyo',
          title: 'Welcome to Tokyo Adventure',
          subtitle: 'Immerse yourself in the future while honoring the past.',
          image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1920&q=80',
          gradient: 'from-gray-600/80 to-slate-600/80'
        };
    }
  };

  const getProfileBadgeColor = (profileType: ProfileType) => {
    switch (profileType) {
      case 'Glide': return 'bg-blue-500';
      case 'Business': return 'bg-amber-500';
      case 'Guest': return 'bg-gray-500';
      default: return 'bg-gray-500';
    }
  };

  if (!user) return null;

  const heroContent = getHeroContent(user.profileType);

  return (
    <section className="relative h-96 overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroContent.image})` }}
      />
      
      {/* Gradient overlay */}
      <div className={`absolute inset-0 bg-gradient-to-r ${heroContent.gradient}`} />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            {/* Badges */}
            <div className="flex space-x-3 mb-4">
              <span className={`px-3 py-1 rounded-full text-sm font-medium text-white ${getProfileBadgeColor(user.profileType)}`}>
                {user.profileType}
              </span>
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-white/20 text-white backdrop-blur-sm">
                Featured Destination
              </span>
            </div>

            {/* Title and subtitle */}
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {heroContent.title}
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              {heroContent.subtitle}
            </p>

            {/* CTA Button */}
            <button className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg">
              View Trip Details
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
