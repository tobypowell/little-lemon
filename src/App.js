import HomePage from './components/Pages/HomePage';
import BookingPage from './components/Pages/BookingPage';
import BookingConfirmationPage from './components/Pages/BoookingConfirmationPage';
import NoMatchPage from './components/Pages/NoMatchPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useGlobalContext } from './Context/ReservationProvider';

function App() {
  const { test1, test2 } = useGlobalContext();

  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/booking' element={<BookingPage />} />
        <Route
          path='/confirmed'
          element={<BookingConfirmationPage vals={{ test1, test2 }} />}
        />
        <Route path='*' element={<NoMatchPage />} />
      </Routes>
    </Router>
  );
}

export default App;
