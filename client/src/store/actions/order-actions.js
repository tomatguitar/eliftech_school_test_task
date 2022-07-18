import { showError, showFetching } from '../slices/uiSlice';
import { getPlacedOrders } from '../slices/orderSlice';

// https://webdelivery.herokuapp.com/api/shops/${shopId}
const fetchOrderData = (params) => {
  let url = '/api/orders';

  if (params) {
    url += `?${new URLSearchParams(params)}`;
  }

  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error('Error fetching order history data!');
      }

      const data = await response.json();
      console.log(data);

      return data;
    };

    try {
      dispatch(showFetching(true));
      const orderData = await fetchData();
      dispatch(getPlacedOrders(orderData));
      dispatch(showFetching(false));
      // console.log('Products loaded');
    } catch (error) {
      dispatch(showError({ error: true, message: error.message }));
    }
  };
};

export default fetchOrderData;
