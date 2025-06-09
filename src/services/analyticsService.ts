import { ProfileType } from './userService';

interface Profile {
  hashedAeroplanNumber: string;
  name: string;
}

type FeaturedContentCallback = (content: string) => void;

class AnalyticsService {
  private readonly PLACEMENT_ID = 'dps:offer-placement:1ac72c2ce4902163';
  private readonly SCOPE = 'eyJ4ZG06YWN0aXZpdHlJZCI6ImRwczpvZmZlci1hY3Rpdml0eToxYWM3MmViN2JjNzA5OTFlIiwieGRtOnBsYWNlbWVudElkIjoiZHBzOm9mZmVyLXBsYWNlbWVudDoxYWM3MmMyY2U0OTAyMTYzIn0=';
  private onFeaturedContentUpdate: FeaturedContentCallback | null = null;
  private currentProfileType: ProfileType | null = null;

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

  setFeaturedContentCallback(callback: FeaturedContentCallback): void {
    this.onFeaturedContentUpdate = callback;
    // If we already have a profile type, fetch offers immediately
    if (this.currentProfileType) {
      this.fetchFeaturedOffers();
    }
  }

  private getProfile(profileType: ProfileType): Profile {
    console.log("-- Getting profile --", profileType);
    return this.profiles[profileType];
  }

  private async fetchFeaturedOffers(): Promise<void> {
    try {
      const result = await window.alloy?.("sendEvent", {
        decisionScopes: [this.SCOPE]
      });

      if (result?.decisions) {
        const offer = result.decisions.find(d => d.placement.id === this.PLACEMENT_ID);
        console.log("-- Found offer -- ", offer?.items[0].name);
        
        if (offer && offer.items.length > 0) {
          const content = offer.items[0].data.content;
          this.onFeaturedContentUpdate?.(content);
        } else {
          // Clear content if no offer is found
          this.onFeaturedContentUpdate?.('');
        }
      }
    } catch (error) {
      console.error('Error fetching featured offers:', error);
      // Clear content on error
      this.onFeaturedContentUpdate?.('');
    }
  }

  async sendProfileSwitchEvent(profileType: ProfileType): Promise<void> {
    // Store the current profile type
    this.currentProfileType = profileType;

    if (profileType === 'Glide' || profileType === 'Business') {
      const profile = this.getProfile(profileType);
      await window.alloy?.("sendEvent", {
        xdm: {
          identityMap: {
            hashedAeroplanNumber: [{
              id: profile.hashedAeroplanNumber,
              authenticatedState: "authenticated",
              primary: true
            }]
          }
        }
      });
      console.log("-- Sent profile switch event --", profile.name);

      // Fetch featured offers after profile switch
      await this.fetchFeaturedOffers();
    } else {
      // Clear content for Guest profile
      this.onFeaturedContentUpdate?.('');
    }
  }
}

export const analyticsService = new AnalyticsService(); 