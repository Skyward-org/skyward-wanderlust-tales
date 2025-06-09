
import { useUser } from '@/hooks/useUser';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Calendar } from 'lucide-react';

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
    <Card className="mb-6">
      <CardContent className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold">Your {flightInfo.destination} Flight</h3>
          <Badge variant="outline">
            Confirmed Booking
          </Badge>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="text-sm font-medium text-muted-foreground">Flight Details</h4>
            <div className="flex items-center mt-1">
              <MapPin className="h-5 w-5 text-muted-foreground mr-2" />
              <span className="font-medium">{flightInfo.flightNumber}</span>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-medium text-muted-foreground">Travel Date</h4>
            <div className="flex items-center mt-1">
              <Calendar className="h-5 w-5 text-muted-foreground mr-2" />
              <span className="font-medium">{flightInfo.date}</span>
            </div>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="bg-blue-50 border-blue-100">
            <CardContent className="p-4">
              <div className="font-medium text-blue-700">{flightInfo.departureTime}</div>
              <div className="text-sm text-blue-600">{flightInfo.departure}</div>
            </CardContent>
          </Card>
          
          <Card className="bg-green-50 border-green-100">
            <CardContent className="p-4">
              <div className="font-medium text-green-700">{flightInfo.duration}</div>
              <div className="text-sm text-green-600">Flight duration</div>
            </CardContent>
          </Card>
          
          <Card className="bg-amber-50 border-amber-100">
            <CardContent className="p-4">
              <div className="font-medium text-amber-700">{flightInfo.arrivalTime}</div>
              <div className="text-sm text-amber-600">{flightInfo.arrival}</div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6 flex gap-3">
          <Button variant="outline">
            Check-in Online
          </Button>
          <Button>
            View Trip Details
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default FlightDetails;
