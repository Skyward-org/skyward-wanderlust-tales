import { useState } from 'react';
import { useUser } from '@/hooks/useUser';
import { ProfileType } from '@/services/userService';
import { analyticsService } from '@/services/analyticsService';
import { Plane, Menu } from 'lucide-react';

const Header = () => {
  const { user, switchProfile } = useUser();
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  const handleProfileSwitch = (profileType: ProfileType) => {
    switchProfile(profileType);
    setIsProfileMenuOpen(false);
    analyticsService.sendProfileSwitchEvent(profileType);
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
                  className="px-3 py-1.5 bg-white/20 text-white rounded-full transition-colors hover:bg-white/30"
                >
                  <span className="font-medium">Hello, {user.username}</span>
                  <span className="ml-2 text-xs px-1.5 py-0.5 rounded bg-white/30">
                    {user.profileType.toUpperCase()}
                  </span>
                </button>

                {/* Profile dropdown */}
                {isProfileMenuOpen && (
                  <div className="absolute right-0 mt-2 w-52 bg-white border border-gray-200 rounded-lg shadow-xl z-50">
                    <div className="py-2">
                      <div className="px-4 py-3 text-sm text-gray-700 border-b border-gray-100 font-medium">Switch Profile</div>
                      {(['Glide', 'Business', 'Guest'] as ProfileType[]).map((profileType) => (
                        <button
                          key={profileType}
                          onClick={() => handleProfileSwitch(profileType)}
                          className={`w-full text-left px-4 py-3 text-sm hover:bg-gray-50 flex items-center justify-between transition-colors ${
                            user.profileType === profileType ? 'bg-gray-50 text-gray-900' : 'text-gray-700'
                          }`}
                        >
                          {profileType}
                          <span className={`px-2 py-1 rounded-full text-xs font-medium text-white ${
                            profileType === 'Glide' ? 'bg-slate-600' :
                            profileType === 'Business' ? 'bg-amber-600' : 'bg-gray-600'
                          }`}>
                            {profileType}
                          </span>
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
        <div className="md:hidden">
          <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 text-white">
            <Menu />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
