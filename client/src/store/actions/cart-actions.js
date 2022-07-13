import { showError } from '../slices/uiSlice';
import { replaceCart } from '../slices/cartSlice';

const sendCartData = (cart) => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const response = await fetch(`api/orders`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(cart)
      });

      if (!response.ok) {
        throw new Error('Error sending cart data!');
      }

      const responseData = await response.json();

      return responseData;
      // console.log(responseData);
    };

    try {
      await sendRequest();
      dispatch(replaceCart());

      // console.log('Order was successfully placed!');
    } catch (error) {
      dispatch(showError({ error: true, message: error.message }));
    }
  };
};

export default sendCartData;
