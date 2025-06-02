
import { useUser } from '@/hooks/useUser';
import { CloudRain, CloudDrizzle } from 'lucide-react';

const Sidebar = () => {
  const { user } = useUser();

  const getBoardingPassInfo = () => {
    if (!user) return null;

    switch (user.profileType) {
      case 'Glide':
        return {
          passenger: user.username,
          flight: 'SK 1247',
          seat: '14A',
          gate: 'B12',
          departure: '10:45',
          destination: 'Barcelona'
        };
      case 'Business':
        return {
          passenger: user.username,
          flight: 'SK 891',
          seat: '3C',
          gate: 'A7',
          departure: '14:15',
          destination: 'Chicago'
        };
      case 'Guest':
        return {
          passenger: user.username,
          flight: 'SK 643',
          seat: '28F',
          gate: 'C15',
          departure: '11:00',
          destination: 'Tokyo'
        };
      default:
        return null;
    }
  };

  const getWeatherInfo = () => {
    if (!user) return null;

    switch (user.profileType) {
      case 'Glide':
        return { 
          city: 'Barcelona', 
          forecast: [
            { day: 'Today', temp: '22°C', condition: 'sunny', humidity: '65%' },
            { day: 'Tomorrow', temp: '24°C', condition: 'sunny', humidity: '60%' },
            { day: 'Day 3', temp: '20°C', condition: 'rainy', humidity: '75%' }
          ]
        };
      case 'Business':
        return { 
          city: 'Chicago', 
          forecast: [
            { day: 'Today', temp: '8°C', condition: 'rainy', humidity: '78%' },
            { day: 'Tomorrow', temp: '6°C', condition: 'drizzle', humidity: '82%' },
            { day: 'Day 3', temp: '10°C', condition: 'sunny', humidity: '70%' }
          ]
        };
      case 'Guest':
        return { 
          city: 'Tokyo', 
          forecast: [
            { day: 'Today', temp: '15°C', condition: 'drizzle', humidity: '72%' },
            { day: 'Tomorrow', temp: '18°C', condition: 'sunny', humidity: '68%' },
            { day: 'Day 3', temp: '16°C', condition: 'rainy', humidity: '80%' }
          ]
        };
      default:
        return null;
    }
  };

  const getCarRentalOffer = () => {
    if (!user) return null;

    switch (user.profileType) {
      case 'Glide':
        return { discount: '20%', type: 'Compact Cars', company: 'EuroCar' };
      case 'Business':
        return { discount: '30%', type: 'Luxury Vehicles', company: 'Executive Rentals' };
      case 'Guest':
        return { discount: '15%', type: 'Economy Cars', company: 'Budget Auto' };
      default:
        return null;
    }
  };

  const getWeatherIcon = (condition: string) => {
    switch (condition) {
      case 'rainy':
        return <CloudRain className="w-6 h-6 text-blue-500" />;
      case 'drizzle':
        return <CloudDrizzle className="w-6 h-6 text-blue-400" />;
      default:
        return <div className="w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center text-xs">☀</div>;
    }
  };

  const boardingPass = getBoardingPassInfo();
  const weather = getWeatherInfo();
  const carRental = getCarRentalOffer();

  if (!boardingPass || !weather || !carRental) return null;

  return (
    <div className="space-y-6">
      {/* Boarding Pass */}
      <div className="bg-white rounded-xl shadow-lg p-6 border border-slate-200">
        <h3 className="text-lg font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2">Boarding Pass</h3>
        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-slate-600 font-medium">Passenger</span>
            <span className="font-semibold text-slate-900">{boardingPass.passenger}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-600 font-medium">Flight</span>
            <span className="font-semibold text-slate-900">{boardingPass.flight}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-600 font-medium">Seat</span>
            <span className="font-semibold text-slate-900">{boardingPass.seat}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-600 font-medium">Gate</span>
            <span className="font-semibold text-slate-900">{boardingPass.gate}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-600 font-medium">Departure</span>
            <span className="font-semibold text-slate-900">{boardingPass.departure}</span>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-slate-200">
          <div className="text-center">
            <p className="text-slate-600 text-sm font-medium">Destination</p>
            <p className="text-xl font-bold text-slate-900">{boardingPass.destination}</p>
          </div>
        </div>
      </div>

      {/* Weather Forecast */}
      <div className="bg-white rounded-xl shadow-lg p-6 border border-slate-200">
        <h3 className="text-lg font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2">Weather in {weather.city}</h3>
        <div className="space-y-4">
          {weather.forecast.map((day, index) => (
            <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-slate-50">
              <div className="flex items-center space-x-3">
                {getWeatherIcon(day.condition)}
                <div>
                  <p className="font-semibold text-slate-900">{day.day}</p>
                  <p className="text-sm text-slate-600">Humidity: {day.humidity}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-slate-900">{day.temp}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Car Rental Offer */}
      <div className="bg-white rounded-xl shadow-lg p-6 border border-slate-200">
        <h3 className="text-lg font-bold text-slate-900 mb-2 border-b border-slate-200 pb-2">Car Rental Offer</h3>
        <p className="text-amber-600 text-sm mb-4 font-medium">Exclusive for {user.profileType} members</p>
        <div className="space-y-3">
          <div className="bg-amber-50 rounded-lg p-4 border border-amber-200">
            <p className="text-3xl font-bold text-amber-600 mb-1">{carRental.discount} OFF</p>
            <p className="text-slate-700 font-medium">{carRental.type}</p>
            <p className="text-sm text-slate-600">with {carRental.company}</p>
          </div>
        </div>
        <button className="w-full bg-amber-600 text-white py-3 rounded-lg font-semibold mt-4 hover:bg-amber-700 transition-colors shadow-md hover:shadow-lg">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
