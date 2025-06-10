interface AdobeDecision {
  placement: {
    id: string;
  };
  items: Array<{
    data: {
      content: string;
    };
  }>;
}

interface AdobeResult {
  decisions: AdobeDecision[];
}

interface Window {
  alloy?: (command: string, options: {
    xdm?: {
      identityMap: {
        hashedAeroplanNumber: Array<{
          id: string;
          authenticatedState: string;
          primary: boolean;
        }>;
      };
    };
    decisionScopes?: string[];
  }) => Promise<AdobeResult>;
  digitalDataAC: {
    events: Array<{
      attributes: {
        flowInfo: {
          bookingType: string;
          service: string;
          flowVariation: string;
        };
        siteInfo: {
          siteVersion: string;
          acoAdoVersion: string;
          buildDate: string;
          environment: string;
          language: string;
          name: string;
          type: string;
          siteEdition: string;
          countrySelected: string;
          viewportSize: string;
          webProperty: string;
        };
        userInfo: {
          authState: string;
          geoCountry: string;
          geoProvince: string;
          geoCity: string;
          ado: {
            agencyID: string;
            agentID: string;
            category: string;
            categoryID: string;
          };
          aco: {
            birthMonth: string;
            birthYear: string;
            category: string;
            countryOfResidence: string;
            emailID: string;
            firstName: string;
            loginMethod: string;
            persistentLogin: boolean;
            postalCode: string;
            seatPreference: null;
            userID: string;
            mrc: string;
            amh_flag: string;
            ch_flag: string;
            ch_acquisitionSourceCode: string;
            th_flag: string;
            usres_flag: string;
            coBrandLink: string[];
            st_flag: string;
            ub_flag: string;
          };
        };
        profileInfo: {
          daysSinceCurrentTier: number;
          daysSinceEnrollment: number;
          daysToPointsExpiry: number;
          daysToTierExpiry: number;
          enrollmentDate: string;
          familyPointsBalance: number;
          mMileMember: string;
          mMileProgress: number;
          pointsBalance: number;
          pointsExpiryDate: string;
          recentPointsAccrual: number;
          segmentsFlown: number;
          segmentsRequired: number;
          spend: number;
          spendRequired: number;
        };
      };
    }>;
  };
} 