import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Cookies from 'js-cookie';

const AnalyticsScripts = () => {
  const location = useLocation();
  const isAuthenticated = Cookies.get('shield_auth') === 'true';

  useEffect(() => {
    if (isAuthenticated && location.pathname !== '/login') {
      // Script 1: Declare digitalDataAC object and functions
      window.digitalDataAC = window.digitalDataAC || { events: [] };

      // Script 2: digitalDataAC objects
      window.digitalDataAC.events.push({
        "attributes": {
          "flowInfo": {
            "bookingType": "revenue",
            "service": "booking flow",
            "flowVariation": "standard"
          },
          "siteInfo": {
            "siteVersion": "5.34.2",
            "acoAdoVersion": "aco",
            "buildDate": "2023-09-05",
            "environment": "aem",
            "language": "en",
            "name": "global site",
            "type": "responsive",
            "siteEdition": "ca",
            "countrySelected": "ca",
            "viewportSize": "medium",
            "webProperty": "aircanada.com"
          },
          "userInfo": {
            "authState": "guest",
            "geoCountry": "ca",
            "geoProvince": "on",
            "geoCity": "toronto",
            "ado": {
              "agencyID": "123",
              "agentID": "abcd",
              "category": "iata",
              "categoryID": "0999989"
            },
            "aco": {
              "birthMonth": "09",
              "birthYear": "1986",
              "category": "no status",
              "countryOfResidence": "ca",
              "emailID": "d5ad1f94ce88479718e1423326d955c00b7ac20ed6f14439b35a443a0c39805a",
              "firstName": "john",
              "loginMethod": "aeroplan",
              "persistentLogin": false,
              "postalCode": "z5d",
              "seatPreference": null,
              "userID": "12345678",
              "mrc": "0",
              "amh_flag": "false",
              "ch_flag": "false",
              "ch_acquisitionSourceCode": "gsrp",
              "th_flag": "false",
              "usres_flag": "false",
              "coBrandLink": ["vbl", "vil"],
              "st_flag": "false",
              "ub_flag": "false"
            }
          },
          "profileInfo": {
            "daysSinceCurrentTier": 50,
            "daysSinceEnrollment": 146,
            "daysToPointsExpiry": 190,
            "daysToTierExpiry": 28,
            "enrollmentDate": "2020-01-30",
            "familyPointsBalance": 250,
            "mMileMember": "false",
            "mMileProgress": 900000,
            "pointsBalance": 15000,
            "pointsExpiryDate": "2020-12-31",
            "recentPointsAccrual": 18,
            "segmentsFlown": 8,
            "segmentsRequired": 10,
            "spend": 1800.52,
            "spendRequired": 3355.88
          }
        }
      });

      // Script 3: Adobe Target prehiding snippet
      (function(g, b, d, f) {
        (function(a, c, d) {
          if (a) {
            var e = b.createElement("style");
            e.id = c;
            e.innerHTML = d;
            a.appendChild(e);
          }
        })(b.getElementsByTagName("head")[0], "at-body-style", d);
        setTimeout(function() {
          var a = b.getElementsByTagName("head")[0];
          if (a) {
            var c = b.getElementById("at-body-style");
            c && a.removeChild(c);
          }
        }, f);
      })(window, document, "body {opacity: 0 !important}", 3E3);

      // Script 4: Adobe Tag Manager
      const adobeScript = document.createElement('script');
      adobeScript.src = "https://assets.adobedtm.com/14307738146c/2254567325f3/launch-6e42bc87e27e-staging.min.js";
      adobeScript.async = true;
      document.head.appendChild(adobeScript);
    }
  }, [isAuthenticated, location.pathname]);

  return null;
};

export default AnalyticsScripts; 