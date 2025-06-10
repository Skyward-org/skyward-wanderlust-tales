import { useEffect } from 'react';
import { useHeroOffers } from '@/contexts/FeaturedOffersContext';
import { analyticsService } from '@/services/analyticsService';

interface HeroOfferProps {
  placementId: string;
}

const HeroOffer = ({ placementId }: HeroOfferProps) => {
  const { heroContent, setHeroContent } = useHeroOffers();
  const render = analyticsService.getPlacementRender(placementId);

  useEffect(() => {
    analyticsService.setPlacementCallback(placementId, setHeroContent);
  }, [placementId, setHeroContent]);

  if (!render) return null;
  return render(heroContent);
};

export default HeroOffer; 