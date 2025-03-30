import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import GovernmentSchemes from './components/GovernmentSchemes';
import RegistrationPage from './components/RegistrationPage';
import FarmerOptions from './components/FarmerOptions';
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/schemes" element={<GovernmentSchemes />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/farmer-option" element={<FarmerOptions />} />
        <Route path="/plant-disease-detection" element={<div>Plant Disease Detection Page</div>} />
        <Route path="/land-history" element={<div>Land History Page</div>} />
      </Routes>
    </Router>
  );
}

export default App;