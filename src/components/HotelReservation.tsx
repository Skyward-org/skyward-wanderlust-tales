
import { useUser } from '@/hooks/useUser';

const HotelReservation = () => {
  const { user } = useUser();

  const getHotelInfo = () => {
    if (!user) return null;

    switch (user.profileType) {
      case 'Glide':
        return {
          name: 'Hotel Casa Fuster',
          location: 'Barcelona, Spain',
          checkIn: 'March 15, 2024',
          checkOut: 'March 20, 2024',
          nights: 5,
          roomType: 'Superior Double Room',
          guests: 2,
          price: '$890'
        };
      case 'Business':
        return {
          name: 'The Langham Chicago',
          location: 'Chicago, IL',
          checkIn: 'March 20, 2024',
          checkOut: 'March 24, 2024',
          nights: 4,
          roomType: 'Executive Suite',
          guests: 1,
          price: '$1,240'
        };
      case 'Guest':
        return {
          name: 'Park Hyatt Tokyo',
          location: 'Tokyo, Japan',
          checkIn: 'March 25, 2024',
          checkOut: 'March 30, 2024',
          nights: 5,
          roomType: 'Standard King Room',
          guests: 2,
          price: '$1,150'
        };
      default:
        return null;
    }
  };

  const hotelInfo = getHotelInfo();

  if (!hotelInfo) return null;

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-4">Hotel Reservation</h3>
      
      <div className="space-y-4">
        <div>
          <h4 className="font-semibold text-lg text-gray-900">{hotelInfo.name}</h4>
          <p className="text-gray-600">{hotelInfo.location}</p>
        </div>

        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-gray-600">Check-in</p>
            <p className="font-semibold">{hotelInfo.checkIn}</p>
          </div>
          <div>
            <p className="text-gray-600">Check-out</p>
            <p className="font-semibold">{hotelInfo.checkOut}</p>
          </div>
          <div>
            <p className="text-gray-600">Duration</p>
            <p className="font-semibold">{hotelInfo.nights} nights</p>
          </div>
          <div>
            <p className="text-gray-600">Guests</p>
            <p className="font-semibold">{hotelInfo.guests} guest{hotelInfo.guests > 1 ? 's' : ''}</p>
          </div>
        </div>

        <div className="border-t pt-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-600">Room Type</span>
            <span className="font-semibold">{hotelInfo.roomType}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Total Price</span>
            <span className="text-xl font-bold text-green-600">{hotelInfo.price}</span>
          </div>
        </div>

        <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
          Modify Reservation
        </button>
      </div>
    </div>
  );
};

export default HotelReservation;
