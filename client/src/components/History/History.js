import { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Input from '../UI/Input';
import HistoryOrder from './HistoryOrder';
import fetchOrderData from '../../store/actions/order-actions';
import { replaceOrderData } from '../../store/slices/orderSlice';
import Modal from '../UI/Modal';
import classes from './History.module.scss';

const fields = [
  { id: 'orderId', type: 'text' },
  { id: 'email', type: 'email' },
  { id: 'phone', type: 'tel' }
];

const History = () => {
  const [isInitial, setIsInitial] = useState(true);
  const [isValid, setIsValid] = useState(true);
  const dispatch = useDispatch();

  const orderIdInputRef = useRef();
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
    const enteredOrderId = orderIdInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredPhone = phoneInputRef.current.value;

    const isEmptyInput = (value) => {
      return value.trim().length === 0;
    };

    const isEmptyOrderId = isEmptyInput(enteredOrderId);
    const isEmptyEmail = isEmptyInput(enteredEmail);
    const isEmptyPhone = isEmptyInput(enteredPhone);

    if (isEmptyOrderId && isEmptyEmail && isEmptyPhone) {
      setIsValid(false);
      return;
    }

    const requestObject = {};

    if (!isEmptyOrderId && isEmptyEmail && isEmptyPhone) {
      requestObject.orderId = enteredOrderId;
    } else if (isEmptyOrderId && !isEmptyEmail && !isEmptyPhone) {
      requestObject.email = enteredEmail;
      requestObject.phone = enteredPhone;
    } else {
      setIsValid(false);
      return;
    }

    dispatch(fetchOrderData(requestObject));

    setIsInitial(false);

    emailInputRef.current.value = '';
    phoneInputRef.current.value = '';
  };

  const closeButtonHandler = () => {
    setIsValid(true);
  };

  return (
    <section className={classes.history}>
      <h2>Find your order</h2>
      <form className={classes.historyForm} onSubmit={submitHandler}>
        <Input ref={orderIdInputRef} label="Order ID" input={fields[0]} />
        <div className={classes.delimeter}>
          <p>OR</p>
        </div>
        <Input ref={emailInputRef} label="Email" input={fields[1]} />
        <Input ref={phoneInputRef} label="Phone" input={fields[2]} />
        <button className={isFetch ? classes.disabled : ''} type="submit">
          Find Orders!
        </button>
      </form>
      {isEmptyHistory && <h3>{message}</h3>}
      {!isFetch && !isEmptyHistory && (
        <div className={classes.orderListContainter}>
          {orders.map((order) => {
            return <HistoryOrder key={Math.random()} order={order} />;
          })}
        </div>
      )}
      {!isValid && (
        <Modal title="Error!" message="Please fill proper fields" onClose={closeButtonHandler} />
      )}
    </section>
  );
};

export default History;
