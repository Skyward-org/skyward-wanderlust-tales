import { Plane, Clock, MapPin } from 'lucide-react';

interface FlightDetailsProps {
  flightNumber: string;
  departureCity: string;
  departureCode: string;
  arrivalCity: string;
  arrivalCode: string;
  departureTime: string;
  arrivalTime: string;
  departureDate: string;
  arrivalDate: string;
  status: 'On Time' | 'Delayed' | 'Boarding';
  gate?: string;
  terminal?: string;
}

const FlightDetails = ({
  flightNumber,
  departureCity,
  departureCode,
  arrivalCity,
  arrivalCode,
  departureTime,
  arrivalTime,
  departureDate,
  arrivalDate,
  status,
  gate,
  terminal
}: FlightDetailsProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'On Time':
        return 'bg-green-100 text-green-800';
      case 'Delayed':
        return 'bg-amber-100 text-amber-800';
      case 'Boarding':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Flight Details</h2>
        <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(status)}`}>
          {status}
        </div>
      </div>

      <div className="flex items-center justify-between mb-6">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <MapPin className="w-4 h-4 text-gray-500" />
            <span className="text-sm text-gray-500">From</span>
          </div>
          <div className="text-lg font-semibold text-gray-900">{departureCity}</div>
          <div className="text-sm text-gray-500">{departureCode}</div>
        </div>

        <div className="flex-1 flex flex-col items-center">
          <div className="w-full flex items-center">
            <div className="flex-1 h-px bg-gray-200"></div>
            <Plane className="w-6 h-6 text-indigo-600 mx-4 transform rotate-90" />
            <div className="flex-1 h-px bg-gray-200"></div>
          </div>
          <div className="text-xs text-gray-500 mt-2">Direct Flight</div>
        </div>

        <div className="flex-1 text-right">
          <div className="flex items-center gap-2 mb-1 justify-end">
            <MapPin className="w-4 h-4 text-gray-500" />
            <span className="text-sm text-gray-500">To</span>
          </div>
          <div className="text-lg font-semibold text-gray-900">{arrivalCity}</div>
          <div className="text-sm text-gray-500">{arrivalCode}</div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Clock className="w-4 h-4 text-gray-500" />
            <span className="text-sm text-gray-500">Departure</span>
          </div>
          <div className="text-lg font-semibold text-gray-900">{departureTime}</div>
          <div className="text-sm text-gray-500">{departureDate}</div>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-1">
            <Clock className="w-4 h-4 text-gray-500" />
            <span className="text-sm text-gray-500">Arrival</span>
          </div>
          <div className="text-lg font-semibold text-gray-900">{arrivalTime}</div>
          <div className="text-sm text-gray-500">{arrivalDate}</div>
        </div>
      </div>

      {(gate || terminal) && (
        <div className="mt-6 pt-6 border-t border-gray-100">
          <div className="grid grid-cols-2 gap-4">
            {gate && (
              <div>
                <div className="text-sm text-gray-500 mb-1">Gate</div>
                <div className="text-lg font-semibold text-gray-900">{gate}</div>
              </div>
            )}
            {terminal && (
              <div>
                <div className="text-sm text-gray-500 mb-1">Terminal</div>
                <div className="text-lg font-semibold text-gray-900">{terminal}</div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default FlightDetails;
