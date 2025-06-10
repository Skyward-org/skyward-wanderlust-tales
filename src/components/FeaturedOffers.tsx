import { useEffect } from 'react';
import { useFeaturedOffers } from '@/contexts/FeaturedOffersContext';
import { analyticsService } from '@/services/analyticsService';

interface FeaturedOffersProps {
  placementId: string;
}

const FeaturedOffers = ({ placementId }: FeaturedOffersProps) => {
  const { featuredContent, setFeaturedContent } = useFeaturedOffers();
  const render = analyticsService.getPlacementRender(placementId);

  useEffect(() => {
    analyticsService.setPlacementCallback(placementId, setFeaturedContent);
  }, [placementId, setFeaturedContent]);

  if (!render) return null;
  return render(featuredContent);
};

export default FeaturedOffers; 