import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Guide from './pages/Guide';
import TryNow from './pages/TryNow';
import DetectionResult from './pages/DetectionResult';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/guide" element={<Guide />} />
        <Route path="/try-now" element={<TryNow />} />
        <Route path="/detection-result" element={<DetectionResult />} />
      </Routes>
    </Router>
  );
}

export default App;