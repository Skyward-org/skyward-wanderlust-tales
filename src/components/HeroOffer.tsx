import { useEffect } from 'react';
import { useHeroOffers } from '@/contexts/FeaturedOffersContext';
import { analyticsService } from '@/services/analyticsService';

const HeroOffer = () => {
  const { featuredContent, setFeaturedContent } = useHeroOffers();
  const render = analyticsService.getPlacementRender('dps:offer-placement:1ab7f42d1a43b305');

  useEffect(() => {
    analyticsService.setPlacementCallback('dps:offer-placement:1ab7f42d1a43b305', setFeaturedContent);
  }, [setFeaturedContent]);

  if (!render) return null;
  return render(featuredContent);
};

export default HeroOffer; 