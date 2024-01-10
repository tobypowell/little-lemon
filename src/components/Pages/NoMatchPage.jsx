import React from 'react';
import Layout from '../Layout';

const NoMatchPage = () => {
  return (
    <Layout>
      <section
        className='container'
        style={{ marginTop: '10%', textAlign: 'center' }}>
        <h1 style={{ color: 'var(--leaf)', marginBottom: '2rem' }}>
          Sorry, the page you requested does not exist.
        </h1>
        <p className='subTitle'>Please try another page.</p>
      </section>
    </Layout>
  );
};

export default NoMatchPage;
