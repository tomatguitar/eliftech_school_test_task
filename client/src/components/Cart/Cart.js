import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './Cart.module.scss';
import CartItem from './CartItem';
import CartForm from './CartForm';

const Cart = () => {
  const itemsInCart = useSelector((state) => state.cart.items);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

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
      </Card>
    </section>
  );
};

export default Cart;
