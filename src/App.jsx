import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import GetPatientHistory from './components/GetPatientHistory';
import PostPatientHistory from './components/PostPatientHistory';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Search" element={<GetPatientHistory />} />
        <Route path="/Register" element={<PostPatientHistory />} />
      </Routes>
    </Router>
  );
}

export default App;
