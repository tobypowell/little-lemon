import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../Layout';
import FullWidthSection from '../FullWidthSection/FullWidthSection';
import BookingForm from '../BookingForm/BookingForm';

import { useGlobalContext } from '../../Context/ReservationProvider';

const BookingPage = () => {
  const { state, initializeTimes, createReservation, loading, setLoading } =
    useGlobalContext();

  const navigate = useNavigate();
  const bookingEvent = ['Birthday', 'Anniversary'];

  useEffect(() => {
    // Simulate Api fetch
    let timeout;
    if (loading) {
      timeout = setTimeout(() => {
        setLoading(false);
        navigate('/confirmed');
      }, 5000);
    }
    // clean up
    return () => {
      clearTimeout(timeout);
    };
  }, [loading, setLoading, navigate]);

  const submitForm = (bookingDate, bookingTime, numOfGuests, occasion) => {
    createReservation(bookingDate, bookingTime, numOfGuests, occasion);
  };

  return (
    <Layout>
      <FullWidthSection classes='bookingPage' bgColor={'transparent'}>
        <section className='container' id='booking'>
          <h1>Booking Page</h1>
          <BookingForm
            bookingEvent={bookingEvent}
            availableTimes={state.times}
            initializeTimes={initializeTimes}
            loading={loading}
            submitForm={submitForm}
          />
        </section>
      </FullWidthSection>
    </Layout>
  );
};

export default BookingPage;
