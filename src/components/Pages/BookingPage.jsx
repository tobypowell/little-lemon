import { useState, useReducer, useEffect, useCallback, useMemo } from 'react';
import Layout from '../Layout';
import BookingForm from '../BookingForm/BookingForm';

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
      console.log('IN: ', action);
      return [...availableTimes, action.bookingDate];
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

  const [availableTimes, dispatch] = useReducer(
    updateTimesReducer,
    initializeTimes
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

  const displayAvailableTimes = (bookingDate) => {
    console.log('captured: ', availableTimes);
    dispatch({
      type: 'displayAvailableTimes',
      date: bookingDate,
    });
  };

  return (
    <Layout>
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
          displayAvailableTimes={displayAvailableTimes}
        />
      </section>
    </Layout>
  );
};

export default BookingPage;
