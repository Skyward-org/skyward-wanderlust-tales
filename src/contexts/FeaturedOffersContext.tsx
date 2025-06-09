import React, { createContext, useContext, useState, ReactNode } from 'react';

interface FeaturedOffersContextType {
  featuredContent: string;
  setFeaturedContent: (content: string) => void;
}

const FeaturedOffersContext = createContext<FeaturedOffersContextType | undefined>(undefined);

export const useFeaturedOffers = () => {
  const context = useContext(FeaturedOffersContext);
  if (!context) {
    throw new Error('useFeaturedOffers must be used within a FeaturedOffersProvider');
  }
  return context;
};

interface FeaturedOffersProviderProps {
  children: ReactNode;
}

export const FeaturedOffersProvider: React.FC<FeaturedOffersProviderProps> = ({ children }) => {
  const [featuredContent, setFeaturedContent] = useState<string>('');

  return (
    <FeaturedOffersContext.Provider value={{ featuredContent, setFeaturedContent }}>
      {children}
    </FeaturedOffersContext.Provider>
  );
}; 