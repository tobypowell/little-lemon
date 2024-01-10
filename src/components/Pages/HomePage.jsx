import React from 'react';
import Layout from '../Layout';
import Hero from '../Hero/Hero';
import Specials from '../Specials/Specials';
import Testimonials from '../Testimonials/Testimonials';
import About from '../About/About';

const HomePage = () => {
  return (
    <>
      <Layout>
        <Hero />
        <Specials />
        <Testimonials />
        <About />
      </Layout>
    </>
  );
};

export default HomePage;
