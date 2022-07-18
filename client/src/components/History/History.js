import { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Input from '../UI/Input';
import HistoryOrder from './HistoryOrder';
import fetchOrderData from '../../store/actions/order-actions';
import { replaceOrderData } from '../../store/slices/orderSlice';
import classes from './History.module.scss';

const fields = [
  { id: 'email', type: 'email' },
  { id: 'phone', type: 'tel' }
];

const History = () => {
  const [isInitial, setIsInitial] = useState(true);
  const dispatch = useDispatch();

  const emailInputRef = useRef();
  const phoneInputRef = useRef();
  const orders = useSelector((state) => state.orders.orders);
  const isFetch = useSelector((state) => state.ui.isFetching);
  const isEmptyHistory = orders.length === 0;
  let message = `Couldn't find your orders :(`;

  if (isInitial) {
    message = 'Go and find your orders!';
  }

  if (isFetch) {
    message = 'Loading...';
  }

  useEffect(() => {
    dispatch(replaceOrderData());
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPhone = phoneInputRef.current.value;

    dispatch(
      fetchOrderData({
        email: enteredEmail,
        phone: enteredPhone
      })
    );

    setIsInitial(false);

    emailInputRef.current.value = '';
    phoneInputRef.current.value = '';
  };

  return (
    <section className={classes.history}>
      <h2>Find your order</h2>
      <form className={classes.historyForm} onSubmit={submitHandler}>
        <Input ref={emailInputRef} label="Email" input={fields[0]} />
        <Input ref={phoneInputRef} label="Phone" input={fields[1]} />
        <button type="submit">Find Orders!</button>
      </form>
      {isEmptyHistory && <h3>{message}</h3>}
      {!isFetch && !isEmptyHistory && (
        <div className={classes.orderListContainter}>
          {orders.map((order) => {
            return <HistoryOrder key={Math.random()} order={order} />;
          })}
        </div>
      )}
    </section>
  );
};

export default History;
