import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignUpPage';
import MainPage from './pages/MainPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/main' element={<MainPage />} />
      </Routes>
    </Router>
  );
};

export default App;
