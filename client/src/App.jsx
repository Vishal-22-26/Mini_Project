import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import GovernmentSchemes from './components/GovernmentSchemes';
import RegistrationPage from './components/RegistrationPage'
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/schemes" element={<GovernmentSchemes />} />
        <Route path="/register" element={<RegistrationPage />} />
      </Routes>
    </Router>
  );
}

export default App;