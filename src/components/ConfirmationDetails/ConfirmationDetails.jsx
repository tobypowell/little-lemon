import React from 'react';
import { Link } from 'react-router-dom';
import './ConfirmationDetails.css';
const ConfirmationDetails = ({
  bookingDate,
  bookingTime,
  numOfGuests,
  occasion,
}) => {
  return (
    <div className='confirmation-msg'>
      <img
        src='./imgs/confirm.jpg'
        alt='Booking confirmed'
        width='560'
        height='800'
      />
      <div className='details'>
        <h2>Great!.. that's all confirmed for:</h2>
        <ul>
          <li>
            <strong>Date: </strong>
            {bookingDate}
          </li>
          <li>
            <strong>For: </strong>
            {numOfGuests} guests dining
          </li>
          <li>
            <strong>Time: </strong>
            {bookingTime}
          </li>
          <li>
            <strong>Event: </strong>
            {occasion}
          </li>
        </ul>

        <p className='msg'>We look forward to seeing you soon!</p>
        <Link to='/' title='Back to Home page' className='cta'>
          Back to Home page
        </Link>
      </div>
    </div>
  );
};

export default ConfirmationDetails;
