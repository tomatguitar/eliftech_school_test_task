import { useDispatch } from 'react-redux';
// import { getShopProducts } from '../../store/slices/shopSlice';
import fetchShopData from '../../store/actions/shop-actions';

const ShopsItem = ({ shop, classes }) => {
  const dispatch = useDispatch();

  const shopsButtonClickHandler = () => {
    dispatch(fetchShopData(shop.title));
  };
  return (
    <li className={classes.shopsItem}>
      <button className={classes.button} type="button" onClick={shopsButtonClickHandler}>
        {shop.title}
      </button>
    </li>
  );
};

export default ShopsItem;
