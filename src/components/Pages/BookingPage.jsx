import { useState, useReducer, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../Layout';
import FullWidthSection from '../FullWidthSection/FullWidthSection';
import BookingForm from '../BookingForm/BookingForm';
import SuccessModal from '../SuccessModal/SuccessModal';
import { fetchAPI, submitAPI } from '../../utils/fakeApi';

// dispatcher
// change available times based on selected date
const updateTimesReducer = (availableTimes, action) => {
  switch (action.type) {
    case 'createReservation': {
      return [...availableTimes];
    }
    case 'displayAvailableTimes': {
      console.log(action);
      return [...action.times];
    }
    default: {
      throw Error('Unkown action: ', +action.type);
    }
  }
};

const BookingPage = () => {
  const navigate = useNavigate();
  const bookingEvent = ['Birthday', 'Anniversary'];
  const [bookingDate, setBookingDate] = useState();
  const [bookingTime, setBookingTime] = useState('');
  const [numOfGuests, setNumOfGuests] = useState(0);
  const [occasion, setOccasion] = useState(bookingEvent[0]);

  // initialize times of first render
  // no available times yet, until a date is selected
  const intialState = {
    times: [],
    reservation: {},
  };
  const initializeTimes = useCallback((bookingDate) => {
    if (bookingDate !== '') {
      const times = fetchAPI(bookingDate);
      dispatch({
        type: 'displayAvailableTimes',
        times,
      });
    }
  }, []);

  const [availableTimes, dispatch] = useReducer(updateTimesReducer, []);

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
    const response = submitAPI();
    console.log('API res :', response);

    // Reset form fields
    setBookingDate('');
    setBookingTime('');
    setNumOfGuests(0);
    setOccasion(bookingEvent[0]);

    // navigate('/');
  };

  return (
    <Layout>
      <FullWidthSection classes='bookingPage' bgColor={'transparent'}>
        <section className='container' id='booking'>
          <h1>Booking Page</h1>
          <BookingForm
            availableTimes={availableTimes}
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
          />
          <SuccessModal reservation={'reservation'} />
        </section>
      </FullWidthSection>
    </Layout>
  );
};

export default BookingPage;
