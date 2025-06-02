
import { useState } from 'react';
import { useUser } from '@/hooks/useUser';
import { ProfileType } from '@/services/userService';

const Header = () => {
  const { user, switchProfile } = useUser();
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  const getProfileBadgeColor = (profileType: ProfileType) => {
    switch (profileType) {
      case 'Glide': return 'bg-slate-700';
      case 'Business': return 'bg-amber-700';
      case 'Guest': return 'bg-gray-700';
      default: return 'bg-gray-700';
    }
  };

  return (
    <header className="bg-slate-900 shadow-xl border-b border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18">
          {/* Logo and site name */}
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-br from-slate-600 to-slate-800 rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-2xl">S</span>
            </div>
            <span className="text-3xl font-bold text-white tracking-wide">Skyward</span>
          </div>

          {/* Navigation and user menu */}
          <div className="flex items-center space-x-10">
            {/* Main navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-slate-300 hover:text-white font-medium transition-colors text-lg">Home</a>
              <a href="#" className="text-slate-300 hover:text-white font-medium transition-colors text-lg">Explore</a>
              <a href="#" className="text-slate-300 hover:text-white font-medium transition-colors text-lg">Rewards</a>
              <a href="#" className="text-slate-300 hover:text-white font-medium transition-colors text-lg">GPS</a>
            </nav>

            {/* User menu */}
            {user && (
              <div className="relative">
                <button
                  onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                  className="flex items-center space-x-3 text-slate-300 hover:text-white transition-colors"
                >
                  <span className="text-lg">Hello {user.username}</span>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium text-white ${getProfileBadgeColor(user.profileType)}`}>
                    {user.profileType}
                  </span>
                </button>

                {/* Profile dropdown */}
                {isProfileMenuOpen && (
                  <div className="absolute right-0 mt-2 w-52 bg-slate-800 border border-slate-600 rounded-lg shadow-2xl z-50">
                    <div className="py-2">
                      <div className="px-4 py-3 text-sm text-slate-300 border-b border-slate-600 font-medium">Switch Profile</div>
                      {(['Glide', 'Business', 'Guest'] as ProfileType[]).map((profileType) => (
                        <button
                          key={profileType}
                          onClick={() => {
                            switchProfile(profileType);
                            setIsProfileMenuOpen(false);
                          }}
                          className={`w-full text-left px-4 py-3 text-sm hover:bg-slate-700 flex items-center justify-between transition-colors ${
                            user.profileType === profileType ? 'bg-slate-700 text-white' : 'text-slate-300'
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
