import classes from './HistoryOrder.module.scss';
import HistoryProduct from './HistoryProduct';

const HistoryOrder = (props) => {
  const { order } = props;
  const date = new Date(order.createdAt).toLocaleString('en-us', {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });

  return (
    <div className={classes.historyOrderContainer}>
      <ul className={classes.historyOrderList}>
        {order.products.map((item) => {
          return <HistoryProduct key={Math.random()} item={item} />;
        })}
      </ul>
      <div className={classes.total}>
        <div className={classes.date}>
          <p>Order ID:</p>
          <time>{order.orderId}</time>
        </div>
        <div className={classes.date}>
          <p>Order placed:</p>
          <time>{date}</time>
        </div>
        <p>Total price: ${order.totalPrice}</p>
      </div>
    </div>
  );
};

export default HistoryOrder;
