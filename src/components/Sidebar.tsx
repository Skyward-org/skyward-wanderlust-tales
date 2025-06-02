
import { useUser } from '@/hooks/useUser';

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
        return { city: 'Barcelona', temp: '22°C', condition: 'Sunny', humidity: '65%' };
      case 'Business':
        return { city: 'Chicago', temp: '8°C', condition: 'Cloudy', humidity: '78%' };
      case 'Guest':
        return { city: 'Tokyo', temp: '15°C', condition: 'Partly Cloudy', humidity: '72%' };
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

  const boardingPass = getBoardingPassInfo();
  const weather = getWeatherInfo();
  const carRental = getCarRentalOffer();

  if (!boardingPass || !weather || !carRental) return null;

  return (
    <div className="space-y-6">
      {/* Boarding Pass */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg p-6">
        <h3 className="text-lg font-bold mb-4">Boarding Pass</h3>
        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-blue-200">Passenger</span>
            <span className="font-semibold">{boardingPass.passenger}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-blue-200">Flight</span>
            <span className="font-semibold">{boardingPass.flight}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-blue-200">Seat</span>
            <span className="font-semibold">{boardingPass.seat}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-blue-200">Gate</span>
            <span className="font-semibold">{boardingPass.gate}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-blue-200">Departure</span>
            <span className="font-semibold">{boardingPass.departure}</span>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-blue-400">
          <div className="text-center">
            <p className="text-blue-200 text-sm">Destination</p>
            <p className="text-xl font-bold">{boardingPass.destination}</p>
          </div>
        </div>
      </div>

      {/* Weather */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Weather in {weather.city}</h3>
        <div className="text-center">
          <div className="text-4xl font-bold text-blue-600 mb-2">{weather.temp}</div>
          <p className="text-gray-600 mb-2">{weather.condition}</p>
          <p className="text-sm text-gray-500">Humidity: {weather.humidity}</p>
        </div>
      </div>

      {/* Car Rental Offer */}
      <div className="bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-lg p-6">
        <h3 className="text-lg font-bold mb-2">Car Rental Offer</h3>
        <p className="text-amber-100 text-sm mb-3">Exclusive for {user.profileType} members</p>
        <div className="space-y-2">
          <p className="text-2xl font-bold">{carRental.discount} OFF</p>
          <p className="text-amber-100">{carRental.type}</p>
          <p className="text-sm text-amber-200">with {carRental.company}</p>
        </div>
        <button className="w-full bg-white text-orange-600 py-2 rounded-lg font-semibold mt-4 hover:bg-gray-100 transition-colors">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
