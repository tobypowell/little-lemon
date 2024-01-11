import { useEffect } from 'react';
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
  displayAvailableTimes,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    createReservation({
      bookingDate,
      bookingTime,
      numOfGuests,
      occasion,
    });
  };

  const handleDateChange = (e) => {
    setBookingDate((curr) => {
      return (curr = e.target.value);
    });
  };

  return (
    <form className='booking-form' onSubmit={handleSubmit}>
      <label htmlFor='res-date'>
        Choose date
        <input
          value={bookingDate}
          type='date'
          id='res-date'
          onChange={(e) => handleDateChange(e)}
          required
        />
      </label>
      <label htmlFor='res-time'>
        Choose time
        <select
          id='res-time'
          value={bookingTime}
          onChange={(e) => setBookingTime(e.target.value)}>
          {availableTimes.map((time, idx) => (
            <option key={idx} value={time}>
              {time}
            </option>
          ))}
        </select>
      </label>
      <label htmlFor='guests'>
        Number of guests
        <input
          value={numOfGuests}
          onChange={(e) => setNumOfGuests(e.target.value)}
          type='number'
          placeholder='1'
          min='1'
          max='10'
          id='guests'
        />
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
      <input
        className='form-submit'
        type='submit'
        value='Make Your reservation'
      />
    </form>
  );
};

export default BookingForm;
