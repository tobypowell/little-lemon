import { useState, useEffect, useCallback } from 'react';
import './TimeButtons.css';

const TimeButtons = ({ availableTimes }) => {
  const times = [
    '17:00',
    '17:30',
    '18:00',
    '18:30',
    '19:00',
    '19:30',
    '20:00',
    '20:30',
    '21:00',
    '21:30',
    '22:00',
    '22:30',
    '23:00',
    '23:30',
  ];

  const btns = [];

  const compareArr = (a1, a2) => {
    for (let i = 0; i < times.length; i++) {
      const t = a2.find((e) => e === a1[i]);
      if (t === undefined) {
        btns.push(<TimeBtn key={i} status={true} time={a1[i]} />);
      } else {
        btns.push(<TimeBtn key={i} time={a1[i]} />);
      }
    }
  };
  compareArr(times, availableTimes);

  return <div className='availableTimes'>{btns}</div>;
};

const TimeBtn = ({ time, status }) => {
  const [checked, setChecked] = useState(false);

  const handleChange = (e) => {
    setChecked(!checked);
  };
  const classes = checked ? 'checked ' : 'label-text';
  return (
    // <button
    //   disabled={status}
    //   className={`${selected ? 'selected' : ''}`}
    //   onClick={() => handleClicked(time)}>
    //   {time}
    // </button>

    <label className={`radio-label ${status ? 'disable' : ''}`} htmlFor='time'>
      <input
        disabled={status}
        className='radio-input'
        name='time'
        type='radio'
        checked={checked}
        value={time}
        onChange={handleChange}
      />
      <span className='custom-radio' />
      <span className='label-text'>{time}</span>
    </label>
  );
};

export default TimeButtons;

/*
 - make an array of all the button
 
click btn 
  - grab id from btn clicked
  - remove selected class from all btns that dont have that id
  - add selected class to btn clicked based on id

*/
