import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import GovernmentSchemes from './components/GovernmentSchemes';
import RegistrationPage from './components/RegistrationPage';
import AboutUsPage from "./components/AboutUsPage";
import DivisionPage from './components/DivisionPage';
import ActAndRulesPage from './components/ActAndRules';
import RelatedLinks from './components/RelatedLinks';
import Scheme from './components/Scheme';
import FarmerOptions from './components/FarmerOptions';
import Help from './components/Help';
import Terms from './components/Terms';
import Feedback from './components/Feedback';
import Contact from './components/Contact';
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/schemes" element={<GovernmentSchemes />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/division" element={<DivisionPage />} />
        <Route path="/termsandconditions" element={<Terms/>} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/contactus" element={<Contact />} />
        <Route path="/help" element={<Help />} />
        <Route path="/actandrules" element={<ActAndRulesPage />} />
        <Route path="/relatedlinks" element={<RelatedLinks />} />
        <Route path="/schemes" element={<Scheme />} />
        <Route path="/farmer-option" element={<FarmerOptions />} />
        <Route path="/plant-disease-detection" element={<div>Plant Disease Detection Page</div>} />
        <Route path="/land-history" element={<div>Land History Page</div>} />
      </Routes>
    </Router>
  );
}

export default App;