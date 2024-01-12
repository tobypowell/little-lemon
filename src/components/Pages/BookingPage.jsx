import { useState, useReducer, useEffect, useCallback } from 'react';
import Layout from '../Layout';
import FullWidthSection from '../FullWidthSection/FullWidthSection';
import BookingForm from '../BookingForm/BookingForm';
import { fetchAPI, submitAPI } from '../../utils/fakeApi';

// update booking form to display available times based on the selected date

// dispatcher
// change available times based on selected date
// for now return same available times regardless of date
const updateTimesReducer = (availableTimes, action) => {
  switch (action.type) {
    case 'change': {
      return [...availableTimes, action.reservation.bookingTime];
    }
    case 'displayAvailableTimes': {
      return [...availableTimes];
    }
    default: {
      throw Error('Unkown action: ', +action.type);
    }
  }
};

const BookingPage = () => {
  const initializeTimes = [
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00',
  ];

  const updateTimes = (availableTimes) => {
    return [...availableTimes];
  };

  const [availableTimes, dispatch] = useReducer(
    updateTimesReducer,
    initializeTimes,
    updateTimes
  );

  const bookingEvent = ['Birthday', 'Anniversary'];
  const [bookingDate, setBookingDate] = useState('');
  const [bookingTime, setBookingTime] = useState('');
  const [numOfGuests, setNumOfGuests] = useState(0);
  const [occasion, setOccasion] = useState(bookingEvent[0]);

  const createReservation = (reservation) => {
    console.log('new reservation: ', reservation);
    dispatch({
      type: 'change',
      reservation,
    });

    // Reset form fields
    setBookingDate('');
    setBookingTime(availableTimes[0]);
    setNumOfGuests(0);
    setOccasion(bookingEvent[0]);
  };

  const dateChange = async () => {
    if (bookingDate !== '') {
      const res = await fetchAPI(bookingDate);
      console.log('FAKE API: ', res);
      dispatch({
        type: 'displayAvailableTimes',
        date: bookingDate,
      });
    }
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
            dateChange={dateChange}
          />
        </section>
      </FullWidthSection>
    </Layout>
  );
};

export default BookingPage;
