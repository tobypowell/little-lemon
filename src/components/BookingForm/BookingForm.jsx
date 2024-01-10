import { useState } from 'react';
import './BookingForm.css';

const BookingForm = () => {
  return (
    <form className='booking-form'>
      <label htmlFor='res-date'>
        Choose date
        <input type='date' id='res-date' />
      </label>
      <label htmlFor='res-time'>
        Choose time
        <select id='res-time '>
          <option>17:00</option>
          <option>18:00</option>
          <option>19:00</option>
          <option>20:00</option>
          <option>21:00</option>
          <option>22:00</option>
        </select>
      </label>
      <label for='guests'>
        Number of guests
        <input type='number' placeholder='1' min='1' max='10' id='guests' />
      </label>
      <label for='occasion'>
        Occasion
        <select id='occasion'>
          <option>Birthday</option>
          <option>Anniversary</option>
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
