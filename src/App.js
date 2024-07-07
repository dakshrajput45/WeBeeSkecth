import AboutUs from "./pages/AboutUs"
import DigitalMarketing from "./pages/DigitalMarketing";
import NavBar from "./components/NavBar";
import Blog from "./pages/Blog"
import Contact from "./pages/Contact";
import { Route, Routes } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "./Context/AppContext";
import AnalyticsServicePage from "./pages/AnalyticsServicesPage";
import ContentMarketingPage from "./pages/ContentMarketingPage";
import SearchEngineMarketingPage from "./pages/SearchEngineMarketing";
import SocialMediaMarketingPage from "./pages/SocialMediaMarketing";
import PayPerClickPage from "./pages/PayPerClickPage";
import WebDevPage from "./pages/WebDevelopment";
import AppDevelopmentPage from "./pages/AppDevelopment";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsAndConditionPage from "./pages/TermsAndCondition";

function App() {
  const {active} = useContext(AppContext);
  return (
    <div className="App">
      <div>
        <NavBar />
      </div>
      <div className={`component-body ${active ? 'nav-open' : ''}`}>
        <Routes>
          <Route path="/" element={<DigitalMarketing />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/analytics-and-data-insights" element={<AnalyticsServicePage/>} />
          <Route path="/content-marketing" element={<ContentMarketingPage/>} />
          <Route path="/search-engine-marketing" element={<SearchEngineMarketingPage/>} />
          <Route path="/social-media-marketing" element={<SocialMediaMarketingPage/>} />
          <Route path="/ppc-advertising" element={<PayPerClickPage/>} />
          <Route path="/web-development" element={<WebDevPage/>} />
          <Route path="/app-development" element={<AppDevelopmentPage/>} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage/>} />
          <Route path="/terms-and-conditions" element={<TermsAndConditionPage/>} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;