import { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Input from '../UI/Input';
import sendCartData from '../../store/actions/cart-actions';

const CartForm = () => {
  const dispatch = useDispatch();

  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const phoneInputRef = useRef();
  const addressInputRef = useRef();

  const cart = useSelector((state) => state.cart);

  const fields = [
    { id: 'name', type: 'text' },
    { id: 'email', type: 'email' },
    { id: 'phone', type: 'tel' },
    { id: 'address', type: 'text' }
  ];

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredPhone = phoneInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;

    dispatch(
      sendCartData({
        userData: {
          name: enteredName,
          email: enteredEmail,
          phone: enteredPhone,
          address: enteredAddress
        },
        products: cart.items,
        totalPrice: cart.totalPrice
      })
    );
  };

  return (
    <form onSubmit={submitHandler}>
      <h2>Order details</h2>

      <Input ref={nameInputRef} label="Name" input={fields[0]} />
      <Input ref={emailInputRef} label="Email" input={fields[1]} />
      <Input ref={phoneInputRef} label="Phone" input={fields[2]} />
      <Input ref={addressInputRef} label="Address" input={fields[3]} />

      <button type="submit">Place Order</button>
    </form>
  );
};

export default CartForm;
