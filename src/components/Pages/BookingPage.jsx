import React from 'react';
import Layout from '../Layout';
import BookingForm from '../BookingForm/BookingForm';

//TODO - Lift up state

const BookingPage = () => {
  return (
    <Layout>
      <section className='container' id='booking'>
        <h1>Booking Page</h1>
        <BookingForm />
      </section>
    </Layout>
  );
};

export default BookingPage;
