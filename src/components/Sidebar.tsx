import { useUser } from '@/hooks/useUser';
import { Shield, Plane, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Sidebar = () => {
  const { user } = useUser();

  const getBoardingPassInfo = () => {
    if (!user) return null;

    switch (user.profileType) {
      case 'Glide':
        return {
          passenger: user.username,
          flight: 'SK 1234',
          seat: '14A',
          gate: 'B22',
          departure: '10:30 AM',
          date: 'May 15, 2025',
          from: { code: 'NYC', city: 'New York' },
          to: { code: 'CHI', city: 'Chicago' },
          duration: '2h 45m'
        };
      case 'Business':
        return {
          passenger: user.username,
          flight: 'SK 891',
          seat: '3C',
          gate: 'A7',
          departure: '2:15 PM',
          date: 'May 15, 2025',
          from: { code: 'NYC', city: 'New York' },
          to: { code: 'CHI', city: 'Chicago' },
          duration: '2h 30m'
        };
      case 'Guest':
        return {
          passenger: user.username,
          flight: 'SK 643',
          seat: '28F',
          gate: 'C15',
          departure: '11:00 AM',
          date: 'May 15, 2025',
          from: { code: 'NYC', city: 'New York' },
          to: { code: 'NRT', city: 'Tokyo' },
          duration: '14h 20m'
        };
      default:
        return null;
    }
  };

  const getWeatherData = () => {
    if (!user) return [];

    switch (user.profileType) {
      case 'Glide':
        return [
          { day: 'Friday', condition: 'Rainy', emoji: '🌧️', temp: '72°F' },
          { day: 'Saturday', condition: 'Partly Cloudy', emoji: '⛅', temp: '75°F' },
          { day: 'Sunday', condition: 'Sunny', emoji: '☀️', temp: '80°F' }
        ];
      case 'Business':
        return [
          { day: 'Friday', condition: 'Cloudy', emoji: '☁️', temp: '68°F' },
          { day: 'Saturday', condition: 'Sunny', emoji: '☀️', temp: '72°F' },
          { day: 'Sunday', condition: 'Partly Cloudy', emoji: '⛅', temp: '74°F' }
        ];
      case 'Guest':
        return [
          { day: 'Friday', condition: 'Clear', emoji: '🌤️', temp: '15°C' },
          { day: 'Saturday', condition: 'Rainy', emoji: '🌧️', temp: '18°C' },
          { day: 'Sunday', condition: 'Sunny', emoji: '☀️', temp: '20°C' }
        ];
      default:
        return [];
    }
  };

  const getDestinationCity = () => {
    if (!user) return 'Chicago';
    return user.profileType === 'Guest' ? 'Tokyo' : 'Chicago';
  };

  const boardingPass = getBoardingPassInfo();
  const weatherData = getWeatherData();
  const destinationCity = getDestinationCity();

  if (!boardingPass) return null;

  return (
    <div className="space-y-6">
      {/* Trip Protection Card */}
      <Card>
        <CardContent className="p-4">
          <h3 className="font-semibold mb-3 flex items-center">
            <Shield className="h-4 w-4 mr-2 text-indigo-600" />
            Trip Protection
          </h3>
          <p className="text-sm text-gray-600 mb-3">
            Protect your upcoming {destinationCity} trip against unexpected events
          </p>
          <div className="bg-indigo-50 rounded-lg p-3 border border-indigo-100 mb-4">
            <div className="flex justify-between items-center">
              <div className="font-medium text-indigo-900">Premium Protection</div>
              <div className="text-indigo-700 font-bold">$49</div>
            </div>
            <div className="text-xs text-indigo-700 mt-1">
              Includes trip cancellation and delay coverage
            </div>
          </div>
          <Button className="w-full">Add Protection</Button>
        </CardContent>
      </Card>

      {/* Boarding Pass */}
      <Card>
        <CardContent className="p-0 overflow-hidden rounded-lg">
          <div className="bg-gradient-to-r from-indigo-600 to-blue-600 p-4 text-white rounded-t-lg">
            <div className="flex justify-between items-center">
              <div>
                <div className="text-sm opacity-80">Boarding Pass</div>
                <div className="font-semibold">{boardingPass.flight}</div>
              </div>
              <div className="text-right">
                <div className="text-sm opacity-80">Status</div>
                <div className="font-semibold">Confirmed</div>
              </div>
            </div>
          </div>

          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <div>
                <div className="text-sm text-gray-500">From</div>
                <div className="text-xl font-bold">{boardingPass.from.code}</div>
                <div className="text-xs text-gray-500">{boardingPass.from.city}</div>
              </div>
              <div className="flex-1 flex flex-col items-center px-4">
                <div className="w-full border-t border-dashed border-gray-300 relative">
                  <Plane className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-blue-600 h-5 w-5 rotate-45" />
                </div>
                <div className="text-xs text-gray-500 mt-2">{boardingPass.duration}</div>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-500">To</div>
                <div className="text-xl font-bold">{boardingPass.to.code}</div>
                <div className="text-xs text-gray-500">{boardingPass.to.city}</div>
              </div>
            </div>
            <div className="flex justify-between mb-4">
              <div>
                <div className="text-xs text-gray-500">Date</div>
                <div className="font-medium">{boardingPass.date}</div>
              </div>
              <div>
                <div className="text-xs text-gray-500">Departure</div>
                <div className="font-medium">{boardingPass.departure}</div>
              </div>
              <div>
                <div className="text-xs text-gray-500">Gate</div>
                <div className="font-medium">{boardingPass.gate}</div>
              </div>
            </div>
            <div className="flex items-center mb-6">
              <div className="mr-4">
                <div className="text-xs text-gray-500">Passenger</div>
                <div className="font-medium">{boardingPass.passenger}</div>
              </div>
              <div>
                <div className="text-xs text-gray-500">Seat</div>
                <div className="font-medium">{boardingPass.seat}</div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="text-xs text-gray-500">Tap to view boarding time</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Weather Card */}
      <Card>
        <CardContent className="p-4">
          <h3 className="font-semibold mb-3">{destinationCity} Weather</h3>
          <div className="space-y-2">
            {weatherData.map((day, index) => (
              <div key={index} className="flex justify-between items-center p-2 border-b last:border-0">
                <div className="flex items-center">
                  <span className="text-xl mr-3">{day.emoji}</span>
                  <div>
                    <div className="font-medium">{day.day}</div>
                    <div className="text-xs text-gray-500">{day.condition}</div>
                  </div>
                </div>
                <div className="text-lg">{day.temp}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Member Offer Card */}
      <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
        <CardContent className="p-4">
          <div className="flex items-start">
            <div className="flex-grow">
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-primary/80 bg-blue-100 text-blue-800 mb-2">
                {user.profileType} Member Offer
              </div>
              <h3 className="font-semibold">Need a car in {destinationCity}?</h3>
              <p className="text-sm text-blue-700 mt-1 mb-3">
                Get 25% off car rentals with your membership
              </p>
            </div>
            <div className="text-3xl">🚗</div>
          </div>
          <Button className="w-full">View Offers</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Sidebar;
