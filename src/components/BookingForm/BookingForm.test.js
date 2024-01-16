import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import BookingForm from './BookingForm';

const reservation = {
  bookingDate: '2024-01-01',
  bookingTime: '19:00',
  numOfGuests: 6,
  occasion: 'Birthday',
};
const renderComponent = () => {
  const availableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  const bookingEvent = ['birthday', 'anniversary'];
  const loading = false;
  const initializeTimes = jest.fn();
  const submitForm = jest.fn();

  const { container } = render(
    <BookingForm
      bookingEvent={bookingEvent}
      availableTimes={availableTimes}
      initializeTimes={initializeTimes}
      loading={loading}
      submitForm={submitForm}
    />
  );
  return {
    container,
  };
};

test('Renders the Booking form Heading', () => {
  // render component
  renderComponent();

  // grab elements
  const button = screen.getByRole('button', {
    name: /on click/i,
  });

  // Assertion - check component is doing what we expect
  expect(button).toBeInTheDocument();
});

// InitializeTimes function
test('Returns list of available times when initializeTimes is called', () => {
  const mockFunction = jest.fn(() => {
    return {
      times: [],
      reservation,
    };
  });

  // render component
  renderComponent();

  // Assertion - test list is returning a list of times
  expect(mockFunction()).toStrictEqual({
    times: [],
    reservation: reservation,
  });
});

// TODO - Get this test to pass. Study more on testing
//updateTimes function
test('Returns the same value that is in state', async () => {
  const mockFunction = jest.fn(reservation);

  // render component
  const { container } = renderComponent();

  // grab elements
  // eslint-disable-next-line
  const dateSelect = container.querySelector('input[type= date]');

  const time = screen.getByRole('radio', {
    name: /17:00/i,
  });
  const guests = screen.getByRole('spinbutton', { name: /number of guests/i });
  const event = screen.getByRole('combobox', { name: /occasion/i });
  const submitBtn = screen.getByRole('button', {
    name: /on click/i,
  });

  await user.change(dateSelect, { target: { value: '2024-01-01' } });
  await user.change(time, { value: '17:00' });
  await user.click(guests, { target: { value: '6' } });
  await user.change(event, { option: { name: 'Birthday' } });
  await user.click(submitBtn);
  // Assertion - Validate the function returns the same value that is in state
  expect(mockFunction).toStrictEqual({
    bookingDate: '2024-01-01',
    bookingTime: '19:00',
    numOfGuests: 6,
    occasion: 'Birthday',
  });
});

// TODO - Get this test to pass. Study more on testing
// test form
test('form fields have all been filled out', async () => {
  const mockFn = jest.fn();
  // render component
  const { container } = renderComponent();

  // grab required elements
  // eslint-disable-next-line
  const dateSelect = container.querySelector('input[type= date]');
  const timeRadio = screen.getByRole('radio', {
    name: /19:30/i,
  });
  const numOfGuestsInput = screen.getByRole('spinbutton', {
    name: /number of guests/i,
  });
  const occasionInput = screen.getByRole('combobox', {
    name: /occasion/i,
  });
  const submitBtn = screen.getByRole('button', {
    name: /on click/i,
  });

  await user.click(dateSelect, { value: '2024-01-01' });
  await user.click(timeRadio, { value: '19:30' });
  await user.click(numOfGuestsInput, { value: '2' });
  await user.click(occasionInput, { value: 'Anniversary' });
  await user.click(submitBtn);

  // Assertion
  expect(mockFn).toHaveBeenCalledWith({
    bookingDate: '2024-01-01',
    bookingTime: '19:30',
    numOfGuests: '2',
    occasion: 'Anniversary',
  });
});
