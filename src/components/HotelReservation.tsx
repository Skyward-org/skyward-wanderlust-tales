
import { useUser } from '@/hooks/useUser';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const HotelReservation = () => {
  const { user } = useUser();

  const getHotelInfo = () => {
    if (!user) return null;

    switch (user.profileType) {
      case 'Glide':
        return {
          name: 'Hotel Casa Fuster',
          location: 'Barcelona, Spain',
          address: '123 Passeig de Gràcia, Barcelona',
          checkIn: 'March 15, 2024',
          checkOut: 'March 20, 2024',
          nights: 5,
          roomType: 'Superior Double Room',
          guests: 2,
          price: '$890',
          image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&auto=format&fit=crop&q=60'
        };
      case 'Business':
        return {
          name: 'The Langham Chicago',
          location: 'Chicago, IL',
          address: '330 N Wabash Ave, Chicago',
          checkIn: 'March 20, 2024',
          checkOut: 'March 24, 2024',
          nights: 4,
          roomType: 'Executive Suite',
          guests: 1,
          price: '$1,240',
          image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&auto=format&fit=crop&q=60'
        };
      case 'Guest':
        return {
          name: 'Park Hyatt Tokyo',
          location: 'Tokyo, Japan',
          address: '3-7-1-2 Nishi Shinjuku, Tokyo',
          checkIn: 'March 25, 2024',
          checkOut: 'March 30, 2024',
          nights: 5,
          roomType: 'Standard King Room',
          guests: 2,
          price: '$1,150',
          image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&auto=format&fit=crop&q=60'
        };
      default:
        return null;
    }
  };

  const hotelInfo = getHotelInfo();

  if (!hotelInfo) return null;

  return (
    <Card>
      <CardContent className="p-6">
        <h4 className="text-lg font-semibold mb-3">Hotel Reservation</h4>
        <Card>
          <CardContent className="p-4">
            <div className="flex">
              <div 
                className="w-24 h-24 rounded bg-cover bg-center flex-shrink-0"
                style={{ backgroundImage: `url(${hotelInfo.image})` }}
              ></div>
              <div className="ml-4">
                <h4 className="font-medium">{hotelInfo.name}</h4>
                <p className="text-sm text-gray-600">{hotelInfo.address}</p>
                <div className="flex gap-6 mt-2">
                  <div>
                    <div className="text-xs text-gray-500">Check-in</div>
                    <div className="text-sm">{hotelInfo.checkIn}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Check-out</div>
                    <div className="text-sm">{hotelInfo.checkOut}</div>
                  </div>
                </div>
                <div className="mt-2">
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
};

export default HotelReservation;
