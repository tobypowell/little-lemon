import {
  useState,
  createContext,
  useContext,
  useCallback,
  useReducer,
} from 'react';
import { reservationsReducer, intialState } from './reducer';
import { fetchAPI, submitAPI } from '../utils/fakeApi';

const ReservationContext = createContext();

const ReservationProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reservationsReducer, intialState);
  const [loading, setLoading] = useState(false);

  const initializeTimes = useCallback((bookingDate) => {
    if (bookingDate !== '') {
      const times = fetchAPI(bookingDate);
      dispatch({
        type: 'displayAvailableTimes',
        times,
      });
    }
  }, []);

  const createReservation = (
    bookingDate,
    bookingTime,
    numOfGuests,
    occasion
  ) => {
    dispatch({
      type: 'createReservation',
      reservation: {
        bookingDate,
        bookingTime,
        numOfGuests,
        occasion,
      },
    });
    submitForm();
  };

  const submitForm = () => {
    setLoading(true);
    submitAPI();
  };

  return (
    <ReservationContext.Provider
      value={{
        state,
        initializeTimes,
        createReservation,
        loading,
        setLoading,
      }}>
      {children}
    </ReservationContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(ReservationContext);
};

export default ReservationProvider;
