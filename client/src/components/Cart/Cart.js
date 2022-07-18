import { useDispatch, useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './Cart.module.scss';
import CartItem from './CartItem';
import CartForm from './CartForm';
import Modal from '../UI/Modal';
import { showAlert } from '../../store/slices/uiSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const itemsInCart = useSelector((state) => state.cart.items);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const orderId = useSelector((state) => state.ui.responseMessage);
  const isFetch = useSelector((state) => state.ui.isFetching);

  const closeButtonHandler = () => {
    dispatch(showAlert({ data: { responseMessage: '' } }));
  };

  return (
    <section className={classes.cartSection}>
      {!!totalQuantity && (
        <Card className={classes.cart}>
          <CartForm />
        </Card>
      )}
      <Card className={classes.cart}>
        <h2>Your Shopping Cart</h2>
        {!totalQuantity && <div>Your cart is empty!</div>}
        {!!totalQuantity && (
          <ul>
            {itemsInCart.map((item) => (
              <CartItem item={item} key={item.id} />
            ))}
          </ul>
        )}
        {!isFetch && orderId && (
          <Modal
            title="Congratulations! Your order has been placed!"
            message={`Order ID: ${orderId}`}
            onClose={closeButtonHandler}
          />
        )}
      </Card>
    </section>
  );
};

export default Cart;
