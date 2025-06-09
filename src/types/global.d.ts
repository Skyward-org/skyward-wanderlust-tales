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
} 