import { useEffect } from 'react';
import { useFeaturedOffers } from '@/contexts/FeaturedOffersContext';
import { analyticsService } from '@/services/analyticsService';

const FeaturedOffers = () => {
  const { featuredContent, setFeaturedContent } = useFeaturedOffers();
  const render = analyticsService.getPlacementRender('dps:offer-placement:1ac72c2ce4902163');

  useEffect(() => {
    analyticsService.setPlacementCallback('dps:offer-placement:1ac72c2ce4902163', setFeaturedContent);
  }, [setFeaturedContent]);

  if (!render) return null;
  return render(featuredContent);
};

export default FeaturedOffers; 