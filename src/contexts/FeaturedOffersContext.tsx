import React, { createContext, useContext, useState } from 'react';
import { OfferData } from '@/services/analyticsService';

interface FeaturedOffersContextType {
  featuredContent: OfferData | null;
  setFeaturedContent: (content: OfferData | null) => void;
  heroContent: OfferData | null;
  setHeroContent: (content: OfferData | null) => void;
}

const FeaturedOffersContext = createContext<FeaturedOffersContextType | undefined>(undefined);

export const FeaturedOffersProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [featuredContent, setFeaturedContent] = useState<OfferData | null>(null);
  const [heroContent, setHeroContent] = useState<OfferData | null>(null);

  return (
    <FeaturedOffersContext.Provider value={{ 
      featuredContent, 
      setFeaturedContent,
      heroContent,
      setHeroContent
    }}>
      {children}
    </FeaturedOffersContext.Provider>
  );
};

export const useFeaturedOffers = () => {
  const context = useContext(FeaturedOffersContext);
  if (context === undefined) {
    throw new Error('useFeaturedOffers must be used within a FeaturedOffersProvider');
  }
  return context;
};

export const useHeroOffers = () => {
  const context = useContext(FeaturedOffersContext);
  if (context === undefined) {
    throw new Error('useHeroOffers must be used within a FeaturedOffersProvider');
  }
  return {
    heroContent: context.heroContent,
    setHeroContent: context.setHeroContent
  };
}; 