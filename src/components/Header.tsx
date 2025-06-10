import { useState } from 'react';
import { useUser } from '@/hooks/useUser';
import { ProfileType } from '@/services/userService';
import { analyticsService } from '@/services/analyticsService';
import { Plane, Menu, Briefcase, User, Sparkles } from 'lucide-react';

const Header = () => {
  const { user, switchProfile } = useUser();
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  const handleProfileSwitch = (profileType: ProfileType) => {
    switchProfile(profileType);
    setIsProfileMenuOpen(false);
    analyticsService.sendProfileSwitchEvent(profileType);
  };

  const getProfileIcon = (profileType: ProfileType) => {
    switch (profileType) {
      case 'Glide':
        return <Sparkles className="h-4 w-4" />;
      case 'Business':
        return <Briefcase className="h-4 w-4" />;
      case 'Guest':
        return <User className="h-4 w-4" />;
      default:
        return <User className="h-4 w-4" />;
    }
  };

  const getProfileColor = (profileType: ProfileType) => {
    switch (profileType) {
      case 'Glide':
        return 'bg-indigo-500/20 text-indigo-600 border-indigo-500/30';
      case 'Business':
        return 'bg-amber-500/20 text-amber-600 border-amber-500/30';
      case 'Guest':
        return 'bg-gray-500/20 text-gray-600 border-gray-500/30';
      default:
        return 'bg-gray-500/20 text-gray-600 border-gray-500/30';
    }
  };

  return (
    <header className="fixed w-full z-50 transition-all duration-300 bg-transparent py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo and site name */}
        <div className="flex items-center">
          <Plane className="text-white mr-2" size={28} />
          <span className="font-bold text-2xl text-white">Skyward</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a className="font-medium transition-colors text-white hover:text-indigo-100" href="/">Home</a>
          <a className="font-medium transition-colors text-white hover:text-indigo-100" href="/">Explore</a>
          <a className="font-medium transition-colors text-white hover:text-indigo-100" href="/">Rewards</a>
          <a className="font-medium transition-colors text-white hover:text-indigo-100" href="/">GPS</a>
          
          {/* User display */}
          {user && (
            <div className="flex items-center">
              <div className="relative">
                <button
                  onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                  className="px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full transition-all hover:bg-white/20 border border-white/20"
                >
                  <div className="flex items-center gap-2">
                    {getProfileIcon(user.profileType)}
                    <span className="font-medium">Hello, {user.username}</span>
                    <span className={`ml-2 text-xs px-2 py-1 rounded-full ${getProfileColor(user.profileType)} backdrop-blur-sm`}>
                      {user.profileType}
                    </span>
                  </div>
                </button>

                {/* Profile dropdown */}
                {isProfileMenuOpen && (
                  <div className="absolute right-0 mt-2 w-64 bg-white/80 backdrop-blur-md border border-white/20 rounded-xl shadow-xl z-50 overflow-hidden">
                    <div className="py-2">
                      <div className="px-4 py-3 text-sm text-gray-700 border-b border-gray-100/50 font-medium">Switch Profile</div>
                      {(['Glide', 'Business', 'Guest'] as ProfileType[]).map((profileType) => (
                        <button
                          key={profileType}
                          onClick={() => handleProfileSwitch(profileType)}
                          className={`w-full text-left px-4 py-3 text-sm hover:bg-white/50 flex items-center justify-between transition-colors ${
                            user.profileType === profileType ? 'bg-white/50' : ''
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div className={`p-2 rounded-lg ${getProfileColor(profileType)}`}>
                              {getProfileIcon(profileType)}
                            </div>
                            <div>
                              <div className="font-medium text-gray-900">{profileType}</div>
                              <div className="text-xs text-gray-500">
                                {profileType === 'Glide' ? 'Premium Traveler' :
                                 profileType === 'Business' ? 'Corporate Traveler' :
                                 'New Traveler'}
                              </div>
                            </div>
                          </div>
                          {user.profileType === profileType && (
                            <div className="h-2 w-2 rounded-full bg-indigo-600" />
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </nav>

        {/* Mobile menu button */}
        <button className="md:hidden text-white">
          <Menu size={24} />
        </button>
      </div>
    </header>
  );
};

export default Header;
