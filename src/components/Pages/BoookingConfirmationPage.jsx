import Layout from '../Layout';
import ConfirmationDetails from '../ConfirmationDetails/ConfirmationDetails';
import { useGlobalContext } from '../../Context/ReservationProvider';

const BoookingConfirmationPage = () => {
  const { state } = useGlobalContext();

  return (
    <Layout>
      <section className='container' style={{ marginTop: '8%' }}>
        <ConfirmationDetails {...state.reservation} />
      </section>
    </Layout>
  );
};

export default BoookingConfirmationPage;
