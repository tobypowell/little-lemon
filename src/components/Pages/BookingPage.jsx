import { useState, useReducer, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../Layout';
import FullWidthSection from '../FullWidthSection/FullWidthSection';
import BookingForm from '../BookingForm/BookingForm';

import { fetchAPI, submitAPI } from '../../utils/fakeApi';

// dispatcher
// change available times based on selected date
const updateTimesReducer = (state, action) => {
  switch (action.type) {
    case 'createReservation': {
      return {
        ...state,
        reservation: action.reservation,
      };
    }
    case 'displayAvailableTimes': {
      return {
        times: [...action.times],
      };
    }
    default: {
      throw Error('Unkown action: ', +action.type);
    }
  }
};

const BookingPage = () => {
  const intialState = {
    times: [],
    reservation: {},
  };
  const navigate = useNavigate();
  const bookingEvent = ['Birthday', 'Anniversary'];
  const [bookingDate, setBookingDate] = useState();
  const [bookingTime, setBookingTime] = useState('');
  const [numOfGuests, setNumOfGuests] = useState(0);
  const [occasion, setOccasion] = useState(bookingEvent[0]);
  const [loading, setLoading] = useState(false);
  const [state, dispatch] = useReducer(updateTimesReducer, intialState);

  // initialize times of first render
  // no available times yet, until a date is selected

  const initializeTimes = useCallback((bookingDate) => {
    if (bookingDate !== '') {
      const times = fetchAPI(bookingDate);
      dispatch({
        type: 'displayAvailableTimes',
        times,
      });
    }
  }, []);

  useEffect(() => {
    // Simulate Api fetch
    let timeout;
    if (loading) {
      timeout = setTimeout(() => {
        navigate('/confirmed');
      }, 5000);
    }
    // clean up
    return () => {
      clearTimeout(timeout);
    };
  }, [loading, navigate]);

  const createReservation = ({
    bookingDate,
    bookingTime,
    numOfGuests,
    occasion,
  }) => {
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
    <Layout>
      <FullWidthSection classes='bookingPage' bgColor={'transparent'}>
        <section className='container' id='booking'>
          <h1>Booking Page</h1>
          <BookingForm
            availableTimes={state.times}
            bookingEvent={bookingEvent}
            createReservation={createReservation}
            bookingDate={bookingDate}
            bookingTime={bookingTime}
            numOfGuests={numOfGuests}
            occasion={occasion}
            setBookingDate={setBookingDate}
            setBookingTime={setBookingTime}
            setNumOfGuests={setNumOfGuests}
            setOccasion={setOccasion}
            initializeTimes={initializeTimes}
            loading={loading}
          />
        </section>
      </FullWidthSection>
    </Layout>
  );
};

export default BookingPage;
