import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import URLShortenerPage from '../pages/URLShortenerPage';
import StatisticsPage from '../pages/StatisticsPage';

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<URLShortenerPage />} />
        <Route path="/statistics" element={<StatisticsPage />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;