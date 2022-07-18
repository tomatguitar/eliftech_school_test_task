import { useSelector } from 'react-redux';
import classes from './CartLabel.module.scss';

const CartButton = () => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <div className={classes.cartLabel}>
      <span className={classes.badge}>{totalQuantity}</span>
    </div>
  );
};

export default CartButton;
