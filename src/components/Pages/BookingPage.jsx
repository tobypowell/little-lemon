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

const BookingPage = () => {
  const bookingEvent = ['Birthday', 'Anniversary'];
  const [bookingDate, setBookingDate] = useState('');
  const [bookingTime, setBookingTime] = useState('');
  const [numOfGuests, setNumOfGuests] = useState(0);
  const [occasion, setOccasion] = useState(bookingEvent[0]);

  const times = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

  // initialize times of first render
  useEffect(() => {
    initializeTimes(new Date());
  }, []);

  const initializeTimes = (bookingDate) => {
    if (bookingDate !== '') {
      const times = fetchAPI(bookingDate);

      dispatch({
        type: 'displayAvailableTimes',
        times,
      });
    }
  };

  const [availableTimes, dispatch] = useReducer(updateTimesReducer, times);

  const createReservation = (reservation) => {
    const response = submitAPI();
    console.log('new reservation: ', reservation);
    dispatch({
      type: 'change',
      reservation,
    });

    console.log('res :', response);

    // Reset form fields
    setBookingDate('');
    setBookingTime(availableTimes[0]);
    setNumOfGuests(0);
    setOccasion(bookingEvent[0]);
  };

  return (
    <Layout>
      <FullWidthSection classes='bookingPage' bgColor={''}>
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
