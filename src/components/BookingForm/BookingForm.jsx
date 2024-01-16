import { useEffect, useState } from 'react';
import TimeButtons from '../TimeButtons/TimeButtons';
import FormError from '../FormError/FormError';
import Loader from '../Loader/Loader';
import './BookingForm.css';

const BookingForm = ({
  availableTimes,
  bookingEvent,
  submitForm,
  initializeTimes,
  loading,
}) => {
  const [dateErr, setDateErr] = useState(false);
  const [timeErr, setTimeErr] = useState(false);
  const [guestErr, setGuestErr] = useState(false);
  const [bookingDate, setBookingDate] = useState();
  const [bookingTime, setBookingTime] = useState('');
  const [numOfGuests, setNumOfGuests] = useState(0);
  const [occasion, setOccasion] = useState(bookingEvent[0]);

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
      submitForm(bookingDate, bookingTime, numOfGuests, occasion);
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
            name='res-date'
            value={`${bookingDate}`}
            type='date'
            id='res-date'
            onChange={handleChange}
            required
          />
          {dateErr && <FormError>Please select a date</FormError>}
        </label>
        <div className='time-slots'>
          <h5>Choose time</h5>
          <TimeButtons
            availableTimes={availableTimes}
            setBookingTime={setBookingTime}
            handleChecked={handleChecked}
          />
          {timeErr && <FormError>Please select a time</FormError>}
        </div>

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
        <button aria-label='on Click' type='submit' className='form-submit'>
          {loading ? <Loader /> : 'Make Reservation'}
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
