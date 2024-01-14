import { useState, useReducer, useEffect, useCallback } from 'react';
import Layout from '../Layout';
import FullWidthSection from '../FullWidthSection/FullWidthSection';
import BookingForm from '../BookingForm/BookingForm';
import { fetchAPI, submitAPI } from '../../utils/fakeApi';

// dispatcher
// change available times based on selected date
const updateTimesReducer = (availableTimes, action) => {
  switch (action.type) {
    case 'change': {
      return [...availableTimes];
    }
    case 'displayAvailableTimes': {
      return [...action.times];
    }
    default: {
      throw Error('Unkown action: ', +action.type);
    }
  }
};
let today = new Date().toLocaleDateString('en-GB');
today = today.split('/').reverse().join().replaceAll(',', '-');

const BookingPage = () => {
  const bookingEvent = ['Birthday', 'Anniversary'];
  const [bookingDate, setBookingDate] = useState(today);
  const [bookingTime, setBookingTime] = useState('');
  const [numOfGuests, setNumOfGuests] = useState(0);
  const [occasion, setOccasion] = useState(bookingEvent[0]);

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
    initializeTimes(today);
  }, [initializeTimes]);

  const [availableTimes, dispatch] = useReducer(updateTimesReducer, []);

  const createReservation = (reservation) => {
    const response = submitAPI();
    console.log('new reservation: ', reservation);
    dispatch({
      type: 'change',
      reservation,
    });

    console.log('res :', response);

    // Reset form fields
    setBookingDate(today);
    setBookingTime('');
    setNumOfGuests(0);
    setOccasion(bookingEvent[0]);
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
        </section>
      </FullWidthSection>
    </Layout>
  );
};

export default BookingPage;
