import Layout from '../Layout';
import ConfirmationDetails from '../ConfirmationDetails/ConfirmationDetails';

const BoookingConfirmationPage = ({ vals }) => {
  const { test1, test2 } = vals;
  console.log(test1, test2);
  return (
    <Layout>
      <section
        className='container'
        style={{ marginTop: '5%', textAlign: 'center' }}>
        <h1 style={{ color: 'var(--leaf)', marginBottom: '2rem' }}>
          Booking Confirmed
        </h1>
        <ConfirmationDetails />
      </section>
    </Layout>
  );
};

export default BoookingConfirmationPage;
