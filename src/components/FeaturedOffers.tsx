import { useEffect } from 'react';
import { useFeaturedOffers } from '@/contexts/FeaturedOffersContext';
import { analyticsService } from '@/services/analyticsService';

const FeaturedOffers = () => {
  const { featuredContent, setFeaturedContent } = useFeaturedOffers();

  useEffect(() => {
    // Set up the callback for featured content updates
    analyticsService.setFeaturedContentCallback(setFeaturedContent);
  }, [setFeaturedContent]);

  if (!featuredContent) return null;

  return (
    <div 
      id="featured-offer-container"
      className="bg-white rounded-lg shadow-sm p-6 mb-8"
      dangerouslySetInnerHTML={{ __html: featuredContent }}
    />
  );
};

export default FeaturedOffers; 