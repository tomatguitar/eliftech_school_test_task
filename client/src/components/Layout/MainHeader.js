import { useSelector } from 'react-redux';
import CartLabel from '../Cart/CartLabel';
import NavItem from './NavItem';
import classes from './MainHeader.module.scss';

const menuItems = [
  { id: 'shop', title: 'Shop', path: '/' },
  { id: 'cart', title: 'Cart', path: '/cart' },
  { id: 'history', title: 'History', path: '/history' }
];

const MainHeader = () => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const isItemInCart = totalQuantity > 0;
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          {menuItems.map((item) => {
            return <NavItem key={item.id} path={item.path} title={item.title} classes={classes} />;
          })}
        </ul>
        {isItemInCart && <CartLabel />}
      </nav>
      <h1>Web Delivery</h1>
    </header>
  );
};

export default MainHeader;
