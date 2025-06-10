import { ProfileType } from './userService';
import React from 'react';

interface Profile {
  hashedAeroplanNumber: string;
  name: string;
}

export interface OfferData {
  content: string;
  [key: string]: unknown;
}

interface Placement {
  placementId: string;
  activityId: string;
  callback: (data: OfferData | null) => void;
  render: (data: OfferData | null) => React.ReactElement | null;
}

type FeaturedContentCallback = (data: OfferData | null) => void;

class AnalyticsService {
  private scopesFeatured = {
    "xdm:activityId": "dps:offer-activity:1ac72eb7bc70991e",
    "xdm:placementId": "dps:offer-placement:1ac72c2ce4902163"
  };

  private scopesHero = {
    "xdm:activityId": "dps:offer-activity:1ab7fa8cd81afff1",
    "xdm:placementId": "dps:offer-placement:1ab7f42d1a43b305"
  };

  private placements: Placement[] = [
    {

      // Featured offer.
      placementId: 'dps:offer-placement:1ac72c2ce4902163',
      activityId: 'dps:offer-activity:1ac72eb7bc70991e',
      callback: () => {},
      render: (data: OfferData | null) => data?.content ? React.createElement('div', {
        id: 'featured-offer-container',
        className: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
        dangerouslySetInnerHTML: { __html: data.content }
      }) : null
    },
    {
      // Hero offer.
      placementId: 'dps:offer-placement:1ab7f42d1a43b305',
      activityId: 'dps:offer-activity:1ab7fa8cd81afff1',
      callback: () => {},
      render: (data: OfferData | null) => data?.deliveryURL ? React.createElement('div', {
        id: 'hero-offer-container',
        className: 'bg-white rounded-lg shadow-sm p-6 mb-8'
      }, React.createElement('img', {
        src: data.deliveryURL,
        className: 'w-full h-auto rounded-lg',
        alt: 'Hero Offer'
      })) : null
    }
  ];
  private currentProfileType: ProfileType = 'Guest';

  private profiles: Record<ProfileType, Profile> = {
    Glide: {
      hashedAeroplanNumber: "9009462514dfff53a8b2e77a8fa2be194eb556acdc3dedd21116211a603f12be",
      name: "Almira Gliderton"
    },
    Business: {
      hashedAeroplanNumber: "4abbf14d609e7d81d036814031fb9978a0c1af594b2d4a2bc721be20e3cb1511",
      name: "Basia Businesson"
    },
    Guest: {
      hashedAeroplanNumber: "fe3359d6d1adfdf29d9a59d3cbe87ec627d4b44f6c19a3236b40bc91e0d30632",
      name: "John Doe Guestita"
    }
  };

  private getScope(placementId: string, activityId: string): string {
    const scopeObject = {
      "xdm:activityId": activityId,
      "xdm:placementId": placementId
    };
    return btoa(JSON.stringify(scopeObject));
  }

  setPlacementCallback(placementId: string, callback: FeaturedContentCallback): void {
    const placement = this.placements.find(p => p.placementId === placementId);
    if (placement) {
      placement.callback = callback;
      if (this.currentProfileType) {
        this.fetchPlacementById(placementId);
      }
    }
  }

  getPlacementRender(placementId: string): ((data: OfferData | null) => React.ReactElement | null) | undefined {
    return this.placements.find(p => p.placementId === placementId)?.render;
  }

  addPlacement(placement: Placement): void {
    this.placements.push(placement);
  }

  private getProfile(profileType: ProfileType): Profile {
    console.log("🤖 -- Getting profile --", profileType);
    return this.profiles[profileType];
  }

  private async fetchPlacementById(placementId: string): Promise<void> {
    const placement = this.placements.find(p => p.placementId === placementId);
    if (!placement) return;

    try {
      const profile = this.currentProfileType ? this.getProfile(this.currentProfileType) : null;
      const result = await window.alloy?.("sendEvent", {
        decisionScopes: [this.getScope(placement.placementId, placement.activityId)],
        xdm: profile ? {
          identityMap: {
            hashedAeroplanNumber: [{
              id: profile.hashedAeroplanNumber,
              authenticatedState: "authenticated",
              primary: true
            }]
          }
        } : undefined
      });

      if (result?.decisions) {
        const offer = result.decisions.find(d => d.placement && d.placement.id === placementId);
        console.log("-- Found offer -- ", offer);
        
        if (offer && offer.items.length > 0) {
          const data = offer.items[0].data as OfferData;
          placement.callback(data);
        } else {
          placement.callback(null);
        }
      }
    } catch (error) {
      console.error('Error fetching featured offers:', error);
      placement.callback(null);
    }
  }

  async sendProfileSwitchEvent(profileType: ProfileType): Promise<void> {
    this.currentProfileType = profileType;

    if (profileType === 'Glide' || profileType === 'Business') {
      for (const placement of this.placements) {
        await this.fetchPlacementById(placement.placementId);
      }
    } else {
      for (const placement of this.placements) {
        placement.callback(null);
      }
    }
  }
}

export const analyticsService = new AnalyticsService(); 