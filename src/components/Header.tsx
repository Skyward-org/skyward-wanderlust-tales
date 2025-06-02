
import { useState } from 'react';
import { useUser } from '@/hooks/useUser';
import { ProfileType } from '@/services/userService';

const Header = () => {
  const { user, switchProfile } = useUser();
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  const getProfileBadgeColor = (profileType: ProfileType) => {
    switch (profileType) {
      case 'Glide': return 'bg-blue-500';
      case 'Business': return 'bg-amber-500';
      case 'Guest': return 'bg-gray-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <header className="bg-white shadow-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and site name */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <span className="text-2xl font-bold text-gray-900">Skyyyer</span>
          </div>

          {/* Navigation and user menu */}
          <div className="flex items-center space-x-8">
            {/* Main navigation */}
            <nav className="hidden md:flex space-x-6">
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Home</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Explore</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Rewards</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">GPS</a>
            </nav>

            {/* User menu */}
            {user && (
              <div className="relative">
                <button
                  onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                  className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors"
                >
                  <span>Hello {user.username}</span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium text-white ${getProfileBadgeColor(user.profileType)}`}>
                    {user.profileType}
                  </span>
                </button>

                {/* Profile dropdown */}
                {isProfileMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                    <div className="py-2">
                      <div className="px-4 py-2 text-sm text-gray-700 border-b">Switch Profile</div>
                      {(['Glide', 'Business', 'Guest'] as ProfileType[]).map((profileType) => (
                        <button
                          key={profileType}
                          onClick={() => {
                            switchProfile(profileType);
                            setIsProfileMenuOpen(false);
                          }}
                          className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 flex items-center justify-between ${
                            user.profileType === profileType ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
                          }`}
                        >
                          {profileType}
                          <span className={`px-2 py-1 rounded-full text-xs font-medium text-white ${getProfileBadgeColor(profileType)}`}>
                            {profileType}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
