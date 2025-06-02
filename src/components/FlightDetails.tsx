
import { useUser } from '@/hooks/useUser';

const FlightDetails = () => {
  const { user } = useUser();

  const getFlightInfo = () => {
    if (!user) return null;

    switch (user.profileType) {
      case 'Glide':
        return {
          destination: 'Barcelona',
          flightNumber: 'SK 1247',
          departure: 'JFK - New York',
          arrival: 'BCN - Barcelona',
          departureTime: '10:45 AM',
          arrivalTime: '11:30 PM',
          duration: '7h 45m',
          date: 'March 15, 2024'
        };
      case 'Business':
        return {
          destination: 'Chicago',
          flightNumber: 'SK 891',
          departure: 'LAX - Los Angeles',
          arrival: 'ORD - Chicago',
          departureTime: '2:15 PM',
          arrivalTime: '8:30 PM',
          duration: '4h 15m',
          date: 'March 20, 2024'
        };
      case 'Guest':
        return {
          destination: 'Tokyo',
          flightNumber: 'SK 643',
          departure: 'SFO - San Francisco',
          arrival: 'NRT - Tokyo',
          departureTime: '11:00 AM',
          arrivalTime: '2:45 PM (+1)',
          duration: '10h 45m',
          date: 'March 25, 2024'
        };
      default:
        return null;
    }
  };

  const flightInfo = getFlightInfo();

  if (!flightInfo) return null;

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
      <h3 className="text-xl font-bold text-gray-900 mb-4">Flight Details</h3>
      
      <div className="space-y-4">
        <div className="flex justify-between items-center border-b pb-4">
          <div>
            <p className="text-sm text-gray-600">Flight</p>
            <p className="font-semibold text-lg">{flightInfo.flightNumber}</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-600">Date</p>
            <p className="font-semibold">{flightInfo.date}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <p className="text-sm text-gray-600">Departure</p>
            <p className="font-semibold">{flightInfo.departure}</p>
            <p className="text-lg font-bold text-blue-600">{flightInfo.departureTime}</p>
          </div>
          
          <div className="text-center">
            <p className="text-sm text-gray-600">Duration</p>
            <div className="flex items-center justify-center mt-2">
              <div className="w-8 h-0.5 bg-gray-300"></div>
              <div className="mx-2 text-gray-400">✈</div>
              <div className="w-8 h-0.5 bg-gray-300"></div>
            </div>
            <p className="font-semibold mt-1">{flightInfo.duration}</p>
          </div>

          <div className="text-right">
            <p className="text-sm text-gray-600">Arrival</p>
            <p className="font-semibold">{flightInfo.arrival}</p>
            <p className="text-lg font-bold text-blue-600">{flightInfo.arrivalTime}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightDetails;
