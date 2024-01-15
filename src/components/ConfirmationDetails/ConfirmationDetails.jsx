import React from 'react';
import './ConfirmationDetails.css';
const ConfirmationDetails = () => {
  return (
    <div className='confirmation-msg'>
      <img src='./imgs/confirm.jpg' alt='Booking confirmed' />
      <div className='details'>
        <h2>That's all confirmed for:</h2>
        <ul>
          <li>
            <strong>Date: </strong>21-02-2024
          </li>
          <li>
            <strong>For: </strong>2 guests dining
          </li>
          <li>
            <strong>Time: </strong>19:00
          </li>
          <li>
            <strong>Event: </strong>Anniversary
          </li>
        </ul>

        <p className='msg'>We look forward to seeing you!</p>
      </div>
    </div>
  );
};

export default ConfirmationDetails;
