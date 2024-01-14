import { useEffect, useState } from 'react';
import TimeButtons from '../TimeButtons/TimeButtons';
import FormError from '../FormError/FormError';
import './BookingForm.css';

const BookingForm = ({
  availableTimes,
  bookingEvent,
  createReservation,
  bookingDate,
  setBookingDate,
  bookingTime,
  setBookingTime,
  numOfGuests,
  setNumOfGuests,
  occasion,
  setOccasion,
  initializeTimes,
}) => {
  const [dateErr, setDateErr] = useState(false);
  const [timeErr, setTimeErr] = useState(false);
  const [guestErr, setGuestErr] = useState(false);

  const handleChange = (e) => {
    setBookingDate(e.target.value);
    setDateErr(false);
  };

  const handleChecked = (e) => {
    setBookingTime(e.target.value);
    setTimeErr(false);
  };

  const handleGuestChange = (e) => {
    setNumOfGuests(e.target.value);
    setGuestErr(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation;
    if (bookingDate === undefined) {
      setDateErr(true);
    }
    if (bookingTime === '') {
      setTimeErr(true);
    }
    if (numOfGuests <= 0) {
      setGuestErr(true);
    }
    if (bookingDate && bookingTime && numOfGuests && occasion) {
      createReservation({
        bookingDate,
        bookingTime,
        numOfGuests,
        occasion,
      });
    }
  };

  useEffect(() => {
    initializeTimes(bookingDate);
  }, [bookingDate, initializeTimes]);

  return (
    <div className='form-wrapper'>
      <form className='booking-form' onSubmit={handleSubmit} noValidate>
        <label htmlFor='res-date'>
          Choose date
          <input
            value={`${bookingDate}`}
            type='date'
            id='res-date'
            onChange={handleChange}
            required
          />
          {dateErr && <FormError>Please select a date</FormError>}
        </label>
        <label htmlFor='res-time'>
          Choose time
          <TimeButtons
            availableTimes={availableTimes}
            setBookingTime={setBookingTime}
            handleChecked={handleChecked}
          />
          {timeErr && <FormError>Please select a time</FormError>}
        </label>

        <label htmlFor='guests'>
          Number of guests
          <input
            value={numOfGuests}
            onChange={handleGuestChange}
            type='number'
            placeholder='1'
            min='1'
            max='10'
            id='guests'
          />
          {guestErr && <FormError>Please add at least 1 guest</FormError>}
        </label>
        <label htmlFor='occasion'>
          Occasion
          <select
            id='occasion'
            value={occasion}
            onChange={(e) => setOccasion(e.target.value)}>
            {bookingEvent.map((event) => (
              <option key={event} value={event}>
                {event}
              </option>
            ))}
          </select>
        </label>
        <input className='form-submit' type='submit' value='Make Reservation' />
      </form>
    </div>
  );
};

export default BookingForm;
