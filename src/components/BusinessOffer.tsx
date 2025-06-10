import React, { useEffect, useState } from 'react';
import { analyticsService } from '../services/analyticsService';
import type { OfferData } from '../services/analyticsService';

export const BusinessOffer: React.FC = () => {
  const [offerData, setOfferData] = useState<OfferData | null>(null);

  useEffect(() => {
    analyticsService.setPlacementCallback('dps:offer-placement:1ad0cc6e27389403', (data) => {
      setOfferData(data);
    });
  }, []);

  const render = analyticsService.getPlacementRender('dps:offer-placement:1ad0cc6e27389403');
  if (!render) return null;

  return render(offerData);
}; 