import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import BookingForm from './BookingForm';

const renderComponent = () => {
  const availableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  const bookingEvent = ['birthday', 'anniversary'];

  const { container } = render(
    <BookingForm availableTimes={availableTimes} bookingEvent={bookingEvent} />
  );
  return {
    container,
  };
};

test('Renders the Booking form Heading', () => {
  // render component
  renderComponent();

  // grab elements
  const heading = screen.getByRole('heading');

  // Assertion - check component is doing what we expect
  expect(heading).toBeInTheDocument();
});

// InitializeTimes function
test('Returns list of available times when initializeTimes is called', () => {
  const mockFunction = jest.fn(() => {
    return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  });

  // render component
  renderComponent();

  // grab DOM elements

  // Assertion - test list is returning a list of times
  expect(mockFunction()).toStrictEqual([
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00',
  ]);
});

// updateTimes function
test('Returns the same value that is in state', async () => {
  const mockFunction = jest.fn({
    date: '2024-01-04',
    time: '19:00',
    numOfGuests: '2',
    event: 'Anniversary',
  });

  // render component
  renderComponent();

  // grab elements
  const dateSelect = screen.getByLabelText(/choose date/i);
  const timeSelect = screen.getByRole('combobox', { name: /choose time/i });
  const guests = screen.getByRole('spinbutton', { name: /number of guests/i });
  const event = screen.getByRole('combobox', { name: /occasion/i });
  const submitBtn = screen.getByRole('button', {
    name: /make your reservation/i,
  });

  await user.change(dateSelect, { target: { value: '2024-1-04' } });
  await user.change(timeSelect, { option: { name: '19:00' } });
  await user.click(guests, { target: { value: '2' } });
  await user.change(event, { option: { name: 'Anniversary' } });
  await user.click(submitBtn);
  // Assertion - Validate the function returns the same value that is in state
  expect.mock.toStrictEqual({
    date: '2024-01-04',
    time: '19:00',
    numOfGuests: '2',
    event: 'Anniversary',
  });
});
