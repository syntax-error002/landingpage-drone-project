
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Architecture from './pages/Architecture';
import SmoothScroll from './components/SmoothScroll';

function App() {
  return (
    <Router>
      <SmoothScroll>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/architecture" element={<Architecture />} />
        </Routes>
      </SmoothScroll>
    </Router>
  );
}

export default App;
