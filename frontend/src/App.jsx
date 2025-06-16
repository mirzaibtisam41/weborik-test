import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import {LoginPage} from './pages/auth';
import './App.css';

const App = () => (
  <Router>
    <Routes>
      <Route index element={<Navigate to="/auth/login" replace />} />
      <Route path="/auth/login" element={<LoginPage />} />
    </Routes>
  </Router>
);

export default App;
