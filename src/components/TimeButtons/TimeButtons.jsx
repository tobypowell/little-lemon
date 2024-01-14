import TimeSlotBtn from '../TimeSlotBtn/TimeSlotBtn';
import './TimeButtons.css';

const TimeButtons = ({ availableTimes, setBookingTime, handleChecked }) => {
  const timesArr = [
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

  // Determine what the available times are:
  // loop through timesArr
  // for each loop iteration check to see if availableTimes[i] matches an item in timesArr
  // if it exists push in array, if it doesn't exisit push in with disabled status
  const btns = [];
  const compareArr = (times, avTimes) => {
    for (let i = 0; i < times.length; i++) {
      // will either rettun a time eg: 17:00 or undefined
      const time = avTimes.find((t) => t === times[i]);

      // push the item in the btn array, and set the
      // disabled status based on whether time is undefined or not
      btns.push(
        <TimeSlotBtn
          key={i}
          id={i}
          status={time === undefined ? true : false}
          time={times[i]}
          setBookingTime={setBookingTime}
          handleChecked={handleChecked}
        />
      );
    }
  };
  compareArr(timesArr, availableTimes);

  return <div className='availableTimes'>{btns}</div>;
};

export default TimeButtons;
