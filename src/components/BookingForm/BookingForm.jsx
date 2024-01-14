import { useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import TimeButtons from '../TimeButtons/TimeButtons';
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
  const handleSubmit = (e) => {
    e.preventDefault();
    createReservation({
      bookingDate,
      bookingTime,
      numOfGuests,
      occasion,
    });
  };

  useEffect(() => {
    initializeTimes(bookingDate);
  }, [bookingDate, initializeTimes]);

  const handleChange = (e) => {
    setBookingDate(e.target.value);
  };

  const formik = useFormik({
    initialValues: {
      resDate: bookingDate,
      guests: 1,
      event: 'Birthday',
    },
    onSubmit: (values) => {
      console.log('VALS: ', values);
      console.log(bookingDate);
      createReservation(bookingDate, bookingTime, numOfGuests, occasion);
    },
  });

  return (
    <div className='form-wrapper'>
      <form className='booking-form' onSubmit={formik.handleSubmit}>
        <label htmlFor='resDate'>
          Choose date
          <input
            type='date'
            id='resDate'
            {...formik.getFieldProps('resDate')}
          />
        </label>
        <label htmlFor='res-time'>
          Choose time
          <TimeButtons
            availableTimes={availableTimes}
            setBookingTime={setBookingTime}
          />
        </label>

        <label htmlFor='guests'>
          Number of guests
          <input
            onChange={(e) => setNumOfGuests(e.target.value)}
            type='number'
            min='1'
            max='10'
            id='guests'
            {...formik.getFieldProps('guests')}
          />
        </label>
        <label htmlFor='occasion'>
          Occasion
          <select
            id='occasion'
            onChange={(e) => setOccasion(e.target.value)}
            {...formik.getFieldProps('event')}>
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
