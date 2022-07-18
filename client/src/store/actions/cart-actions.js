import { showError, showFetching, showAlert } from '../slices/uiSlice';
import { replaceCart } from '../slices/cartSlice';

// https://webdelivery.herokuapp.com/api/orders

const sendCartData = (cart) => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const response = await fetch(`https://webdelivery.herokuapp.com/api/orders/api/orders`, {
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

      // console.log(responseData);
      return responseData;
    };

    try {
      dispatch(showFetching(true));
      const response = await sendRequest();
      dispatch(replaceCart());
      dispatch(showAlert(response));
      dispatch(showFetching(false));
      // console.log('Order was successfully placed!');
    } catch (error) {
      dispatch(showFetching(false));
      dispatch(showError({ error: true, message: error.message }));
    }
  };
};

export default sendCartData;
