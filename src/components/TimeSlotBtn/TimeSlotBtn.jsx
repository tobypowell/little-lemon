import './TimeSlotBtn.css';

const TimeSlotBtn = ({ time, status, id, handleChecked }) => {
  return (
    <label
      className={`radio-label ${status ? 'disable' : ''}`}
      htmlFor={`t${id}`}>
      <input
        id={`t${id}`}
        disabled={status}
        className='radio-input'
        name='time'
        type='radio'
        value={time}
        onChange={handleChecked}
      />
      <span className='custom-radio' />
      <span className='label-text'>{time}</span>
    </label>
  );
};

export default TimeSlotBtn;
