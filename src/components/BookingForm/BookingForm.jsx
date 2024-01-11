import { useState } from 'react';
import './BookingForm.css';

const BookingForm = () => {
  const availableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  const bookingEvent = ['Birthday', 'Anniversary'];

  const [bookingDate, setBookingDate] = useState('');
  const [bookingTime, setBookingTime] = useState(availableTimes[0]);
  const [numOfGuests, setNumOfGuests] = useState(0);
  const [occasion, setOccasion] = useState(bookingEvent[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBooking = {
      bookingDate,
      bookingTime,
      numOfGuests,
      occasion,
    };

    console.log(newBooking);
    // Reset form fields
    setBookingDate('');
    setBookingTime(availableTimes[0]);
    setNumOfGuests(0);
    setOccasion(bookingEvent[0]);
  };
  return (
    <form className='booking-form' onSubmit={handleSubmit}>
      <label htmlFor='res-date'>
        Choose date
        <input
          value={bookingDate}
          type='date'
          id='res-date'
          onChange={(e) => setBookingDate(e.target.value)}
        />
      </label>
      <label htmlFor='res-time'>
        Choose time
        <select
          id='res-time'
          value={bookingTime}
          onChange={(e) => setBookingTime(e.target.value)}>
          {availableTimes.map((time) => (
            <option key={time} value={time}>
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
