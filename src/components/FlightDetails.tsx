
import { useUser } from '@/hooks/useUser';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, PlaneTakeoff, Clock } from 'lucide-react';

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
          date: 'March 15, 2024',
          seat: '14A',
          classType: 'Premium Economy'
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
          date: 'March 20, 2024',
          seat: '2B',
          classType: 'Business Class'
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
          date: 'March 25, 2024',
          seat: '23C',
          classType: 'Economy'
        };
      default:
        return null;
    }
  };

  const flightInfo = getFlightInfo();

  if (!flightInfo) return null;

  return (
    <Card className="mb-6">
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h3 className="text-xl font-semibold">Flight Details</h3>
            <p className="text-gray-500">{flightInfo.flightNumber} · {flightInfo.departure.split(' - ')[1]} to {flightInfo.arrival.split(' - ')[1]}</p>
          </div>
          <Button variant="outline" size="sm">
            Change Flight
          </Button>
        </div>

        <Card className="mb-6 bg-gradient-to-r from-indigo-50 to-blue-50 border-indigo-100">
          <CardContent className="p-4">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <div className="bg-indigo-100 rounded-full p-2 mr-3">
                  <PlaneTakeoff className="h-5 w-5 text-indigo-600" />
                </div>
                <div>
                  <span className="text-sm text-gray-500">{flightInfo.date}</span>
                  <div className="font-medium">{flightInfo.flightNumber}</div>
                </div>
              </div>
              <Badge className="bg-green-100 text-green-800 border-transparent hover:bg-green-100">
                Confirmed
              </Badge>
            </div>

            <div className="grid grid-cols-7 gap-2">
              <div className="col-span-3">
                <div className="font-bold text-xl">{flightInfo.departureTime}</div>
                <div className="text-sm text-gray-500">{flightInfo.departure}</div>
              </div>
              <div className="flex flex-col items-center justify-center col-span-1">
                <div className="text-xs text-gray-500 mb-1">{flightInfo.duration}</div>
                <div className="w-full h-0.5 bg-indigo-200 relative">
                  <div className="absolute w-2 h-2 rounded-full bg-indigo-600 -top-0.75 -left-1"></div>
                  <div className="absolute w-2 h-2 rounded-full bg-indigo-600 -top-0.75 -right-1"></div>
                </div>
              </div>
              <div className="col-span-3 text-right">
                <div className="font-bold text-xl">{flightInfo.arrivalTime}</div>
                <div className="text-sm text-gray-500">{flightInfo.arrival}</div>
              </div>
            </div>

            <div className="flex justify-between items-center mt-4 pt-2 border-t border-indigo-100">
              <div className="text-sm text-gray-600">
                <span className="font-medium text-indigo-700">Seat {flightInfo.seat}</span> · {flightInfo.classType}
              </div>
              <div className="flex space-x-1">
                <Button variant="ghost" size="sm" className="text-indigo-700">
                  <MapPin className="h-4 w-4 mr-1" />
                  Map
                </Button>
                <Button variant="ghost" size="sm" className="text-indigo-700">
                  <Clock className="h-4 w-4 mr-1" />
                  Status
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
};

export default FlightDetails;
