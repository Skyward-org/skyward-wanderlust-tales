import React, { useEffect, useState } from 'react';
import { analyticsService } from '../services/analyticsService';
import type { OfferData } from '../services/analyticsService';

interface BusinessOfferProps {
  placementId: string;
}

export const BusinessOffer: React.FC<BusinessOfferProps> = ({ placementId }) => {
  const [offerData, setOfferData] = useState<OfferData | null>(null);

  useEffect(() => {
    analyticsService.setPlacementCallback(placementId, (data) => {
      setOfferData(data);
    });
  }, [placementId]);

  const render = analyticsService.getPlacementRender(placementId);
  if (!render) return null;

  return render(offerData);
}; 