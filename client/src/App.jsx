import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import GovernmentSchemes from './components/GovernmentSchemes';
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/schemes" element={<GovernmentSchemes />} />
      </Routes>
    </Router>
  );
}

export default App;