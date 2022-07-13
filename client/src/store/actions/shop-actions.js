import { showError } from '../slices/uiSlice';
import { getShopProducts } from '../slices/shopSlice';

const fetchShopData = (shopId) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(`/api/shops/${shopId}`);

      if (!response.ok) {
        throw new Error('Error fetching shop data!');
      }

      const data = await response.json();
      console.log(data);

      return data;
    };

    try {
      const shopData = await fetchData();
      dispatch(getShopProducts(shopData));
      console.log('Products loaded');
    } catch (error) {
      dispatch(showError({ error: true, message: error.message }));
    }
  };
};

export default fetchShopData;
