
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Architecture from './pages/Architecture';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/architecture" element={<Architecture />} />
      </Routes>
    </Router>
  );
}

export default App;
