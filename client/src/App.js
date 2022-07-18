import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import Cart from './components/Cart/Cart';
import History from './components/History/History';
import Layout from './components/Layout/Layout';
import ShopPage from './components/Shop/ShopPage';

import Notification from './components/UI/Notification';

const App = () => {
  const error = useSelector((state) => state.ui.error);

  return (
    <>
      {error && <Notification status={error.error} title="Error" message={error.message} />}

      <Layout>
        <Routes>
          <Route path="/" element={<ShopPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;
