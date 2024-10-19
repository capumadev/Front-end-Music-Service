import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainPage from './Components/Main_page';
import Start_page from './Components/Start_page';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/main" element={<Start_page />} />
      </Routes>
    </Router>
  );
}

export default App;