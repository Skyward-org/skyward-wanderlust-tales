import React from 'react';

interface FeaturedBannerProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  buttonText: string;
  buttonUrl: string;
}

const FeaturedBanner: React.FC<FeaturedBannerProps> = ({
  title,
  subtitle,
  imageUrl,
  buttonText,
  buttonUrl
}) => {
  return (
    <div className="bg-gray-100 rounded-lg overflow-hidden">
      <div className="relative">
        {/* Sale Pill */}
        <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
          SALE
        </div>
        
        {/* Image */}
        <img 
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{subtitle}</p>
        
        {/* Button */}
        <a
          href={buttonUrl}
          className="inline-block bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition-colors"
          target="_top"
          rel="noopener noreferrer"
        >
          {buttonText}
        </a>
      </div>
    </div>
  );
};

export default FeaturedBanner; 