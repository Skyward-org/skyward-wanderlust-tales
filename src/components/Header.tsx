import React, { useState, useEffect } from 'react';
import { useUser } from '@/hooks/useUser';
import { ProfileType } from '@/services/userService';
import { analyticsService } from '@/services/analyticsService';
import { Plane, Menu, Briefcase, User, Sparkles, ChevronDown } from 'lucide-react';

const Header: React.FC = () => {
  const { user, switchProfile } = useUser();
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = 500; // Approximate height of hero section
      setIsScrolled(window.scrollY > heroHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const getProfileColor = (type: string) => {
    switch (type) {
      case 'Business':
        return 'bg-blue-500/20 text-blue-600 border-blue-500/30';
      case 'Glide':
        return 'bg-indigo-500/20 text-indigo-600 border-indigo-500/30';
      default:
        return 'bg-gray-500/20 text-gray-600 border-gray-500/30';
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and site name */}
          <div className="flex items-center">
            <Plane className="text-white mr-2" size={28} />
            <span className={`font-bold text-2xl ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
              Skyward
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a className={`font-medium transition-colors ${isScrolled ? 'text-gray-900 hover:text-gray-700' : 'text-white hover:text-indigo-100'}`} href="/">Home</a>
            <a className={`font-medium transition-colors ${isScrolled ? 'text-gray-900 hover:text-gray-700' : 'text-white hover:text-indigo-100'}`} href="/">Explore</a>
            <a className={`font-medium transition-colors ${isScrolled ? 'text-gray-900 hover:text-gray-700' : 'text-white hover:text-indigo-100'}`} href="/">Rewards</a>
            <a className={`font-medium transition-colors ${isScrolled ? 'text-gray-900 hover:text-gray-700' : 'text-white hover:text-indigo-100'}`} href="/">GPS</a>
            
            {/* User display */}
            {user && (
              <div className="flex items-center">
                <div className="relative">
                  <button
                    onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${
                      isScrolled 
                        ? 'bg-gray-100 text-gray-900 hover:bg-gray-200' 
                        : 'bg-white/10 text-white hover:bg-white/20'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      {getProfileIcon(user.profileType)}
                      <span className="font-medium">Hello, {user.username}</span>
                      <span className={`ml-2 text-xs px-2 py-1 rounded-full ${
                        isScrolled 
                          ? getProfileColor(user.profileType)
                          : 'bg-white/20 text-white backdrop-blur-sm'
                      }`}>
                        {user.profileType}
                      </span>
                    </div>
                    <ChevronDown className="h-4 w-4" />
                  </button>

                  {/* Profile dropdown */}
                  {isProfileMenuOpen && (
                    <div className="absolute right-0 mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                      <div className="py-1" role="menu" aria-orientation="vertical">
                        {(['Glide', 'Business', 'Guest'] as ProfileType[]).map((profileType) => {
                          const colors = getProfileColor(profileType);
                          return (
                            <button
                              key={profileType}
                              onClick={() => handleProfileSwitch(profileType)}
                              className={`w-full text-left px-4 py-2 text-sm flex items-center gap-2 ${
                                user.profileType === profileType
                                  ? getProfileColor(profileType)
                                  : 'text-gray-700 hover:bg-gray-100'
                              }`}
                              role="menuitem"
                            >
                              {getProfileIcon(profileType)}
                              <div>
                                <div className="font-medium text-gray-900">{profileType}</div>
                                <div className="text-xs text-gray-500">
                                  {profileType === 'Glide' ? 'Premium Traveler' :
                                   profileType === 'Business' ? 'Corporate Traveler' :
                                   'New Traveler'}
                                </div>
                              </div>
                              {user.profileType === profileType && (
                                <span className="ml-auto text-xs bg-white/20 px-2 py-0.5 rounded-full">
                                  Current
                                </span>
                              )}
                            </button>
                          );
                        })}
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
      </div>
    </header>
  );
};

export default Header;
