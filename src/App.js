import HomePage from './components/Pages/HomePage';
import BookingPage from './components/Pages/BookingPage';
import BookingConfirmationPage from './components/Pages/BoookingConfirmationPage';
import NoMatchPage from './components/Pages/NoMatchPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/booking' element={<BookingPage />} />
        <Route path='/confirmed' element={<BookingConfirmationPage />} />
        <Route path='*' element={<NoMatchPage />} />
      </Routes>
    </Router>
  );
}

export default App;
