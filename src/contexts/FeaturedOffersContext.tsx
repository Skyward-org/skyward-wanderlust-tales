import React, { createContext, useContext, useState, ReactNode } from 'react';
import { OfferData } from '@/services/analyticsService';

interface FeaturedOffersContextType {
  featuredContent: OfferData | null;
  setFeaturedContent: (content: OfferData | null) => void;
}

const createFeaturedOffersContext = () => {
  const context = createContext<FeaturedOffersContextType | undefined>(undefined);
  
  const useFeaturedOffers = () => {
    const contextValue = useContext(context);
    if (!contextValue) {
      throw new Error('useFeaturedOffers must be used within a FeaturedOffersProvider');
    }
    return contextValue;
  };

  const Provider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [featuredContent, setFeaturedContent] = useState<OfferData | null>(null);

    return (
      <context.Provider value={{ featuredContent, setFeaturedContent }}>
        {children}
      </context.Provider>
    );
  };

  return { Provider, useFeaturedOffers };
};

export const { Provider: FeaturedOffersProvider, useFeaturedOffers } = createFeaturedOffersContext();
export const { Provider: HeroOffersProvider, useFeaturedOffers: useHeroOffers } = createFeaturedOffersContext(); 