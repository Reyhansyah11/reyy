import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HomePage from './Pages/HomePage';
import ContactPage from './Pages/ContactPage';
import PortfolioPage from './Pages/PortfolioPage';
import GamePage from './Pages/GamePage';
import MprojectPage from './Pages/MprojectPage';
import ProjectPage from './Pages/ProjectPage';

function App() {
  return (
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/Pages/ContactPage' element={<ContactPage />} />
          <Route path='/Pages/PortfolioPage' element={<PortfolioPage />} />
          <Route path='/Pages/GamePage' element={<GamePage />} />
          <Route path='/Pages/MprojectPage' element={<MprojectPage />} />
          <Route path='/Pages/ProjectPage' element={<ProjectPage />} />
        </Routes>
      </Router>
  );
}

export default App;
