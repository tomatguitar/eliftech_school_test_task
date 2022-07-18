import classes from './HistoryProduct.module.scss';

const HistoryProduct = ({ item }) => {
  return (
    <li className={classes.item}>
      <header>
        <h3>{item.title}</h3>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          <span className={classes.price}>${item.total.toFixed(2)}</span> x{' '}
          <span>{item.quantity}</span>
        </div>
      </div>
    </li>
  );
};

export default HistoryProduct;
