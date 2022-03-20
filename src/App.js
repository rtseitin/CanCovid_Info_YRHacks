import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import InformationPage from './pages/Information';
import NotFound from './pages/NotFound';
import ProvincePage from './pages/ProvincePage';


function App() {
  const provinceInfo = [
    {
      name: "Québec",
      code: "QC",
      id: 0,
      resources: [
        {id: 0, description: "Vaccinations", url: "https://www.quebec.ca/en/health/health-issues/a-z/2019-coronavirus/progress-of-the-covid-19-vaccination"},
        {id: 1, description: "Confinment, Symptoms, and Testing Instructions", url: "https://www.quebec.ca/en/health/health-issues/a-z/2019-coronavirus/answers-questions-coronavirus-covid19/confinement-instructions-symptoms-treatments-covid-19"},
        {id: 2, description: "Hotspot Lockdown Information", url: "https://www.quebec.ca/en/health/health-issues/a-z/2019-coronavirus/progressive-regional-alert-and-intervention-system/level-4-maximum-alert-red"}
      ]
    },
    {
      name: "Ontario",
      code: "ON",
      id: 1,
      resources: [
        {id: 0, description: "Vaccinations", url: "https://covid-19.ontario.ca/covid-19-vaccines-ontario"},
        {id: 1, description: "Confinment, Symptoms, and Testing Instructions", url: "https://www.ontario.ca/page/reopening-ontario-frequently-asked-questions-about-stage-3"},
        {id: 2, description: "Covid-19 Testing Locations", url: "https://covid-19.ontario.ca/covid-19-test-and-testing-location-information"}
      ]
    },
    {
      name: "British Columbia",
      code: "BC",
      id: 2,
      resources: [
        {id: 0, description: "Vaccinations", url: "https://www2.gov.bc.ca/gov/content/covid-19/vaccine/plan"},
        {id: 1, description: "Common Questions (Prevention, Protection, Spread, and more)", url: "http://www.bccdc.ca/health-info/diseases-conditions/covid-19/common-questions"},
        {id: 2, description: "Covid-19 Testing Locations", url: "http://www.bccdc.ca/health-info/diseases-conditions/covid-19/testing"}
      ]
    },
    {
      name: "Prince Edward Island",
      code: "PE",
      id: 3,
      resources: [
        {id: 0, description: "Vaccinations", url: "https://www.princeedwardisland.ca/en/information/health-and-wellness/getting-covid-19-vaccine"},
        {id: 1, description: "Restrictions", url: "https://www.princeedwardisland.ca/en/covid19"},
        {id: 2, description: "Covid-19 Testing Locations", url: "https://www.princeedwardisland.ca/en/information/health-and-wellness/covid-19-testing-in-pei"}
      ]
    },
    {
      name: "Northwest Territories",
      code: "NT",
      id: 4,
      resources: [
        {id: 0, description: "Vaccinations", url: "https://www.gov.nt.ca/covid-19/services/covid-19-vaccine"},
        {id: 1, description: "Restrictions", url: "https://www.gov.nt.ca/covid-19/en/services/travel-self-isolation/arriving-nwt"},
        {id: 2, description: "Covid-19 Testing Locations", url: "https://www.gov.nt.ca/covid-19/en/services/about-covid-19/testing"}
      ]
    },
    {
      name: "Nunavut",
      code: "NU",
      id: 5,
      resources: [
        {id: 0, description: "Vaccinations", url: "https://www.gov.nu.ca/health/information/covid-19-vaccination"},
        {id: 1, description: "Restrictions", url: "https://www.gov.nu.ca/health/news/covid-19-department-health-services-update"},
        {id: 2, description: "General Information", url: "https://www.gov.nu.ca/health/information/covid-19-novel-coronavirus"}
      ]
    },
    {
      name: "Yukon",
      code: "YT",
      id: 6,
      resources: [
        {id: 0, description: "Vaccinations", url: "https://yukon.ca/en/covid-19-vaccine"},
        {id: 1, description: "Common Questions (Prevention, Protection, Spread, and more)", url: "https://yukon.ca/en/frequently-asked-questions-about-2019-novel-coronavirus"},
        {id: 2, description: "Covid-19 Testing Locations", url: "https://yukon.ca/en/find-respiratory-assessment-centre"}
      ]
    },
    {
      name: "Nova Scotia",
      code: "NS",
      id: 7,
      resources: [
        {id: 0, description: "Vaccinations", url: "https://novascotia.ca/coronavirus/vaccine/"},
        {id: 1, description: "Common Questions (Prevention, Protection, Spread, and more)", url: "https://www.novascotia.com/travel-info/covid-19-faq"},
        {id: 2, description: "Covid-19 Testing", url: "https://www.nshealth.ca/coronavirustesting"},
        {id: 3, description: "General Public Health Resources", url: "http://www.nshealth.ca/coronavirus-home/coronavirus-covid-19-resources"},
      ]
    },
    {
      name: "Newfoundland and Labrador",
      code: "NL",
      id: 8,
      resources: [
        {id: 0, description: "Vaccinations", url: "https://www.gov.nl.ca/covid-19/vaccine/"},
        {id: 1, description: "Common Questions (Prevention, Protection, Spread, and more)", url: "https://www.gov.nl.ca/covid-19/faqs/"},
        {id: 2, description: "General Information", url: "https://www.gov.nl.ca/covid-19/"}
      ]
    },
    {
      name: "New Brunswick",
      code: "NB",
      id: 9,
      resources: [
        {id: 0, description: "Vaccinations", url: "https://www2.gnb.ca/content/gnb/en/corporate/promo/covid-19/vaccine.html"},
        {id: 1, description: "Common Questions (Prevention, Protection, Spread, and more)", url: "https://www2.gnb.ca/content/gnb/en/gateways/for_business/covid19/faq.html"},
        {id: 2, description: "General Information", url: "https://www2.gnb.ca/content/gnb/en/departments/ocmoh/cdc/content/respiratory_diseases/coronavirus.html"}
      ]
    },
    {
      name: "Manitoba",
      code: "MB",
      id: 10,
      resources: [
        {id: 0, description: "Vaccinations", url: "https://www.gov.mb.ca/covid19/vaccine/index.html"},
        {id: 1, description: "Common Questions (Prevention, Protection, Spread, and more)", url: "https://www.gov.mb.ca/covid19/vaccine/faq.html"},
        {id: 2, description: "Covid-19 Testing Locations", url: "https://www.gov.mb.ca/covid19/testing/index.html"}
      ]
    },
    {
      name: "Saskatchewan",
      code: "SK",
      id: 11,
      resources: [
        {id: 0, description: "Vaccinations", url: "https://www.saskatchewan.ca/COVID19-vaccine"},
        {id: 1, description: "Common Questions (Prevention, Protection, Spread, and more)", url: "https://www.saskatchewan.ca/government/health-care-administration-and-provider-resources/treatment-procedures-and-guidelines/emerging-public-health-issues/2019-novel-coronavirus"},
        {id: 2, description: "Covid-19 Testing Locations", url: "https://www.saskatchewan.ca/covid19-testing"}
      ]
    },
    {
      name: "Alberta",
      code: "AB",
      id: 12,
      resources: [
        {id: 0, description: "Vaccinations", url: "https://www.albertahealthservices.ca/topics/Page17349.aspx"},
        {id: 1, description: "Common Questions (Prevention, Protection, Spread, and more)", url: "https://www.alberta.ca/coronavirus-info-for-albertans.aspx"},
        {id: 2, description: "Covid-19 Testing and Symptoms", url: "https://www.alberta.ca/covid-19-testing-in-alberta.aspx"}
      ]
    }    
  ]

  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route exact path="/info">
              <InformationPage information={provinceInfo}/>
            </Route>
            <Route path="/info/:provinceCode">
              <ProvincePage information={provinceInfo}/>
            </Route>
            <Route path="*">
              <NotFound/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
