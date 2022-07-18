import { useDispatch } from 'react-redux';
import Card from '../UI/Card';
import classes from './ProductItem.module.scss';
import { addItem } from '../../store/slices/cartSlice';

const ProductItem = (props) => {
  const dispatch = useDispatch();
  const { id, title, price, description, imgLink } = props;

  const addToCartHadler = () => {
    dispatch(
      addItem({
        id,
        title,
        price,
        quantity: 1,
        total: price
      })
    );
  };

  return (
    <li className={classes.item}>
      <Card className={classes.itemCard}>
        <header>
          <h3>{title}</h3>
          <img src={imgLink} alt={title} width="100px" height="100px" />
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <div className={classes.price}>${price.toFixed(2)}</div>
          <button onClick={addToCartHadler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
